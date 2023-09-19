import React, { useEffect, useState } from "react";
import "./content.scss";
import { AiOutlinePlus } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import { ThemeProvider, createTheme } from "@mui/material";
import { RiDraggable } from "react-icons/ri";
import { FaRedditAlien } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import LinksModal from "../../LinksModal/LinksModal";
import { openLinkModal, openModal } from "../../../redux/Modalslice";
import { useDispatch, useSelector } from "react-redux";
import { returnIcons } from "../../../assets/ReturnSocialIcons";
import {
  addUserLink,
  getOrganizationLinks,
  getUserLinks,
  rearrangeLinks,
  rearrangeUserLinks,
} from "../../../redux/ApisSlice";
import { closeCustomModal, openCustomModal } from "../../../redux/Modalslice";
import CustomModal from "../../Modals/CustomModal/CustomModal";
import { setLinks } from "../../../redux/profileInfoSlice";
const Content = ({ check, userId, getLinkFunc }) => {
  const theme = createTheme({
    palette: {
      switchClr: {
        primary: "#DEA527",
      },
    },
  });

  let dispatch = useDispatch();

  let [linkId, setlinkId] = useState("");
  useEffect(() => {
    // let getLinkFunc = check === "user" ? getUserLinks : getOrganizationLinks;
    if (check === "user") {
      dispatch(getUserLinks(userId));
    } else {
      dispatch(getOrganizationLinks(userId));
    }
  }, []);

  let allLinks = useSelector((state) => state.ApiSlice.addedLinks);

  console.log(allLinks);

  let openUrl = (url) => {
    let theUrl = url?.includes("https://") ? url : `https://${url}`;
    window.open(theUrl);
  };

  // ------------------------------------------------Dragable functonality------------------------------------------

  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(allLinks?.data);
    // dispatch(Addlinks(links));
  }, [allLinks?.data]);
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, movedItem);
    // dispatch(Addlinks(updatedItems))
    setItems(updatedItems);

    let updatedLinksIds = [];
    updatedItems?.map((elm) => {
      updatedLinksIds.push(elm?.linkId);
    });
    // updating in database
    if (check === "user") {
      dispatch(rearrangeUserLinks({ updatedLinksIds, userId }));
      dispatch(setLinks(updatedItems));
    } else {
      dispatch(rearrangeLinks(updatedLinksIds));
    }

    // set(ref(db, `User/${user?.id}/links/`), [...updatedItems]).then(() => {

    // });
  };

  return (
    <div className={check === "user" ? `content-main` : `content-main2`}>
      <LinksModal check={check} userId={userId} />
      <CustomModal
        name={`linkDelWarn` + check}
        userId={userId}
        linkId={linkId}
      />
      <div className="content-upper">
        <div className="lead-direct">
          <div className="lead">
            {/* <ThemeProvider theme={theme}> */}
            <Switch defaultChecked size="small" />
            {/* </ThemeProvider> */}

            <p>Lead Mode</p>
          </div>
          <div className="direct">
            {/* <ThemeProvider theme={theme}> */}
            <Switch defaultChecked size="small" />
            {/* </ThemeProvider> */}
            <p>Direct</p>
          </div>
        </div>
        <div
          className="add-link"
          onClick={() => {
            dispatch(openModal()), dispatch(openLinkModal());
          }}
        >
          <AiOutlinePlus
            style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
          />{" "}
          Add Links and Contacts
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="content-links"
            >
              {/* allLinks */}
              {items?.map((elm, index) => (
                <Draggable
                  key={elm.linkId}
                  draggableId={elm.name}
                  index={index}
                >
                  {(provided) => (
                    <>
                      <div
                        className="single-link"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <div className="link-inner">
                          <div
                            className="link-left"
                            // style={{ border: "1px solid black" }}
                          >
                            <RiDraggable />
                            <div className="icon-container">
                              {/* <FaRedditAlien style={{ color: "white" }} /> */}
                              {returnIcons(elm.name, 16)}
                            </div>
                            <p>{elm?.name}</p>
                          </div>

                          <div className="link-right">
                            <div
                              className="remove-btn"
                              onClick={() => {
                                setlinkId(elm.linkId),
                                  dispatch(openCustomModal());
                              }}
                            >
                              Remove Link
                            </div>
                            <div
                              className="open-btn"
                              onClick={() => openUrl(elm?.value)}
                            >
                              Open Link
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* ----------------------------------- */}
      {/* {links?.map((elm) => {
          return (
            <div className="single-link">
              <div className="link-inner">
                <div
                  className="link-left"
              
                >
                  <RiDraggable />
                  <div className="icon-container">
                    
                    <img
                      src={elm?.image}
                      alt=""
                      style={{ height: "15px", width: "15px" }}
                    />
                  </div>
                  <p>{elm?.name}</p>
                </div>

                <div className="link-right">
                  <div className="remove-btn">Remove Link</div>
                  <div className="open-btn" onClick={() => openUrl(elm?.value)}>
                    Open Link
                  </div>
                </div>
              </div>
            </div>
          );
        })} */}
      {/* <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div>

        <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div>

        <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div>

        <div className="single-link">
          <div className="link-inner">
            <div className="link-left">
              <RiDraggable />
              <div className="icon-container">
                <FaRedditAlien style={{ color: "white" }} />
              </div>
              <p>Reddit</p>
            </div>

            <div className="link-right">
              <div className="remove-btn">Remove Link</div>
              <div className="open-btn">Open Link</div>
            </div>
          </div>
        </div> */}
      <div className="add-link-btm">
        <div
          className="add-link-btn"
          onClick={() => {
            dispatch(openModal()), dispatch(openLinkModal());
          }}
        >
          <AiOutlinePlus
            style={{ color: "#878787", fontSize: "16px", marginRight: "5px" }}
          />
          Add Links and Contacts
        </div>
      </div>
    </div>
  );
};

export default Content;
