import React from "react";
import "./SignUp.scss";
import loginimg from "../../imgs/loginimg.png";
import vizzlogo from "../../imgs/vizzlogo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  return (
    <div className="login-main">
      <div className="login-left">
        <img src={loginimg} alt="" />
      </div>
      <div className="login-right">
        <img src={vizzlogo} alt="logo" />
        <p>Get started with #1 digital bussiness card platform</p>
        <input type="text" className="input1" placeholder="Name" />
        <input type="text" className="input2" placeholder="Email" />
        <input
          type="text"
          className="input3"
          placeholder="Password"
          style={{ marginTop: "25px" }}
        />
        <button>Create Account</button>

        <h3>
          Already have account? <span onClick={() => navigate("/")}>Login</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default SignUp;
