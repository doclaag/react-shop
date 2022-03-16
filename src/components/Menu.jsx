import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
    return (
        <div classname="Menu">
            <ul>
                <li>
                    <a href="/" classname="title">My orders</a>
                </li>
                <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>

    );
}

export default Menu;