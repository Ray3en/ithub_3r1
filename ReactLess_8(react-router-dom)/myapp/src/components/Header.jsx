import { NavLink } from "react-router-dom";



function Header() {

    return (
      <div className="header">
          <div className="logo"></div>
          <ul className="menu_wrapper">
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/'}><li>Home</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/about'}><li>About</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/contacts'}><li>Contacts</li></NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to={'/products'}><li>Products</li></NavLink>
          </ul>
      </div>
    );
  }
  
  export default Header;
  