import React from "react";
import "./QrContainer.scss";
import { QRCode } from "react-qrcode-logo";
import { AiOutlineDownload } from "react-icons/ai";
import { useSelector } from "react-redux";

const QrContainer = () => {
  const qrLogo = useSelector((state) => state.profileInfoSlice.qrLogo);
  const qrColor = useSelector((state) => state.profileInfoSlice.qrColor);
  return (
    <div className="qr-container-main">
      <h2>User's QR Code</h2>
      <QRCode
        value="www.facebook.com"
        size="171"
        logoImage={qrLogo}
        fgColor={qrColor ? qrColor : "black"}
        logoOpacity="0.9"
        logoWidth="90"
        logoHeight="90"
      />
      <button className="update">
        <AiOutlineDownload
          style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
        />{" "}
        Download QR Code
      </button>
    </div>
  );
};

export default QrContainer;
