import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  updatePassword,
  EmailAuthProvider,
   reauthenticateWithCredential
} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'
import useAxiosCommon from '../hooks/useAxiosCommon'
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const axiosCommon = useAxiosCommon()

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const handleUpdatePassword =async (password, currentPassword) => {
    const currentuser = auth.currentUser;
    const credential = EmailAuthProvider.credential(currentuser.email, currentPassword);
   
    try {
      await reauthenticateWithCredential(currentuser, credential);
      await updatePassword(user, password);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your password has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      toast.error(error.message);
    }

  }
  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut = async () => {

    setUser(null);
    setLoading(true)
    signOut(auth)
  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
  }
  //  const saveUser = async user =>{
  //     const currentUser= {
  //       name:user?.displayName,
  //       email:user?.email,
  //       role:'user',
  //       status:'verified',
  //     }
  //     const {data} = await axiosCommon.put(`/user`,currentUser)
  //     return data
  //   }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail }
      setUser(currentUser)



      if (currentUser) {
        // saveUser(currentUser)
        axiosCommon.post(`/jwt`, loggedUser)
          .then(res => {
            if (res.data.token) {
              localStorage.setItem('access-token', res.data.token)
              setLoading(false)
            }
          })
      } else {
        localStorage.removeItem('access-token')
        setLoading(false)
      }
    })
    return () => {
      unSubscribe();
    }
  }, [axiosCommon, user])

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    signInWithGoogle,
    resetPassword,
    logOut,
    updateUserProfile,
    handleUpdatePassword,
    sendPasswordResetEmail
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  // Array of children.
  children: PropTypes.object,
}

export default AuthProvider
