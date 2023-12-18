import React, { useState } from "react";
import Navbar from "../component/NavBar";
import { Button, TextField } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Fragment } from "react";
import HttpsIcon from "@mui/icons-material/Https";
import instance from "../instance";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../actions/authActions";
import eupheus_logo from "../assets/img/icon/eupheus_logo.png";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");

  const navigate = useNavigate();

  const emailError = () => {
    if (email.length === 0) {
      return false;
    } else {
      const RegexUserName =
        /^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/;

      return !RegexUserName.test(email);
    }
  };

  const passError = () => {
    if (passWord.length === 0) {
      return false;
    } else {
      const RegexPass =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,15}$/;
      return !RegexPass.test(passWord);
    }
  };

  const LoginAdmin = async () => {
    const dataToPost = {
      email: email,
      password: passWord,
    };
    const res = await instance({
      url: `admin/signin`,
      method: "POST",
      data: dataToPost,
    });
    const data = res.data.message.messgae;
    if (data === "user signin") {
      const user = { email, passWord };
      dispatch(loginSuccess(user));
      Cookies.set("token", res.data.message.token);
      navigate("/admin/home");
    } else {
      dispatch(loginFailure("Invalid username or password"));
    }
    // Cookies.set("token", res.data.message.token);
  };
  return (
    <div>
      {/*Show only when localstorage has valid token  */}
      {/* <Navbar status={"login"} /> */}

      {/* <div className="my-[5rem] p-[2rem] bg-[#D0D0D0] ">
        <h1 className="text-3xl  font-bold"> MY ACCOUNT</h1>
      </div> */}

      {/*Login Form*/}
      <div className="flex justify-center  mt-[10%]">
        {/* <div className="flex-col border-2 border-black-500 w-full mx-[2rem] sm:w-1/3 sm:mx-0 rounded-md shadow-lg shadow-[#808080] ">
          <div className=" border-y-1 border-black-500 p-3 bg-[#A0A0A0] ">
            <h1 className="text-black font-bold text-xl">
              Login To Your Account
            </h1>
          </div>
          <div className="flex-col p-5  ">
            <div className="mt-3 ">
              <h1 className="font-bold ">USERNAME:</h1>
              <TextField
                className="!w-full  "
                size="small"
                onChange={(e) => setuserName(e.target.value)}
                error={emailError()}
              />
            </div>
            <div className="mt-3">
              <h1 className="font-bold">PASSWORD:</h1>
              <TextField
                className="!w-full "
                size="small"
                type={"password"}
                onChange={(e) => setpassWord(e.target.value)}
                error={passError()}
                helperText={
                  passError()
                    ? "Password should contain at least one uppercase letter(A-Z),one lowercase letter(a-z) ,atleast one numerical digit(0-9) and one special character(?$%)"
                    : ""
                }
              />
            </div>
          </div>
          <div className="flex justify-between px-5 py-3">
            <Button
              variant="contained"
              className="!bg-[#0096FF] hover:!bg-[#088F8F] !w-1/4"
              onClick={() => console.log(userName, passWord)}
            >
              Login
            </Button>

            <Button className=" hover:!text-[#000000]">Forget PassWord?</Button>
          </div>
        </div> */}

        <div className="p-7 border-2 border-black w-[80vh] rounded-md shadow-md shadow-[#0E8388] bg-white">
          <div className="flex-col  pb-6 mx-[3.5rem]">
            <div>
              {" "}
              <img src={eupheus_logo} className=" w-[280px]" alt="img"></img>
            </div>

            {/* <div className="font-bold text-4xl text-black !font-serif flex justify-center my-5 ">
              <div>Login</div>
            </div> */}
          </div>

          <div className="py-3">
            <TextField
              value={email}
              label={
                <Fragment>
                  <MailIcon className="!text-[#068DA9]" />
                  Email
                </Fragment>
              }
              className="!w-full !bg-[#F3F1F5]"
              onChange={(e) => setEmail(e.target.value)}
              error={emailError()}
            />
          </div>
          <div className="py-3">
            <TextField
              value={passWord}
              type="password"
              label={
                <Fragment className="!font-bold">
                  <HttpsIcon className="!text-[#068DA9]" />
                  Password
                </Fragment>
              }
              className="!w-full !bg-[#F3F1F5]"
              onChange={(e) => setpassWord(e.target.value)}
              // error={passError()}
              // helperText={
              //   passError()
              //     ? "Password should contain at least one uppercase letter(A-Z),one lowercase letter(a-z) ,atleast one numerical digit(0-9) and one special character(?$%)"
              //     : ""
              // }
            />
          </div>
          <div className="flex justify-center py-3">
            <Button
              variant="contained"
              className="!w-full"
              onClick={LoginAdmin}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
