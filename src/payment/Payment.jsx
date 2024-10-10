import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ChackoutForm from './ChackoutForm'
import useAuth from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { getCheckout } from '../redux/posts/postsSlice';
import { useEffect } from 'react';

const Payment = () => {
   
    const { user, } = useAuth()
    const carts = useSelector((state) => state.cart.cartItem)
    const dispatch = useDispatch();
    // const { selectedCheckout, isLoading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        if (user && user.email) {
            dispatch(getCheckout(user.email));
        }
    }, [dispatch, user]);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (carts?.length > 0) {
        console.log(carts[0]?.productPrice); // Access productPrice of the first item
    }

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);


    let content;
    if (isLoading) {
        content = <h1>loading............</h1>
    }
    if (!isLoading && error) {
        content = <h1> {error}</h1>
    }
    if (!isLoading && !error && selectedCheckout?.length === 0) {
        content = <h1>NO cart price FOUND</h1>
    }
    if (!isLoading && !error && selectedCheckout?.length > 0) {
        content = <div>
            <div className="capitalize text-center ">
                <h2 className="text-3xl capitalize ">welcome TO {user?.displayName}</h2>
                <p>shop payment info</p>
                <p>you total payment is : ${carts[0]?.productPrice.toFixed(2)}</p>
            </div>
            <div className='mt-6 border p-6'>
                <Elements stripe={stripePromise} >
                    <ChackoutForm total={selectedCheckout[0]?.productPrice} id={selectedCheckout[0]?._id} />
                </Elements>
            </div>

        </div>
    }
    return (
        <div className='w-[600px] mx-auto my-16'>

            {content}
        </div>
    )

}

export default Payment;