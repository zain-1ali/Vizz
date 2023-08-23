import React from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import ContactCard from "../../components/Contactcard/ContactCard";

const Home = () => {
  return (
    <div className="home-main">
      <Sidebar />
      <div className="home-inner">
        {/*-------------------------------heade section-------------------------------------*/}
        <div className="home-header">
          <div className="profilebtn">
            <p>Profile</p>
          </div>

          <div className="searchbar">
            <input type="text" placeholder="Search" />
            <BiSearchAlt className="searchicon" />
          </div>
          <div className="sortbtn">
            <select name="" id="">
              <option value="">Sort</option>
            </select>
          </div>
        </div>

        {/*-------------------------------Create Card button-------------------------------------*/}

        <div className="create-card-div">
          <div className="create-card-btn">
            <FiPlus className="plusicon" />
            <p>Create New Card</p>
          </div>
        </div>

        {/*-------------------------------All Contact Cards-------------------------------------*/}

        <div className="contact-cards-main">
          <div className="contact-card-container">
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
