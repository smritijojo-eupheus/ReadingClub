import React, { useLayoutEffect } from "react";
import Navbar from "../component/NavBar";
import Dropdown from "../Dropdown/Dropdown";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Calendar from "../Calendar/Calendar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState } from "react";
import instance from "../instance";
import Moment from "react-moment";
import axios from "axios";
import Cookies from "js-cookie";

export default function StudentRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [gender, setGender] = useState("");
  const [gradecategory, setGradeCategory] = useState("");
  const [gradecategoryData, setGradeCategoryData] = useState("");
  const [schoolcode, setSchoolCode] = useState("");
  const [Couponcode, setCouponCode] = useState("");
  const [gradeData, setGradeData] = useState("");
  const [grade, setGrade] = useState("");
  const [slot, setSlot] = useState([]);

  useLayoutEffect(() => {
    getGradeCategory();
    getTimeSlot();
  }, []);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  {
    /*load on data */
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    // creating a new order
    const result = await axios.post("http://192.168.7.164:5000/payment/orders");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_3JoGQmIDvXZR9Q", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:5000/payment/success",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const nameError = () => {
    if (name.length === 0) {
      return false;
    } else {
      const RegexName = /^[A-Za-z]+$/;
      return !RegexName.test(name);
    }
  };
  const emailError = () => {
    if (email.length === 0) {
      return false;
    } else {
      const RegexEmail =
        /^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/;

      return !RegexEmail.test(email);
    }
  };

  const mobError = () => {
    if (mob.length === 0) {
      return false;
    } else {
      const RegexMob = /^(\+91)?0?[6-9]\d{9}$/;

      return !RegexMob.test(mob);
    }
  };
  const gradeError = () => {
    if (grade.length === 0) {
      return false;
    } else {
      const RegexGrade = /^(1[0-2]|[1-9])$/;

      return !RegexGrade.test(grade);
    }
  };

  const schoolCodeError = () => {
    if (schoolcode.length === 0) {
      return false;
    } else {
      if (schoolcode.length < 3) return true;
    }
  };

  const GenderData = ["Female", "Male"];

  const getGradeCategory = async () => {
    const res = await instance({
      url: `categoryGrade/get/active`,
      method: "GET",
    });
    console.log(res.data.message);
    setGradeCategoryData(res.data.message);
  };

  const getGrade = async (id) => {
    console.log(id);
    const res = await instance({
      url: `grade/get/category/${id}`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.message);
    setGradeData(res.data.message);
  };

  const getTimeSlot = async () => {
    const res = await instance({
      url: `timeslot/get/active`,
      method: "GET",
    });
    console.log("timeslot", res.data.message);
    setSlot(res.data.message);
  };

  const handleOrderProcessingForm = (value, type, index) => {
    switch (type) {
      case "select_gender":
        console.log(value);
        setGender(value);

        break;
      case "select_gradeCategory":
        console.log(value.id);
        setGradeCategory(value.name);
        getGrade(value.id);

        break;
      case "select_grade":
        console.log(value);
        setGrade(value.name);

        break;
    }
  };

  return (
    <div>
      <Navbar status={"StudentRegistration"} />
      <section className="my-[5rem] container">
        <div className="flex justify-center mt-[25%] sm:mt-[8%]  ">
          <div className="flex-col border-2 border-black-500 w-[40vh] sm:w-[100vh] rounded-md shadow-lg shadow-[#808080] ">
            <div className=" border-y-1 border-black-500 p-3 bg-[#B0DAFF] mb-3">
              <h1 className="text-black font-bold">Student Registration</h1>
            </div>
            <div className="flex-col pb-4 px-4 w-[100%] ">
              <h1 className="!text-[rgb(242,52,39)] font-semibold text-xs">
                All * fields are mandatory to fill
              </h1>
              <div className="flex flex-col sm:flex-row sm:gap-5 sm:justify-between mb-2">
                <div className=" w-[100%] sm:w-[50%]">
                  <h1 className="font-bold ">
                    Student Name:<span className="text-[#B70404]">*</span>
                  </h1>
                  <TextField
                    className="!w-full !bg-[#F3F1F5] "
                    label="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    error={nameError()}
                    helperText={
                      nameError() ? "Name should be in alphabet only" : ""
                    }
                  />
                </div>
                <div className="w-[100%] sm:w-[50%]">
                  <h1 className="font-bold">
                    Email Address:
                    <span className="text-[#B70404] ">*</span>
                  </h1>
                  <TextField
                    className="!w-full !bg-[#F3F1F5] "
                    type="email"
                    label="user@email.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    error={emailError()}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-5 sm:justify-between mb-3">
                <div className="w-[100%] sm:w-[50%]">
                  <h1 className="font-bold capitalize">
                    Mobile:<span className="text-[#B70404]">*</span>
                  </h1>
                  <TextField
                    type="number"
                    className="!w-full !bg-[#F3F1F5]"
                    label="+91 xxxx-nnnnnn"
                    onChange={(e) => {
                      setMob(e.target.value);
                    }}
                    error={mobError()}
                  />
                </div>
                {/*Gender should be Male/Female*/}
                <div className="w-[100%] sm:w-[50%]">
                  <h1 className="font-bold capitalize">
                    Gender:
                    <span className="text-[#B70404] ">*</span>
                  </h1>
                  {/* <TextField
                    className="!w-full "
                    onChange={(e) => {
                      console.log(e.target.value);
                    }} */}

                  <Dropdown
                    width="330px"
                    handleOrderProcessingForm={handleOrderProcessingForm}
                    data={GenderData}
                    value={gender}
                    Name={"select_gender"}
                  />
                </div>
              </div>

              <div className=" flex flex-col md:!flex-row md:!gap-3 mb-2 w-full">
                <div className="mb-2">
                  <h1 className="font-bold capitalize">
                    Date of Birth:<span className="text-[#B70404]">*</span>
                  </h1>
                  <Calendar handlename={"fu"} />
                </div>
                <div className="mb-2 ">
                  <h1 className="font-bold !capitalize mb-2">
                    GRADE CATEGORY:<span className="text-[#B70404]">*</span>
                  </h1>
                  <Dropdown
                    width="270px"
                    handleOrderProcessingForm={handleOrderProcessingForm}
                    data={gradecategoryData}
                    value={gradecategory}
                    Name={"select_gradeCategory"}
                  />
                </div>

                <div>
                  <h1 className="font-bold mb-2">
                    GRADE:<span className="text-[#B70404]">*</span>
                  </h1>
                  {/* <TextField
                    label="Enter Grade/Class"
                    className="!w-full"
                    onChange={(e) => {
                      setGrade(e.target.value);
                    }}
                    error={gradeError()}
                  /> */}
                  <Dropdown
                    width="186px"
                    handleOrderProcessingForm={handleOrderProcessingForm}
                    data={gradeData}
                    value={grade}
                    Name={"select_grade"}
                  />
                </div>
              </div>
              <div className="my-3">
                <h1 className="font-bold">
                  School Code:<span className="text-[#B70404]">*</span>
                </h1>
                <TextField
                  className="w-full !bg-[#F3F1F5]"
                  onChange={(e) => {
                    setSchoolCode(e.target.value);
                  }}
                  error={schoolCodeError()}
                />
                <div className="text-[#FF0000] font-semibold text-sm my-3">
                  Enter EUPHEUS2021 if you are a retail user (if you aren't
                  provided any registration code from your school)
                </div>
                <div className="text-[#ffcc00] font-semibold text-sm">
                  Participants for National Reading Day event can use School
                  Code as - NATIONALRD2021
                </div>
              </div>
              <div className=" py-3 ">
                <h1 className="font-bold">Coupon Code:</h1>
                <TextField
                  label="Enter Coupon Code here"
                  className="w-full !bg-[#F3F1F5] "
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                  }}
                />
              </div>

              <div className="mb-2 w-full ">
                <h1 className="font-bold ">PICK YOUR SLOT</h1>
                <div className="flex flex-wrap cursor-pointer p-[5%] ">
                  {slot.map((item) => (
                    <div className="flex-col p-3 border-2 border-black hover:bg-[#C4DFDF]  ">
                      <div className="font-bold text-[#537188]">
                        {item.name}
                      </div>
                      <Moment className="font-black" format=" Do MMMM YYYY">
                        {item.slot_date}
                      </Moment>
                      <div className="text-[#DC5F00] font-bold ">
                        {item.slot_time}
                      </div>
                    </div>
                  ))}

                  {/* <div className="flex-col p-3 border-2 border-black ">
                    <div>Fri</div>
                    <div className="font-bold">Apr 28</div>
                    <div>7:00-8:00pm</div>
                  </div>
                  <div className="flex-col p-3 border-2 border-black ">
                    <div>Fri</div>
                    <div className="font-bold">Apr 28</div>
                    <div>7:00-8:00pm</div>
                  </div> */}
                  {/* <div className="flex-col p-3 border-2 border-black  ">
                    <div>Fri</div>
                    <div className="font-bold">Apr 28</div>
                    <div>7:00-8:00pm</div>
                  </div> */}
                </div>
              </div>

              <Button
                variant="contained"
                className="!w-full !mt-5  !text-lg "
                size="large"
                onClick={displayRazorpay}
              >
                Proceed to Pay <CurrencyRupeeIcon fontSize="small" />
                6000
              </Button>
              <div className="font-bold my-3">
                Please email us your queries related to FE Live registration at{" "}
                <span className="text-[#FF0000]">care@eupheus.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
