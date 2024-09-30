import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'

const MenuItems = ({ to, icon:Icon, text }) => {
    return (
      
            <NavLink to={to}
                className={({ isActive }) => `capitalize  flex items-center gap-2 mt-2 ${isActive ? '' : ''}`}>
        <Icon/>
                <span className={``}>{text}</span>

            </NavLink>
       
    );
};
MenuItems.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.elementType,
  }
export default MenuItems;