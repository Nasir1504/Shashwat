import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

//styles
import './dashboard.scss';

//imgs
import ProfileImg from '../../assets/imgs/dashboard/profile-img.png';
import logo from '../../assets/imgs/dashboard/logo.png';
import MessageIcon from '../../assets/imgs/dashboard/message-icon.png';
import DashboardIcon from '../../assets/imgs/dashboard/dashboard-icon.png';
import SettingIcon from '../../assets/imgs/dashboard/setting-icon.png';
import LogoutIcon from '../../assets/imgs/dashboard/logout-icon.png';

//components
import FormComp from './Form-Comp/FormComp';
import BlogPost from './Blog-Post/BlogPost';



export default function Dashboard() {
    const navigate = useNavigate();
    const [navItem, setNavItem] = useState(1)

    const handleLogout = () => {
        localStorage.removeItem('auth');
        navigate('/login', { replace: true });
    }

    return (
        <div className='dashboard-main-container'>
            <section className="side-bar">
                <img src={logo} alt="" className="logo-img" />

                <div className="nav-icon-main">
                    <div className="dashboard-icon icon">
                        <img src={DashboardIcon} alt="" />
                    </div>
                    <div className="message-icon icon" onClick={() => { setNavItem(1) }}>
                        {navItem === 1 && <hr />}<img src={MessageIcon} alt="" />
                    </div>
                    <div className="setting-icon icon" onClick={() => { setNavItem(2) }}>
                        {navItem === 2 && <hr />}<img src={SettingIcon} alt="" />
                    </div>
                    <div className="logout-icon icon" onClick={handleLogout}>
                        <img src={LogoutIcon} alt="" />
                    </div>

                </div>
            </section>


            <section className="header-main">
                <div className="profile-setting">
                    <h3>En</h3>
                    <FontAwesomeIcon icon={faBell} className="notification-icon" />

                    <div class="user-dropdown">
                        <div className='profile-name'>
                            <img src={ProfileImg} alt="" className='profile-img' />
                            <p>
                                Keyur Soni <br />
                                <span>Admin</span>
                            </p>

                            <FontAwesomeIcon icon={faCircleChevronDown} className="dropdown-icon" />
                        </div>

                        <div class="dropdown-content">
                            <button className="logoutbtn" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
                <h2>Welcome Admin</h2>
                <h3>Dashboard</h3>


            </section>



            <section className="middle-section">
                {
                    navItem === 1 ?
                        <FormComp /> :
                        <BlogPost />
                }
            </section>
        </div>
    )
}
