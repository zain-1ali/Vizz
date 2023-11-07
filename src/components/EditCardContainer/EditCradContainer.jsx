import React, { memo } from "react";
import "./EditCardContainer.scss";
import content from "../../imgs/content.png";
import about from "../../imgs/about.png";
import lead from "../../imgs/lead.png";
import qr from "../../imgs/qr.png";
import Content from "../EditCardContainerComponents/Content/Content";
import PhoneContainer from "../EditCardContainerComponents/PhoneContainer/PhoneContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  openContent,
  openAbout,
  openQr,
  openLead,
} from "../../redux/editcardSlice";
import About from "../EditCardContainerComponents/About/About";
import Qr from "../EditCardContainerComponents/Qr/Qr";
import Lead from "../EditCardContainerComponents/Lead/Lead";
import QrContainer from "../EditCardContainerComponents/QrContainer/QrContainer";

const EditCradContainer = ({ id, orgPhone }) => {
  const iscontent = useSelector((state) => state.profileEditHandeler.isContent);
  const isabout = useSelector((state) => state.profileEditHandeler.isAbout);
  const isqr = useSelector((state) => state.profileEditHandeler.isQr);
  const islead = useSelector((state) => state.profileEditHandeler.isLead);
  let singleProfile = useSelector(
    (state) => state.ApiSlice.singleEmployee?.data
  );
  console.log(singleProfile);
  const dispatch = useDispatch();
  let userdirect = useSelector((state) => state.profileInfoSlice.direct);
  let leadMode = useSelector((state) => state.profileInfoSlice.leadMode);
  console.log(userdirect);

  let MenuBar = () => {
    return (
      <div className="container-menue-bar">
        <div className="sidebar-option-main">
          <div
            className="single-option"
            onClick={() => dispatch(openContent())}
            style={
              iscontent ? { backgroundColor: "rgba(47, 47, 47, 1)" } : null
            }
          >
            <img src={content} alt="" className="optionicon" />
            <p>Content</p>
          </div>
          <div
            className="single-option"
            onClick={() => dispatch(openAbout())}
            style={isabout ? { backgroundColor: "rgba(47, 47, 47, 1)" } : null}
          >
            <img src={about} alt="" className="optionicon" />
            <p>About</p>
          </div>
          <div
            className="single-option"
            onClick={() => dispatch(openQr())}
            style={isqr ? { backgroundColor: "rgba(47, 47, 47, 1)" } : null}
          >
            <img src={qr} alt="" className="optionicon" />
            <p>Qr Code</p>
          </div>
          <div
            className="single-option"
            onClick={() => dispatch(openLead())}
            style={islead ? { backgroundColor: "rgba(47, 47, 47, 1)" } : null}
          >
            <img src={lead} alt="" className="optionicon" />
            <p>Lead Capture</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container-main">
        <MenuBar />
        {iscontent && (
          <Content
            check="user"
            userId={id}
            directmode={userdirect}
            leadMode={leadMode}
          />
        )}
        {isabout && <About id={id} />}
        {isqr && <Qr userId={id} />}
        {islead && <Lead userId={id} />}

        {isqr ? (
          <QrContainer userId={id} />
        ) : (
          <PhoneContainer userId={id} orgPhone={orgPhone} />
        )}
      </div>
      <br />
    </>
  );
};

export default EditCradContainer;
