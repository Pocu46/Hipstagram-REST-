import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header(props) {
    return(
        <div>
            <header className='header'>
                <img src="Bruce_Willis01.jpg" />

                <div className='loginBlock'>
                    {
                        props.isAuth ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                    }
                </div>
            </header>
        </div>
    );
}

export default Header;