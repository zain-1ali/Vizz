import React from "react";
import "./QrContainer.scss";
import { QRCode } from "react-qrcode-logo";
import { AiOutlineDownload } from "react-icons/ai";
import { useSelector } from "react-redux";

const QrContainer = () => {
  const qrLogo = useSelector((state) => state.profileInfoSlice.qrLogo);
  const qrColor = useSelector((state) => state.profileInfoSlice.qrColor);

  // download QR code
  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };
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
      <div style={{ display: "none" }}>
        <QRCode
          id="qrCodeEl"
          value="www.facebook.com"
          size="171"
          // logoImage={qrLogo}
          fgColor={qrColor ? qrColor : "black"}
          logoOpacity="0.9"
          logoWidth="90"
          logoHeight="90"
        />
      </div>

      <button className="update" onClick={() => downloadQRCode()}>
        <AiOutlineDownload
          style={{ color: "white", fontSize: "20px", marginRight: "5px" }}
        />{" "}
        Download QR Code
      </button>
    </div>
  );
};

export default QrContainer;
