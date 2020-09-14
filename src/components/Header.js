import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import style from '../style.css';

const Header = () => {

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="red item">
                Streamy
            </Link>
            <div className="right menu">
                <Link to="/" className="white item">All streams</Link>
                <Link to="/streams/new" className="white item">New Stream</Link>
                <GoogleAuth />
            </div>
        </div>
    );
}

export default Header;