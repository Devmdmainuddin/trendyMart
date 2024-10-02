
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProducts = () => {
  const { data: products = [], isPending: loading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // const { data } = await axios.get(`FakeData.js`)
      // console.log(data);
      // return data
      const { data } = await axios.get(`https://hekto.onrender.com/products`)
      return data
      
    },
  })

    // const cartTotal = product.reduce((acc,items)=> acc + parseInt(items.price),0)
    return [products,loading,refetch]
};

export default useProducts;