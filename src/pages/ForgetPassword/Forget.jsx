import React from "react";
import "./Forget.scss";
import loginimg from "../../imgs/loginimg.png";
import vizzlogo from "../../imgs/vizzlogo.png";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  let navigate = useNavigate();
  return (
    <div className="forget-main">
      <div className="forget-left">
        <img src={loginimg} alt="" />
      </div>
      <div className="forget-right">
        <img src={vizzlogo} alt="logo" />
        <p style={{ textAlign: "center" }}>
          Don't worry! Just fill in your email and we will send you a link to
          reset your password
        </p>

        <input type="text" className="input2" placeholder="Email" />

        <button>Send Email</button>
      </div>
    </div>
  );
};

export default Forget;
