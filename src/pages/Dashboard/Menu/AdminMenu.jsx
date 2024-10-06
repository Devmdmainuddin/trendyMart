import { RiImageAddLine, RiLockPasswordFill } from "react-icons/ri";
import { FaRegFolderClosed } from "react-icons/fa6";
import MenuItems from "./MenuItems";

const AdminMenu = () => {
    return (
        <>
            <MenuItems icon={RiImageAddLine} to='/dashboard/addProduct' text='add product'></MenuItems>
            <MenuItems icon={RiImageAddLine } to='/dashboard/addBlog' text='add Blog'></MenuItems>
            <MenuItems icon={FaRegFolderClosed} to='/dashboard/manageProduct' text='Manage Product'></MenuItems>
            <MenuItems icon={FaRegFolderClosed} to='/dashboard/manageUsers' text='manageUsers'></MenuItems>
        </>
    );
};

export default AdminMenu;