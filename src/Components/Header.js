import React from 'react'
import '../Styles/Header.css'
import {CiSearch} from 'react-icons/ci'
import {TfiBell} from 'react-icons/tfi'
import {IoCaretBackCircleOutline} from 'react-icons/io5'
import { useHistory } from 'react-router-dom'

const Header = () => {
  let history = useHistory()
  const handleBack = ()=>{
    history.push("/");
  }

  return (
    <>
    <div className="main-container">
        <div className="back-btn">
        <IoCaretBackCircleOutline onClick={handleBack} className='back'/>
        </div>
        <div className="right-icons">
            <div className="search-box">
                <CiSearch className='search-icon-1'/>
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