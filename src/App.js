import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./website/Home";
import Login from "./website/Login";
import SchoolRegistration from "./website/SchoolRegistration";
import StudentRegistration from "./website/StudentRegistration";
import StudentHome from "./student/Home";
import StudentProfile from "./student/Profile";
import StudentSession from "./student/Session";
import StudnetZoom from "./student/Zoom";
import TeacherHome from "./teacher/Home";
import AdminHome from "./admin/Home";
import { Slider } from "./slider/Slider";
import SchoolTable from "./admin/component/BookTable";
import Student from "./admin/GradeCategory/GradeCategory";
import AdminLogin from "./admin/AdminLogin";
import Grade from "./admin/Grade/Grade";
import TimeSlot from "./admin/TimeSlot/TimeSlot";
import Demo from "./admin/component/demo";
import Coupon from "./admin/Coupon/Coupon";

function App() {
  return (
    <div className=" font-popins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/school-registration" element={<SchoolRegistration />} />
          <Route
            path="/student-registration"
            element={<StudentRegistration />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/session" element={<StudentSession />} />
          <Route path="/student/meeting" element={<StudnetZoom />} />
          <Route path="/teacher/home" element={<TeacherHome />} />
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/book" element={<SchoolTable />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/student/grade_category" element={<Student />} />
          <Route path="/admin/student/grade" element={<Grade />} />
          <Route path="/admin/student/time_slot" element={<TimeSlot />} />
          <Route path="/admin/student/coupon" element={<Coupon />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
