import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import StudentDash from "./Student/StudentDash";
import "./App.css";
import CordinatorDash from "./Cordinator/Dashboard";
import Forgot from "./Login/Forgotpassword";
import ForgotReq from "./Login/ForgotRequest";
import Login from "./Login/Login";
import Register from "./Login/Register";
import RegisterReq from "./Login/RegisterRequest";

import TeacherDash from "./Teacher/MentorDash";
import StaffQuery from "./Teacher/MentorQuery";
import StaffWebcode from "./Teacher/MentorWebcode";
import StaffInterview from "./Teacher/MentorInterview";
import StaffTask from "./Teacher/MentorTask";
import Task from "./Student/Task";
import Interview from "./Student/Interview";
import Query from "./Student/Query";
import Class from "./Student/Class";
import Dashboard from "./Student/Dashboard";
import UpdateMark from "./Teacher/MentorMark";
import UpInterviewMark from "./Teacher/MentorInterviewMark";
import UpWebcodeMark from "./Teacher/UpMentorWebcodeMark";
import StudWebcode from "./Student/webcode";
import UpQuery from "./Teacher/MentorupQuery";
import StaffClass from "./Teacher/MentorClass";
import CoRegister from "./Cordinator/Registration";
import StuAdd from "./Cordinator/Addstudent";
import TeacherAdd from "./Cordinator/Addmentor";
import Upstu from "./Cordinator/UpdateStuent";
import UpTeach from "./Cordinator/Updateteacher";
import UpCordi from "./Cordinator/UpdateCordinator";

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
