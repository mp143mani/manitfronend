import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

function CoRegisterStatus() {
  let navigate = useNavigate();
  let handleLogin = async () => {
    navigate("/");
  };
  return (
    <>
      <div className="login-wrapper">
        <h1>Request status</h1>
        <p>Registration Completed</p>

        <Button variant="primary" onClick={() => handleLogin()}>
          Back
        </Button>
      </div>
    </>
  );
}

export default CoRegisterStatus;
