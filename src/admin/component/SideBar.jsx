import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideBar = ({ status }) => {
  const navigate = useNavigate();
  //   const handleClick = () => {
  //     {
  //       status === "category"
  //         ? navigate("/admin/student/grade_category")
  //         : status === "grade"
  //         ? navigate("/admin/student/grade")
  //         : navigate("/admin/student/timeslot");
  //     }
  //   };

  const handleCategory = () => {
    navigate("/admin/student/grade_category");
  };
  const handleGrade = () => {
    navigate("/admin/student/grade");
  };
  const handleTimeSlot = () => {
    navigate("/admin/student/time_slot");
  };
  const handleCoupon = () => {
    navigate("/admin/student/coupon");
  };
  return (
    <>
      <div className="flex-col mx-[5%] pt-[5rem] group">
        <div className="p-3">
          <Button
            variant="contained"
            className={
              // status === "category" ? "!bg-[#5D9C59] !w-full" : "!w-full"
              status === "category" ? "!bg-seconday !w-full" : "!w-full"
            }
            onClick={handleCategory}
          >
            Grade Category
          </Button>
        </div>
        <div className="p-3">
          <Button
            variant="contained"
            className={status === "grade" ? "!bg-seconday !w-full" : "!w-full"}
            onClick={handleGrade}
          >
            Grade
          </Button>
        </div>

        <div className="p-3">
          <Button
            variant="contained"
            className={
              status === "TimeSlot" ? "!bg-seconday !w-full" : "!w-full"
            }
            onClick={handleTimeSlot}
          >
            TimeSlot
          </Button>
        </div>
        {/* <div className="p-3">
              <Button variant="contained" className="!w-full">
                School
              </Button>
            </div> */}
        <div className="p-3">
          <Button
            variant="contained"
            className={status === "Coupon" ? "!bg-seconday !w-full" : "!w-full"}
            onClick={handleCoupon}
          >
            Coupon
          </Button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
