import React, { useEffect, useState } from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import ContactCard from "../../components/Contactcard/ContactCard";
import { useDispatch, useSelector } from "react-redux";
import { getEmployee, getOrganizationProfiles } from "../../redux/ApisSlice";
import CreateCardModal from "../../components/Modals/CreateCardModal/CreateModal";
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
  let dispatch = useDispatch();
  let theToken = localStorage.getItem("vizzToken");
  let loading = useSelector((state) => state.ApiSlice.loading);
  useEffect(() => {
    dispatch(getOrganizationProfiles());
  }, []);
  let allProfiles = useSelector((state) => state.ApiSlice.profiles);

  console.log(allProfiles);

  let employees = allProfiles?.data?.employees;

  // console.log(admin);

  let [cardModal, setcardModal] = useState(false);
  let handlecardModal = () => {
    setcardModal(!cardModal);
  };
  return (
    <div className="home-main">
      <Sidebar />
      {employees ? (
        <div className="home-inner">
          <CreateCardModal
            cardModal={cardModal}
            handlecardModal={handlecardModal}
          />
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
            <div className="create-card-btn" onClick={() => handlecardModal()}>
              <FiPlus className="plusicon" />
              <p>Create New Card</p>
            </div>
          </div>

          {/*-------------------------------All Contact Cards-------------------------------------*/}

          <div className="contact-cards-main">
            <div className="contact-card-container">
              {employees?.map((elm) => {
                return (
                  <div
                    style={
                      employees.length < 2 ? { marginRight: "100px" } : null
                    }
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
      ) : (
        <div className="progress-container">
          <FadeLoader color="rgba(222, 165, 39, 1)" />
        </div>
      )}
    </div>
  );
};

export default Home;
