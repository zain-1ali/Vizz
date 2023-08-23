import React from "react";
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

const EditCradContainer = () => {
  const iscontent = useSelector((state) => state.profileEditHandeler.isContent);
  const isabout = useSelector((state) => state.profileEditHandeler.isAbout);
  const isqr = useSelector((state) => state.profileEditHandeler.isQr);
  const islead = useSelector((state) => state.profileEditHandeler.isLead);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container-main">
        <div className="container-menue-bar">
          <div className="sidebar-option-main">
            <div
              className="single-option"
              onClick={() => dispatch(openContent())}
            >
              <img src={content} alt="" className="optionicon" />
              <p>Content</p>
            </div>
            <div
              className="single-option"
              onClick={() => dispatch(openAbout())}
            >
              <img src={about} alt="" className="optionicon" />
              <p>About</p>
            </div>
            <div className="single-option" onClick={() => dispatch(openQr())}>
              <img src={qr} alt="" className="optionicon" />
              <p>Qr Code</p>
            </div>
            <div className="single-option" onClick={() => dispatch(openLead())}>
              <img src={lead} alt="" className="optionicon" />
              <p>Lead Capture</p>
            </div>
          </div>
        </div>
        {iscontent && <Content />}
        {isabout && <About />}
        {isqr && <Qr />}
        {islead && <Lead />}

        {isqr ? <QrContainer /> : <PhoneContainer />}
      </div>
      <br />
    </>
  );
};

export default EditCradContainer;
