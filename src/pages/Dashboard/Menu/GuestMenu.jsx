import { RiImageAddLine, RiLockPasswordFill } from "react-icons/ri";
import MenuItems from "./MenuItems";
import { MdOutlineShoppingCart } from "react-icons/md";


const GuestMenu = () => {
    return (
        <>
            <MenuItems icon={MdOutlineShoppingCart } to='/dashboard/cart' text='Cart'></MenuItems>
        </>
    );
};

export default GuestMenu;