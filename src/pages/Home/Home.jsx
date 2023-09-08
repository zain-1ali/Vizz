import React, { useEffect } from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import ContactCard from "../../components/Contactcard/ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee, getOrganizationProfiles } from "../../redux/ApisSlice";

const Home = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrganizationProfiles());
  }, []);
  let allProfiles = useSelector((state) => state.ApiSlice.profiles);
  console.log(allProfiles);

  let admin = allProfiles?.data;
  let employees = allProfiles?.data?.employees;

  console.log(admin);

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
            <ContactCard data={admin} />
            {employees?.map((elm) => {
              return (
                <div
                  style={employees.length < 2 ? { marginRight: "100px" } : null}
                >
                  <ContactCard data={elm} />
                </div>
              );
            })}

            {/* <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
