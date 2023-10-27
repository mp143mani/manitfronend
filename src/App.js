import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import StudentDash from "./Student/StudentDash";
import "./App.css";
import CordinatorDash from "./Cordinator/CordinatorDash";
import Forgot from "./Screen/Forgot";
import ForgotReq from "./Screen/ForgotRequest";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import RegisterReq from "./Screen/RegisterRequest";

import TeacherDash from "./Mentor/TeacherDash";
import StaffQuery from "./Mentor/StaffQuery";
import StaffWebcode from "./Mentor/StaffWebcode";
import StaffInterview from "./Mentor/StaffInterview";
import StaffTask from "./Mentor/StaffTask";
import Task from "./Student/Task";
import Interview from "./Student/Interview";
import Query from "./Student/Query";
import Class from "./Student/Class";
import Dashboard from "./Student/Dashboard";
import UpdateMark from "./Mentor/UpdateMark";
import UpInterviewMark from "./Mentor/UpInterviewMark";
import UpWebcodeMark from "./Mentor/UpWebcodeMark";
import StudWebcode from "./Student/StudWebcode";
import UpQuery from "./Mentor/UpQuery";
import StaffClass from "./Mentor/StaffClass";
import CoRegister from "./Cordinator/Cordinatorregister";
import StuAdd from "./Cordinator/Addstudent";
import TeacherAdd from "./Cordinator/AddMentor";
import Upstu from "./Cordinator/Updatestudents";
import UpTeach from "./Cordinator/Updatementor";
import UpCordi from "./Cordinator/Updatecordinator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path="/ForgotReq" element={<ForgotReq />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/RegisterReq" element={<RegisterReq />} />

      <Route path="/CordinatorDash" element={<CordinatorDash />}>
        <Route index element={<CoRegister />} />
        <Route path="AddCordinator" element={<CoRegister />} />
        <Route path="AddStudent" element={<StuAdd />} />
        <Route path="AddTeacher" element={<TeacherAdd />} />
      </Route>

      <Route path="/StudentDash" element={<StudentDash />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="class" element={<Class />} />
        <Route path="query" element={<Query />} />
        <Route path="studentTask" element={<Task />} />
        <Route path="webcode" element={<StudWebcode />} />
        <Route path="interview" element={<Interview />} />
      </Route>
      <Route path="/teacherDash" element={<TeacherDash />}>
        <Route index element={<StaffQuery />} />
        <Route path="class" element={<StaffClass />} />
        <Route path="task" element={<StaffTask />} />
        <Route path="query" element={<StaffQuery />} />
        <Route exact path="StaffWebcode" element={<StaffWebcode />} />
        <Route path="interview" element={<StaffInterview />} />
        {/* <Route  path="upInter/:id" element={<UpInterviewMark />} />   */}
      </Route>
      <Route path="/updateMark/:id" element={<UpdateMark />} />
      <Route path="/upWebMark/:id" element={<UpWebcodeMark />} />
      <Route path="/upInter/:id" element={<UpInterviewMark />} />
      <Route path="/upQuery/:id" element={<UpQuery />} />

      <Route path="/Upstu/:id" element={<Upstu />} />
      <Route path="/UpTeach/:id" element={<UpTeach />} />
      <Route path="/UpCordi/:id" element={<UpCordi />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
