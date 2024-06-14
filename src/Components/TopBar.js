import React from 'react';
import './TopBar.css';

function TopBar() {
    return (
        <div className="top-bar">
            <div className="logo"> Java Development Blog</div>
            <div className="links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}

export default TopBar;