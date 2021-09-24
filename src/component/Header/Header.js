import React from 'react';
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <li>
                <a href="/shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/inventory">Manage Inventory</a>
            </li>        
        </div>
    );
};

export default Header;