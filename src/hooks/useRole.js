
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const useRole = () => {
    const { user, loading } = useAuth()
    const axiosSecure= useAxiosSecure()

    const { data: role = [], isloading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure(`/user/${user?.email}`)
            return data.role
        }
    })

    
    return [role, isloading]
};

export default useRole;