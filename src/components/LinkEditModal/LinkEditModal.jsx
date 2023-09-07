import React, { useState } from "react";
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
import { addOrganizationLink } from "../../redux/ApisSlice";

const LinkEditModal = ({ link, linkInfo }) => {
  let dispatch = useDispatch();
  let theLinkValue = linkInfo?.replace(link?.baseUrl, "");
  let [value, setvalue] = useState(theLinkValue);

  console.log(linkInfo.length > 0 ? true : false);

  const responce = useSelector((state) => state.ApiSlice.response);

  console.log(responce);

  return (
    <div className="link-edit-main">
      <div className="left">
        <div className="left-upper">
          <div className="go-back" onClick={() => dispatch(openLinkModal())}>
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
          <div className="btns-div">
            <button className="btn1" onClick={() => dispatch(openLinkModal())}>
              Cancel
            </button>
            <button
              className="btn2"
              onClick={() =>
                dispatch(
                  addOrganizationLink({
                    linkId: link?.id,
                    value: link?.baseUrl + value,
                  })
                )
              }
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="right">
        <Mobile />
      </div>
    </div>
  );
};

export default LinkEditModal;
