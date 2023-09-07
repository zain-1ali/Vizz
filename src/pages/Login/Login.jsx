import React, { useState } from "react";
import "./Login.scss";
import vizzreg from "../../imgs/vizzreg.png";
import vizzlogo from "../../imgs/vizzlogo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/ApisSlice";

const Login = () => {
  let navigate = useNavigate();
  let resp = useSelector((state) => state.ApiSlice.response);
  let [thedata, setthedata] = useState({
    email: "",
    password: "",
  });
  let dispatch = useDispatch();
  let successNavigation = () => {
    navigate("/home");
  };

  let loginFunc = () => {
    let datafunc = { thedata, successNavigation };
    dispatch(loginUser(datafunc));
  };

  console.log(resp);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={vizzreg} alt="" />
      </div>
      <div className="login-right">
        <img src={vizzlogo} alt="logo" />
        <p>Get started with #1 digital bussiness card platform</p>
        {/* <input type="text" className="input1" placeholder="Name" /> */}
        <input
          type="text"
          className="input2"
          placeholder="Email"
          onChange={(e) => setthedata({ ...thedata, email: e.target.value })}
          value={thedata?.email}
        />
        <input
          type="text"
          className="input3"
          placeholder="Password"
          onChange={(e) => setthedata({ ...thedata, password: e.target.value })}
          value={thedata?.password}
        />
        <div className="forget">
          <h2>Forgot password?</h2>
        </div>
        <button onClick={() => loginFunc()}>Login</button>

        <h3>
          Dont have an account?{" "}
          <span onClick={() => navigate("/signup")}>Signup</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Login;
