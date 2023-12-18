import React from "react";
import adminLogin from "../assets/img/background/adminLogin.jpg";
import eupheus_logo from "../assets/img/icon/eupheus_logo.png";

import Login from "../website/Login";

const AdminLogin = () => {
  return (
    // <div class=" w-full h-screen bg-[#FFD4B2] ">
    <div class=" w-full h-screen  bg-[#DFE8CC]">
      <div className="flex justify-center ">
        {/* <img src={adminLogin} className="mt-[5%] relative"></img> */}
      </div>

      <div className="">
        {/* <div className="absolute top-[20%] left-[36%]"> */}
        <Login />
      </div>
    </div>
  );
};

export default AdminLogin;
