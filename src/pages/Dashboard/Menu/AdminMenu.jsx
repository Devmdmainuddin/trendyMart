import { RiLockPasswordFill } from "react-icons/ri";
import MenuItems from "./MenuItems";

const AdminMenu = () => {
    return (
        <>
            <MenuItems icon={RiLockPasswordFill} to='/dashboard/addProduct' text='add product'></MenuItems>
            <MenuItems icon={RiLockPasswordFill} to='/dashboard/manageProduct' text='Manage Product'></MenuItems>
            <MenuItems icon={RiLockPasswordFill} to='/dashboard/manageUsers' text='manageUsers'></MenuItems>
        </>
    );
};

export default AdminMenu;