import { Link } from "react-router-dom";



function Header() {
    return (
      <div className="header">
          <div className="logo"></div>
          <ul className="menu_wrapper">
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/contacts'}><li>Contacts</li></Link>
            <Link to={'/products'}><li>Products</li></Link>
          </ul>
      </div>
    );
  }
  
  export default Header;
  