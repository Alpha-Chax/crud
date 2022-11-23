import React from "react";
import edit from "../Icons/pencil.png";
import del from "../Icons/delete.png";
import "../Styles/Card.css";

const Card = () => {
  return (
    <>
      <div className="studentCard">
        <div className="studentTxt">
          <p className="stud-text stud-name">Karthi</p>
          <p className="stud-text stud-email">karthi@gmail.com</p>
          <p className="stud-text stud-phone">7305477760</p>
          <p className="stud-text stud-enroll">1234567305477760</p>
          <p className="stud-text stud-doa">08-Dec, 2021</p>
        </div>
        <div className="stud-card-icons">
          <div className="edit">
            <img src={edit} alt="edit" />
          </div>
          <div className="del">
            <img src={del} alt="delete" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
