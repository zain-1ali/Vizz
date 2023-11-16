import React, { useState } from "react";
import "./Forget.scss";
import loginimg from "../../imgs/loginimg.png";
import vizzlogo from "../../imgs/vizzlogo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../redux/ApisSlice";
import { Box, CircularProgress } from "@mui/material";

const Forget = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let submitLoading = useSelector((state) => state.ApiSlice.submitLoading);
  let [email, setEmail] = useState("");
  console.log(email);
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

        <input
          type="text"
          className="input2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <button
          onClick={() => {
            !submitLoading ? dispatch(forgotPassword({ email: email })) : null;
          }}
        >
          {submitLoading ? (
            <Box sx={{ color: "white" }}>
              <CircularProgress color="inherit" size={27} />{" "}
            </Box>
          ) : (
            "Send Email"
          )}
        </button>
      </div>
    </div>
  );
};

export default Forget;
