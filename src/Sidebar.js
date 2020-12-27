import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './feature/userSlice'
import "./Sidebar.css"

function Sidebar() {
    const user=useSelector(selectUser)

    const recentItem=(topic)=>(
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
        
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.xmple.com/wallpaper/highlight-white-linear-gradient-black-1920x1080-c2-000000-f5f5f5-l-33-a-345-f-21.svg" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">{user.email[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">

                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">353</p>
                </div>

                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statNumber">1863</p>

                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('MERN Stack')}
                {recentItem('Premium Career group')}
                {recentItem('MERN Stack Pros')}
                {recentItem('Hiring')}
                {recentItem('reactjs')}
            </div>
            </div>

    )
}

export default Sidebar
