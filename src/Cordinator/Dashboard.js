import React from "react";
import "../StudentCSS/TeacherDash.css";
import CoSidebar from "./CoSidebar";
import CoRegister from "./Registration";
import { Outlet, Route, Routes } from "react-router-dom";

function CordinatorDash() {
  return (
    

    <div className=" bag ">
      <div className="row take ">
        <div className="take col-md-2 col-sm-2 col-lg-2">
          <CoSidebar />{" "}
        </div>
        <div className="  col-md-9 col-sm-9 col-lg-9 ">
          <div className="dashContent ">
            <div>
              <h1>Cordinator Dashboard</h1>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CordinatorDash;
