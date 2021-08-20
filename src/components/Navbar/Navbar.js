import { faBell, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import girlIMG from '../../assets/images/girl.jpg';
import logo from '../../assets/images/logo/logoXemail.png';
import './Navbar.scss';


const Navbar = () => {
    return (
        <div className='navbar-main'>
            <div className='navbar-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='navbar-search'>
                <input type="text" placeholder='Search for...' />
                <button><FontAwesomeIcon style={{ marginRight: '5px' }} icon={faSearch} /></button>
            </div>
            <div className='navbar-user'>
                <div className='navbar-user-icon'>
                    <p>
                        <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faBell} />
                        <span>3+</span>
                    </p>
                    <p>
                        <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faEnvelope} />
                        <span>7</span>
                    </p>
                </div>
                <div className='navbar-user-profile'>
                    <p>Valerie Luna</p>
                    <div className='profile-img'>
                        <img src={girlIMG} alt="girlIMG" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;