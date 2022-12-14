import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import '../Styles/Navbar.css'
import homeI from '../Icons/home.png'
import course from '../Icons/course.png'
import student from '../Icons/students.png'
import vector from '../Icons/Vector.png'
import report from '../Icons/Report.png'
import setting from '../Icons/Setting.png'
import logout from '../Icons/Logout.png'

const Navbar = () => {

    let location = useLocation();
  return (
    <>
    <div className="Navbar">
    <div className="Nav-top">
        <div>
        <div className="line2"></div>
        <div>
        <h2 className='title2'>CRUD OPERATIONS</h2>
        </div>
        </div>
        <div className="Nav-profile">
            <div className="profile-pic">
            <img className='top-img' src="https://i.ibb.co/RPshsq6/photo.png" alt="" />
            </div>
            <div className="text-2">
                <h3 className='profile-name'>Karthi Madesh</h3>
                <h4 className='adm'>Admin</h4>
            </div>
        </div>
        <div className="nav-links">
            <ul>
                <li>
                <NavLink className={`${location.pathname==="/"? "active": "not-active"}`} to="/"><img className='icons' src={homeI} alt="home" /> Home</NavLink>
                </li>
                <li>
                    <NavLink className={`${location.pathname==="/course"? "active": ""}`} to="/course"><img className='icons' src={course} alt="course" /> Course</NavLink>
                </li>
                <li>
                    <NavLink className={`${location.pathname==="/students"? "active": ""}`} to="/students"><img className='icons' src={student} alt="student" /> Students</NavLink>
                </li>
                <li>
                    <NavLink className={`${location.pathname==="/payment"? "active": ""}`} to="/payment"><img className='icons' src={vector} alt="vector" /> Payment</NavLink>
                </li>
                <li>
                    <NavLink className={`${location.pathname==="/report"? "active": ""}`} to="/report"><img className='icons' src={report} alt="report" /> Report</NavLink>
                </li>
                <li>
                    <NavLink className={`${location.pathname==="/settings"? "active": ""}`} to="/settings"><img className='icons' src={setting} alt="setting" /> Settings</NavLink>
                </li>
            </ul>
            <div className="logout">
                    <NavLink  to="/signup">Logout <img className='logout-icon' src={logout} alt="logout" /></NavLink>
            </div>    
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar