import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BiSearchAlt } from "react-icons/bi";
import "./Contact.scss";
import { AiOutlineDownload } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { PiWarningCircleThin } from "react-icons/pi";
import people from "../../imgs/images.jpg";
import { AiFillEye } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { CircularProgress, colors } from "@mui/material";
import {
  deleteLead,
  getAllLeads,
  getEmpNames,
  getSingleLeadContacts,
} from "../../redux/ApisSlice";
import { useDispatch, useSelector } from "react-redux";
import ViewContactModal from "../../components/Modals/ViewContactModal/ViewContactModal";
import DeleteLeadModal from "../../components/Modals/DeleteLeadModal/DeleteLeadModal";
import DownloadExcel from "../../components/DownloadExel/DownloadExel";
import Tooltip from "@mui/material/Tooltip";

const Contacts = () => {
  //   console.log(screen.width);
  let [filtered, setfiltered] = useState([]);
  let [leadId, setLeadId] = useState("");
  let dispatch = useDispatch();
  let leadsLoading = useSelector((state) => state.ApiSlice.leadsLoading);
  let employeeList = useSelector((state) => state.ApiSlice.employeeList);
  let leads = useSelector((state) => state.ApiSlice.leads?.data);
  useEffect(() => {
    dispatch(getAllLeads());
    dispatch(getEmpNames());
    //
  }, []);

  useEffect(() => {
    setfiltered(leads);
  }, [leads]);

  //---------------------------------------------------(search functionality)-----------------------------------------------

  let [search, setsearch] = useState("");

  useEffect(() => {
    const result = leads?.filter((contact) => {
      return (
        contact?.name.toLowerCase().match(search.toLowerCase()) ||
        contact?.email.toLowerCase().match(search.toLowerCase())
      );
    });

    setfiltered(result);
  }, [search]);

  let [viewData, setViewData] = useState({});

  console.log(leads);
  let slicedString = (string, num) => {
    if (string?.length <= num) {
      return string;
    } else {
      return string?.slice(0, num) + "...";
    }
  };
  let [viewModal, setViewModal] = useState(false);
  let handleviewModal = () => {
    setViewModal(!viewModal);
  };
  let SingleLeads = (e) => {
    if (e.target.value === "all") {
      dispatch(getAllLeads());
      // setfiltered(leads);
    } else {
      dispatch(getSingleLeadContacts(e.target.value));
      // setfiltered(leads);
      // console.log("testing..");
    }
  };
  let [deletemodal, setdeletemodal] = useState(false);
  let handledeleteModal = () => {
    setdeletemodal(!deletemodal);
  };

  let deleteSingleLead = (id) => {
    dispatch(deleteLead(id));

    // , handledeleteModal();
  };

  return (
    <div className="contact-main">
      <Sidebar />
      <div className="contact-inner">
        <ViewContactModal
          viewModal={viewModal}
          handleviewModal={handleviewModal}
          viewData={viewData}
        />
        <DeleteLeadModal
          handledeleteModal={handledeleteModal}
          deletemodal={deletemodal}
          deleteSingleLead={() => {
            deleteSingleLead(leadId), handledeleteModal();
          }}
        />
        {/*-------------------------------header section-------------------------------------*/}
        <div className="contact-header">
          <div className="profilebtn">
            <p>Contacts</p>
          </div>

          <div className="searchbar">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setsearch(e.target.value)}
            />
            <BiSearchAlt className="searchicon" />
          </div>
          <div className="sortbtn">
            <select name="" id="" onChange={(e) => SingleLeads(e)}>
              <option
                value="all"
                // onClick={() => dispatch(getSingleLeadContacts(elm?.id))}
              >
                All
              </option>
              {employeeList?.data?.map((elm) => {
                return <option value={elm?.id}>{elm?.name}</option>;
              })}
            </select>
          </div>

          <div className="csvbtn">
            <AiOutlineDownload
              style={{ fontSize: "20px", marginRight: "5px" }}
            />
            {leads ? <DownloadExcel Data={leads} /> : "Export via csv"}
          </div>
        </div>

        {/*-------------------------------info section-------------------------------------*/}

        <div className="contact-info-container">
          <div className="info-inner">
            <div className="info">
              <div className="info-inner">
                <div className="icon-container">
                  <RiErrorWarningLine style={{ fontSize: "27px" }} />
                </div>
                <div className="text-container">
                  <h2 className="main-heading">
                    Ensure you have enabled contact exchange
                  </h2>
                  <p className="para-info">
                    These are the contacts you have received if contact exchange
                    is enabled on your profile.
                  </p>
                  {/* <h2 className="learn-more">Learn more</h2> */}
                </div>
              </div>
            </div>
            <div className="lead-stats">
              <div className="lead-stats-inner">
                <div className="total-leads">
                  <span>
                    Leads Generated{" "}
                    <Tooltip title="Total number of leads" placement="top">
                      <PiWarningCircleThin
                        style={{ fontSize: "15px", cursor: "pointer" }}
                      />
                    </Tooltip>
                  </span>
                  <h2>{filtered?.length}</h2>
                </div>
                <div className="pi-chart">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*-------------------------------table section-------------------------------------*/}

        <div className="tableContainer">
          <div className="table-head">
            <h2 className="col-heading">Contact</h2>
            <h2 className="col-heading">Email</h2>
            <h2 className="col-heading">Contacted with</h2>
            <h2 className="col-heading">Date</h2>
            <h2 className="col-heading">Actions</h2>
          </div>
          <div className="table-rows">
            {leadsLoading ? (
              <div
                style={{
                  color: "#eba21e",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress color="inherit" size={50} />
              </div>
            ) : filtered?.length > 0 ? (
              filtered?.map((elm) => {
                return (
                  <div className="table-row">
                    <div className="contact-name">
                      {/* <img
                        src="https://placehold.co/36x36"
                        alt=""
                        className="contact-img"
                      /> */}
                      <h2 className="name">{slicedString(elm?.name, 20)}</h2>
                    </div>
                    <div className="contact-email">
                      {slicedString(elm?.email, 14)}
                    </div>

                    <div className="contact-name">
                      {/* <img
                        src="https://placehold.co/36x36"
                        alt=""
                        className="contact-img"
                      /> */}
                      <h2 className="name">
                        {slicedString(elm?.contactedWith, 20)}
                      </h2>
                    </div>

                    <div className="date">{elm?.date}</div>

                    <div className="actions">
                      <AiFillEye
                        style={{
                          fontSize: "30px",
                          color: "#DEA527",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handleviewModal(), setViewData(elm);
                        }}
                      />
                      <BsTrashFill
                        style={{
                          fontSize: "30px",
                          color: "black",
                          marginLeft: "5px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          handledeleteModal(), setLeadId(elm?.id);
                        }}
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-leads">No leads found</div>
            )}

            {/* <div className="table-row">
              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>
              <div className="contact-email">Name@gmail.com</div>

              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>

              <div className="date">January 25, 2023</div>

              <div className="actions">
                <AiFillEye
                  style={{
                    fontSize: "30px",
                    color: "#DEA527",
                    cursor: "pointer",
                  }}
                />
                <BsTrashFill
                  style={{
                    fontSize: "30px",
                    color: "black",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div className="table-row">
              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>
              <div className="contact-email">Name@gmail.com</div>

              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>

              <div className="date">January 25, 2023</div>

              <div className="actions">
                <AiFillEye
                  style={{
                    fontSize: "30px",
                    color: "#DEA527",
                    cursor: "pointer",
                  }}
                />
                <BsTrashFill
                  style={{
                    fontSize: "30px",
                    color: "black",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div className="table-row">
              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>
              <div className="contact-email">Name@gmail.com</div>

              <div className="contact-name">
                <img src={people} alt="" className="contact-img" />
                <h2 className="name">Name</h2>
              </div>

              <div className="date">January 25, 2023</div>

              <div className="actions">
                <AiFillEye
                  style={{
                    fontSize: "30px",
                    color: "#DEA527",
                    cursor: "pointer",
                  }}
                />
                <BsTrashFill
                  style={{
                    fontSize: "30px",
                    color: "black",
                    marginLeft: "5px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div> */}
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
