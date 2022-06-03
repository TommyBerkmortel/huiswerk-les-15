import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Header.css';
import logo from '../../assets/logo.png';
import HeaderContent from "../headerContent/HeaderContent";

function Header() {
    return (
        <header className="outer-container">
            <div className="inner-container">
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active-link">Hottest posts</NavLink>
                        </li>

                        <li>
                            <Link to="/subreddit/test" >reddit</Link>
                        </li>

                        <li>
                            <Link  to="/subreddit/test" >memes</Link>
                        </li>
                    </ul>
                </nav>
                <HeaderContent
                    pageTitle="Reddit"
                    image={<img src={logo} alt="Reddit logo" className="logo"/>}
                />
            </div>
        </header>
    );
}

export default Header;