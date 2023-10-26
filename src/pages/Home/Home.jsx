import React, { useEffect, useState } from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import ContactCard from "../../components/Contactcard/ContactCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployee,
  getallOrganization,
  getOrganizationProfiles,
} from "../../redux/ApisSlice";
import CreateCardModal from "../../components/Modals/CreateCardModal/CreateModal";
import FadeLoader from "react-spinners/FadeLoader";
import DeleteCardModal from "../../components/Modals/DeleteCardModal/DeleteCardModal";

const Home = () => {
  let dispatch = useDispatch();
  let vizzRole = localStorage.getItem("vizzRole");
  console.log(vizzRole);

  let profilesLoading = useSelector((state) => state.ApiSlice.profilesLoading);
  let [filtered, setfiltered] = useState([]);
  useEffect(() => {
    if (vizzRole === "admin") {
      dispatch(getallOrganization());
    } else if (vizzRole === "teamAdmin") {
      dispatch(getOrganizationProfiles());
    }
  }, []);

  let allProfiles = useSelector((state) => state.ApiSlice.profiles);
  let resp = useSelector((state) => state.ApiSlice.response);
  console.log(resp);

  console.log(allProfiles);

  let employees = allProfiles?.data?.employees;

  useEffect(() => {
    if (vizzRole === "admin") {
      setfiltered(allProfiles?.data);
    } else {
      setfiltered(allProfiles?.data?.employees);
    }
  }, [allProfiles]);

  // console.log(admin);

  let [cardModal, setcardModal] = useState(false);

  let handlecardModal = () => {
    setcardModal(!cardModal);
  };

  //---------------------------------------------------(search functionality)-----------------------------------------------

  let [search, setsearch] = useState("");

  useEffect(() => {
    const result = employees?.filter((user) => {
      return user?.name.toLowerCase().match(search.toLowerCase());
    });

    setfiltered(result);
  }, [search]);

  // -------------------------------------------------Sort functionality-------------------------------------------------

  const sortByAscending = () => {
    const sortedData = [...filtered].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setfiltered(sortedData);
  };

  const sortByDescending = () => {
    const sortedData = [...filtered].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setfiltered(sortedData);
  };

  let handleSort = (e) => {
    if (e.target.value === "aToz") {
      sortByAscending();
    } else {
      sortByDescending();
    }
  };
  let profileUrl = import.meta.env.VITE_PROFILE_URL;
  return (
    <div className="home-main">
      <Sidebar />
      {!profilesLoading ? (
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
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setsearch(e.target.value)}
                value={search}
              />
              <BiSearchAlt className="searchicon" />
            </div>
            <div className="sortbtn">
              <select name="" id="" onChange={(e) => handleSort(e)}>
                <option value="" disabled selected>
                  Sort
                </option>
                <option value="aToz" onClick={() => sortByAscending()}>
                  A to Z
                </option>
                <option value="zToa" onClick={() => sortByDescending()}>
                  Z to A
                </option>
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
              {filtered?.map((elm) => {
                return (
                  <div
                    style={
                      filtered?.length < 2 ? { marginRight: "100px" } : null
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
