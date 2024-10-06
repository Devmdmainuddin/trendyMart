import { RiImageAddLine, RiLockPasswordFill } from "react-icons/ri";
import MenuItems from "./MenuItems";


const SellerMenu = () => {
    return (
        <>
            <MenuItems icon={RiImageAddLine} to='/dashboard/addProduct' text='add product'></MenuItems>
            <MenuItems icon={RiImageAddLine} to='/dashboard/addBlog' text='add Blog'></MenuItems>
            <MenuItems icon={RiLockPasswordFill} to='/dashboard/manageProduct' text='Manage Product'></MenuItems>
        </>

    );
};

export default SellerMenu;