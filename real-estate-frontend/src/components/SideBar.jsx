import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { MdUpload } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BsFillTagFill } from "react-icons/bs";
import '../styles/sidebar.css'
const SideBar = () => {
  return (
    <div className='main-sidebar'>
            <div className='logo-side'>
                <h1>Builders</h1>
            </div>
            <div className='logo-icon'>
                <div className='side-flex' id='prop-icon'>
                    <AiFillHome className='side-icon'/>
                    <p>Property</p>
                </div>
                <div className='side-flex'>
                    <MdNotifications className='side-icon'/>
                    <p>Assistance</p>
                </div>
                <div className='side-flex'>
                    <GiReceiveMoney className='side-icon'/>
                    <p>Recieved Interest</p>
                </div>
                <div className='side-flex-img'>
                    <MdUpload className='side-icon'/>
                    <p>Sent Interest</p>
                </div>
                <div className='side-flex'>
                    <AiFillEye className='side-icon'/>
                    <p>Property Views</p>
                </div>
                <div className='side-flex'>
                    <BsFillTagFill className='side-icon'/>
                    <p>Traffic Plan</p>
                </div>
            </div>
        </div>
  )
}

export default SideBar