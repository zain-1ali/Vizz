import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import "./LinksModal.scss";
import {
  openLinkModal,
  openLinkEditModal,
  openLinkUpdateModal,
  openModal,
  closeAllModal,
} from "../../redux/Modalslice";
// import { addLink, changeLinkName, removeLink } from "../Redux/Singlelinkslice";
import { Box } from "@mui/material";
// import {
//   contactIcons,
//   socialIcons,
//   media,
//   payment,
//   more,
// } from "../assets/ReturnSocialIcons";
import { RxCross2 } from "react-icons/rx";
import { HiBadgeCheck } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import {
  contactIcons,
  returnIcons,
  socialIcons,
} from "../../assets/ReturnSocialIcons";
import LinkEditModal from "../LinkEditModal/LinkEditModal";
import {
  getAllSocialLinks,
  getOrganizationLinks,
  getUserLinks,
} from "../../redux/ApisSlice";
import { AiOutlineArrowRight, AiOutlineMinus } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
// import Linkeditmodal from "./Linkeditmodal";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";
// import LinkupdateModal from "./LinkupdateModal";
// import { setLinkDescription, setLinkHighlight } from "../Redux/UserinfoSlice";
// import { useMediaQuery } from "react-responsive";

// import { removeLink } from "../Redux/Singlelinkslice";

const LinksModal = ({ check, userId }) => {
  // console.log(link);
  const linkModal = useSelector((state) => state.modalHandeler.linkmodal);
  const linkEditmodal = useSelector(
    (state) => state.modalHandeler.linkeditmodal
  );
  const linkupdateModal = useSelector(
    (state) => state.modalHandeler.linkupdateModal
  );
  const modal = useSelector((state) => state.modalHandeler.modal);
  const dispatch = useDispatch();

  // getting all social links from backend

  useEffect(() => {
    dispatch(getAllSocialLinks());
    // if (check === "user") {
    //   dispatch(getUserLinks(userId));
    // } else {
    //   dispatch(getOrganizationLinks());
    // }
  }, []);

  let allLinks = useSelector((state) => state.ApiSlice.allLinks);
  // console.log(allLinks.data);

  let addedLinks = useSelector((state) => state.ApiSlice.addedLinks);
  // console.log(addedLinks.data);

  let [linkInfo, setLinkInfo] = useState("");
  let addedOrNot = (id) => {
    let ifadded = addedLinks?.data?.some((elm) => {
      return elm?.linkId === id;
    });

    return ifadded;
  };

  let getAddedLink = (id) => {
    let theLink = addedLinks?.data?.find((elm) => {
      return elm?.linkId === id;
    });
    setLinkInfo(theLink?.value);
  };

  // Modal box style
  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    height: 500,
    bgcolor: "white",
    borderRadius: "18px",
    outline: "none",
    // overflow: 'auto',
    // border: '2px solid #000',
    boxShadow: 24,
    p: linkModal ? "20px" : "12px",
  };

  let [selectedLink, setSelectedLink] = useState({});

  //   let checkAdded = (name) => {
  //     return link?.some((elm) => {
  //       return elm?.title === name;
  //     });

  //   };

  //   let addlinkname = async (name) => {
  //     let findlink = await link?.filter((item) => {
  //       return item?.title === name;
  //     });

  //     console.log(findlink);
  //     dispatch(changeLinkName(findlink[0]?.name));
  //     dispatch(setLinkDescription(findlink[0]?.description));
  //     dispatch(setLinkHighlight(findlink[0]?.isHighLighted));
  //   };
  // console.log(linkEditmodal);
  console.log(allLinks);
  return (
    <>
      <Modal
        open={modal}
        onClose={() => {
          dispatch(closeAllModal());
          // dispatch(removeLink()),
          // dispatch(setLinkHighlight(false));
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <RxCross2
              style={{ fontSize: "18px", cursor: "pointer" }}
              onClick={() => dispatch(closeAllModal())}
            />
          </div>
          {linkModal && (
            <div className="links-modal-main">
              <div className="links-upper">
                <h2>Add Social Links</h2>
                <p>
                  Select from our wide variety of links and contact info below.
                </p>
              </div>
              {allLinks?.data?.map((elem) => {
                return (
                  <div className="single-type-link">
                    <h2>{elem?.category}</h2>

                    <div className="links">
                      {elem.links.map((elm) => {
                        return (
                          <div className="single-link">
                            <div className="single-link-inner">
                              <div className="icon-name">
                                <div className="icon-circle">
                                  {returnIcons(elm.name, 20)}
                                </div>
                                {/* {elm.img} */}
                                <p className="name">{elm.name}</p>
                              </div>
                              <div className="add-remove">
                                {addedOrNot(elm?.id) ? (
                                  <div
                                    className="btn"
                                    onClick={() => {
                                      setSelectedLink(elm),
                                        getAddedLink(elm?.id),
                                        dispatch(openLinkEditModal());
                                    }}
                                  >
                                    <MdModeEdit
                                      style={{
                                        color: "#46FF05",
                                        fontSize: "15px",
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div
                                    className="btn"
                                    onClick={() => {
                                      dispatch(openLinkEditModal()),
                                        setSelectedLink(elm),
                                        setLinkInfo("");
                                    }}
                                  >
                                    <BsPlusLg
                                      style={{
                                        color: "#46FF05",
                                        fontSize: "15px",
                                      }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* <div className="single-link"></div>
               <div className="single-link"></div>
               <div className="single-link"></div> */}
                    </div>
                  </div>
                );
              })}

              {/* <div className="single-type-link">
                <h2>Social</h2>
                <div className="links">
                  {socialIcons.map((elm) => {
                    return (
                      <div
                        className="single-link"
                        onClick={() => setSelectedLink(elm)}
                      >
                        <div className="single-link-inner">
                          <div className="icon-name">
                            <div className="icon-circle">{elm.img}</div>
                            <p className="name">{elm.name}</p>
                          </div>
                          <div className="add-remove">
                            <div
                              className="btn"
                              onClick={() => {
                                setSelectedLink(elm),
                                  dispatch(openLinkEditModal());
                              }}
                            >
                              <BsPlusLg
                                style={{ color: "#46FF05", fontSize: "15px" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}{" "}
                </div>
              </div> */}
            </div>
          )}
          {linkEditmodal && (
            <LinkEditModal
              link={selectedLink}
              linkInfo={linkInfo}
              check={check}
              userId={userId}
            />
          )}
          {/* linkInfo={linkInfo} */}
        </Box>
      </Modal>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </>
  );
};

export default LinksModal;
