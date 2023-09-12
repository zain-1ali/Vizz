import React, { useEffect, useState } from "react";
import "./LinkEditModal.scss";
import Mobile from "../EditCardContainerComponents/Mobile/Mobile";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

import {
  openLinkModal,
  openLinkEditModal,
  openLinkUpdateModal,
  openModal,
  closeAllModal,
} from "../../redux/Modalslice";
import { returnIcons } from "../../assets/ReturnSocialIcons";
import {
  addOrganizationLink,
  deleteOrganizationLink,
  getAllSocialLinks,
  getOrganizationLinks,
} from "../../redux/ApisSlice";
import { BsFillTrashFill } from "react-icons/bs";

const LinkEditModal = ({ link, linkInfo }) => {
  let dispatch = useDispatch();
  let theLinkValue = linkInfo?.replace(link?.baseUrl, "");
  let [value, setvalue] = useState(theLinkValue);
  useEffect(() => {
    dispatch(getAllSocialLinks());
    dispatch(getOrganizationLinks());
  }, []);
  console.log(linkInfo.length > 0 ? true : false);

  const responce = useSelector((state) => state.ApiSlice.response);

  console.log(responce);

  let dataFunc = {
    data: {
      linkId: link?.id,
      value: link?.baseUrl + value,
    },
    func: () => dispatch(openLinkModal()),
  };

  return (
    <div className="link-edit-main">
      <div className="left">
        <div className="left-upper">
          <div
            className="go-back"
            onClick={() => {
              dispatch(openLinkModal()),
                dispatch(getAllSocialLinks()),
                dispatch(getOrganizationLinks());
            }}
          >
            <MdKeyboardArrowLeft style={{ fontSize: "25px" }} />
            <p>Back</p>
          </div>
        </div>

        <div className="left-link">
          <div className="link-icon">{returnIcons(link?.name, 50)}</div>
        </div>

        <div className="left-input">
          <p className="link-heading">{link?.name}*</p>
          <input
            type="text"
            placeholder={link?.placeholder}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />
          {linkInfo.length > 0 ? (
            <div className="btns-div2">
              <div className="btns-left">
                <button
                  className="btn1"
                  onClick={() => dispatch(openLinkModal())}
                >
                  Cancel
                </button>
                <button
                  className="btn2"
                  onClick={() => {
                    dispatch(addOrganizationLink(dataFunc));

                    // dispatch(openLinkModal());
                  }}
                >
                  Add
                </button>
              </div>
              <div
                className="del-btn"
                onClick={() => {
                  dispatch(deleteOrganizationLink({ linkId: link?.id })),
                    dispatch(openLinkModal()),
                    dispatch(getAllSocialLinks()),
                    dispatch(getOrganizationLinks());
                }}
              >
                <BsFillTrashFill style={{ marginRight: "5px" }} />
                remove
              </div>
            </div>
          ) : (
            <div className="btns-div">
              <button
                className="btn1"
                onClick={() => dispatch(openLinkModal())}
              >
                Cancel
              </button>
              <button
                className="btn2"
                onClick={() => dispatch(addOrganizationLink(dataFunc))}
              >
                Add
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="right">
        <Mobile />
      </div>
    </div>
  );
};

export default LinkEditModal;
