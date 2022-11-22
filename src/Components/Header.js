import React from 'react'
import '../Styles/Header.css'
import {CiSearch} from 'react-icons/ci'
import {TfiBell} from 'react-icons/tfi'
import {IoCaretBackCircleOutline} from 'react-icons/io5'

const Header = () => {
  return (
    <>
    <div className="main-container">
        <div className="back-btn">
        <IoCaretBackCircleOutline className='back'/>
        </div>
        <div className="right-icons">
            <div className="search-box">
                <CiSearch className='search-icon'/>
                <input type="search" placeholder='Search...'/>
            </div>
            <div className="bell-icon">
                <TfiBell className='bell'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header