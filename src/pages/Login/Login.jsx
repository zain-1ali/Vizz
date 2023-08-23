import React from "react";
import "./Login.scss";
import vizzreg from "../../imgs/vizzreg.png";
import vizzlogo from "../../imgs/vizzlogo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  return (
    <div className="login-main">
      <div className="login-left">
        <img src={vizzreg} alt="" />
      </div>
      <div className="login-right">
        <img src={vizzlogo} alt="logo" />
        <p>Get started with #1 digital bussiness card platform</p>
        {/* <input type="text" className="input1" placeholder="Name" /> */}
        <input type="text" className="input2" placeholder="Email" />
        <input type="text" className="input3" placeholder="Password" />
        <div className="forget">
          <h2>Forgot password?</h2>
        </div>
        <button onClick={() => navigate("/home")}>Login</button>

        <h3>
          Dont have an account?{" "}
          <span onClick={() => navigate("/signup")}>Signup</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Login;
