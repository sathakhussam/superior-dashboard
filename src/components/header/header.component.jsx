import React from 'react';
import "./header.styles.css"
import {Link} from 'react-router-dom'

function Header(props) {
    return (
        <div>

        <div className="Header">
            <h2>Superior Rental</h2>
            <div className="avatar"></div>
        </div>
        <div className="subHeader">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/cars">Cars</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/users">Users</Link>
                <Link to="/coupons">Coupons</Link>
            </div>
        </div>
        </div>
    );
}

export default Header;