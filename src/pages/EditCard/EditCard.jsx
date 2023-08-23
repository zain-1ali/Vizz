import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./EditCard.scss";
import { BsShareFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import EditCradContainer from "../../components/EditCardContainer/EditCradContainer";

const EditCard = () => {
  return (
    <div className="edit-main">
      <Sidebar />
      <div className="edit-inner">
        <div className="edit-header">
          <button className="editbtn1">
            <MdKeyboardArrowLeft
              style={{
                fontSize: "26px",
                marginRight: "4px",
              }}
            />
            Jone Mike
          </button>
          <button className="editbtn2">
            <BsShareFill
              style={{
                fontSize: "16px",
                marginRight: "8px",
              }}
            />
            Share Card
          </button>
        </div>

        <EditCradContainer />
      </div>
    </div>
  );
};

export default EditCard;
