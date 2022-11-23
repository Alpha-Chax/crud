import React from "react";
import "../Styles/Students.css";
import { MdOutlinePlayArrow } from "react-icons/md";
import Card from "../Components/Card";

const Students = () => {
  return (
    <>
      <div className="students-container">
        <div className="container-top">
          <div className="studentsList">
            <p className="headingLeft">Students List</p>
          </div>
          <div className="buttonsRight">
            <div className="arrow-btns">
            <MdOutlinePlayArrow className="top-arrow" />
            <MdOutlinePlayArrow className="bottom-arrow" />
            </div>   
            <button className="add-student">ADD NEW STUDENT</button>
          </div>
        </div>
        <div className="container-mid">
            <p className="midText">Name</p>
            <p className="midText">Email</p>
            <p className="midText">Phone</p>
            <p className="midText">Enroll Number</p>
            <p className="midText">Date of admission</p>
        </div>
        <div className="container-bottom">
            <Card/><Card/><Card/><Card/><Card/><Card/>
        </div>
      </div>
    </>
  );
};

export default Students;
