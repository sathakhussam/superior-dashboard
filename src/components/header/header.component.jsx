import React from 'react';
import "./header.styles.css"

function Header(props) {
    return (
        <div className="Header">
            <h2>Dashboard</h2>
            <div className="avatar"></div>
        </div>
    );
}

export default Header;