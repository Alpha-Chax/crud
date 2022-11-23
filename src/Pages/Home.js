import React from "react";
import "../Styles/Home.css";
import big1 from "../Icons/big1.png";
import big2 from "../Icons/big2.png";
import big3 from "../Icons/big3.png";
import big4 from "../Icons/big4.png";
import { useHistory } from "react-router-dom";

const Home = () => {
    let history = useHistory();
    let handleStudents =()=>{
      history.push("/students")
    }
    let handleCourse =()=>{
      history.push("/course")
    }
    let handlePay =()=>{
      history.push("/payment")
    }
    let handleUsers =()=>{
      history.push("/users")
    }

  return (
    <>
      <div className="main">
        <div className="cards card1" onClick={handleStudents}>
          <img className="big-icons big1" src={big1} alt="big1" />
          <p className="card-text student">Students</p>
          <p className="stud">243</p>
        </div>
        <div className="cards card2" onClick={handleCourse}>
          <img className="big-icons big2" src={big2} alt="big2" />
          <p className="card-text course">Course</p>
          <p className="card-bottom-text">13</p>
        </div>
        <div className="cards card3" onClick={handlePay}>
          <img className="big-icons big3" src={big3} alt="big3" />
          <p className="card-text pay">Payments</p>
          <p className="card-pay-text">INR</p>
          <p className="pay2">556,000</p>
        </div>
        <div className="cards card4" onClick={handleUsers}>
          <img className="big-icons big4" src={big4} alt="big4" />
          <p className="card-text">Users</p>
          <p className="card-bottom-text">3</p>
        </div>
      </div>
    </>
  );
};

export default Home;
