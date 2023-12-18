import React from "react";
import Navbar from "../component/NavBar";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import SchoolTable from "./component/BookTable";
import Example from "./component/Topnavbar";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import instance from "../instance";
import { useEffect } from "react";
import { useState } from "react";
const Home = () => {
  const [TotalSchool, setTotalSchool] = useState("");
  useEffect(() => {
    TotalSchoolReg();
  }, []);
  const TotalSchoolReg = async () => {
    const res = await instance({
      url: `school/total_school`,
      method: "GET",
    });
    console.log(res.data.message);
    setTotalSchool(res.data.message);
  };
  return (
    <div className="">
      <Example status={"home"} />
      <div className="">
        <h3 className="font-black text-2xl ml-[4%] mt-2">
          Welcome, Admin <WavingHandIcon className="" />
        </h3>
      </div>
      <div className="flex justify-center mt-[4%]">
        <div className="flex gap-[10%]">
          <div className="p-5 border-2 border-black-500 w-[350px] h-[130px] rounded-md  bg-[#FFE699] shadow-md shadow-black-400">
            <div>
              <PersonIcon fontSize="small" />
              <span className="text-[#CD1818] font-bold text-[1.1rem]">
                Total Students Registered
              </span>
            </div>
            <div className="font-bold mx-[2rem] ">6429</div>
          </div>
          <div className="p-5 border-2 border-black-500 w-[350px] rounded-md bg-[#FFE699] shadow-md shadow-black-400 ">
            <div>
              <SchoolIcon fontSize="small" />
              <span className="text-[#CD1818] font-bold text-[1.1rem]">
                Total School Registered
              </span>
            </div>
            <div className="font-bold mx-[2rem] ">{TotalSchool}</div>
          </div>
          {/* <div className="p-5 border-2 border-black-500 w-[350px] rounded-md bg-[#FFE699] shadow-md shadow-black-400">
            <div>
              <StarBorderPurple500Icon fontSize="small" />
              <span className="text-[#CD1818] font-bold text-[1.1rem]">
                Trending Book
              </span>
            </div>
            <div className="font-bold mx-[2rem] ">Book1</div>
          </div> */}
        </div>
      </div>
      <div className="mt-[2rem] flex justify-center">
        <SchoolTable />
      </div>
    </div>
  );
};

export default Home;
