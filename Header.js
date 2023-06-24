import React from "react";
import "./Header.css";

/*import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import SearchIcon from '@mui/icons-material/Search';*/
import { FaShoppingBasket } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { Link } from "react-router-dom";
//import {useStateValue} from "./StateProvider";
          



function Header(){
  // const [{basket}, dispatch]= useStateValue();
    return(
        <div className="header">
            <Link to="/" style={{textDecoration:"none"}}>

                 <div className="header_logo">
                  <FaStore className="header_logoImage" fontSize="large" /> 
                    <h2 className="header_logoTitle">E-Shop</h2>
                 </div>
            </Link>
           
       
       <div className="header_search">
        <input type="text" className="header_searchInput" />
        <FaSearch className="header_searchIcon" />
       </div>

       <div className="header_nav">
        <div className="nav_item">
            <span className="nav_itemLineOne">Hello Guest</span>
            <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
            <span className="nav_itemLineOne">Your</span>
            <span className="nav_itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{textDecoration:"none"}}>
        <div className="nav_item">
           <FaShoppingBasket className="nav_itemBasket"/>
            <span className="nav_itemLineTwo nav_basketCount">{0} </span>
        </div>
        </Link>
       </div>
        </div>
    )
}

export default Header
