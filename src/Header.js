import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOptions from './HeaderOptions';
import {useDispatch, useSelector} from 'react-redux'
import { logout, selectUser } from './feature/userSlice';
import { auth } from './firebase'
import { TextareaAutosize } from '@material-ui/core';

function Header() {
    
    const dispatch=useDispatch()

    const logoutOfApp=()=>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
            
            <div className="header__left">
                <img src="https://evergreenengineering.com/wp-content/uploads/2019/06/LinkedIn_logo_initials.png" alt=""/>

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                
                <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>

                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>

                <HeaderOptions Icon={ChatIcon} title="Messaging"/>

                <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>

                <HeaderOptions avatar={true} title="Me" onClick={logoutOfApp}/>
               
            </div>

        </div>
    )
}

export default Header
