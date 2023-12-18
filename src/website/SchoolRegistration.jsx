import React, { useLayoutEffect, useState } from "react";
import Navbar from "../component/NavBar";
import Dropdown from "../Dropdown/Dropdown";
import { Button, TextField } from "@mui/material";
import instance from "../instance";
import { useIsSmall } from "../hooks/utils/small";
import { useIsMedium } from "../hooks/utils/medium";
import localinstance from "../localinstance";
import { makeStyles } from "@mui/styles";
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useStyle = makeStyles({
  textfieldClass: {
    "& .MuiOutlinedInput-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
    width: "250px",
    backgroundColor: "#F3F1F5",
  },
  textClass: {
    "& .MuiOutlinedInput-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
    width: "200px",
    backgroundColor: "#F3F1F5",
  },
});

export default function SchoolRegistration() {
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [stateData, setStateData] = useState([]);
  const [state, setState] = useState("");
  const [stateid, setStateId] = useState("");
  const [cityData, setCityData] = useState([]);
  const [city, setCity] = useState("");
  const [cityId, setCityId] = useState("");
  const [about, setAbout] = useState("");
  const [salesId, setSalesId] = useState("");
  const [salesData, setSalesData] = useState("");
  const [schoolName, setschoolName] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [addressErr, setAddressErr] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [contactErr, setcontactErr] = useState(false);
  const [mobErr, setMobErr] = useState(false);
  const [gradeErr, setGradeErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [ZipErr, setZipErr] = useState(false);
  const [schoolNameErr, setSchoolNameErr] = useState(false);
  const [he, setH] = useState("620px");
  const [marg, setMarg] = useState("1rem");
  const [SchoolCode, setSchoolCode] = useState("");
  const [stateErr, setStateErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [aboutErr, setAboutErr] = useState(false);
  const [SalesErr, setSalesErr] = useState(false);
  const [schoolErr, setSchoolErr] = useState(false);

  const IsSmall = useIsSmall();
  const IsMedium = useIsMedium();
  useLayoutEffect(() => {
    GetState();
    fetchSales();
  }, []);

  const classes = useStyle();
  const addressError = () => {
    if (address.length === 0) {
      return false;
    } else {
      if (address.length < 3) return true;
    }
  };

  const zipCodeError = () => {
    if (zipcode.length === 0) {
      return false;
    } else {
      const RegexZipcode = /^([0-9]){6}$/;
      // const RegexZipcode = /^\d{5}(?:[-\s]\d{4})?$/;

      return !RegexZipcode.test(zipcode);
    }
  };

  // const contactError = () => {
  //   if (contact.length === 0) {
  //     return false;
  //   } else {
  //     if (contact.length < 3) return true;
  //   }
  // };

  const SchoolNameError = () => {
    if (schoolName.length === 0) {
      return false;
    }
    // } else if (
    //   schoolByState.map((data) => data.school_name === schoolName.trim())
    // ) {
    //   console.log("SchoolByStateerror");
    //   return true;
    // }
    else {
      if (schoolName.length < 3) {
        return true;
      }
    }
    // } else if (schoolNameErr) {
    //   return false;
    // } else {
    //   if (schoolName.length < 3) {
    //     return true;
    //   }
    // }
  };
  const mobError = () => {
    if (mob.length === 0) {
      return false;
    } else {
      const RegexMob = /^(\+91)?0?[6-9]\d{9}$/;

      return !RegexMob.test(mob);
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
  const NameError = () => {
    if (name.length === 0) {
      return false;
    } else {
      const RegexName = /^[A-Za-z]+$/;
      return !RegexName.test(name);
    }
  };

  const GetState = async () => {
    const res = await instance({
      url: `service/location/state/get`,
      method: "GET",
    });
    console.log(res.data.message.message);
    let data = res.data.message.message;
    const states = [];
    data.map((item) => {
      states.push({ state: item.state, id: item.id });
    });
    console.log(states);
    setStateData(states);
    // GetCityById();
  };

  const GetCityById = async (id) => {
    console.log(stateid);
    const res = await instance({
      url: `service/location/state/city/${id}`,
      method: "GET",
    });
    console.log("cityby id", res.data.message.message);
    let data = res.data.message.message;
    let cities = [];

    setCityData(data);
    // SchoolByCityId();
  };

  const fetchSales = async () => {
    const res = await localinstance({
      // url: `service/user/getuserids`,
      url: `service/user/getuserids`,
      method: "GET",
    });
    console.log("Data", res.data.message);
    const data = res.data.message;
    setSalesData(data);
  };

  const handleOrderProcessingForm = (value, type, index) => {
    switch (type) {
      case "select_state":
        console.log(value.id);
        setState(value);
        setStateId(value.id);
        GetCityById(value.id);
        setStateErr(false);
        console.log("SchoolByState---");
        SchoolByStateId(value.id);

        break;
      case "select_city":
        console.log(value);
        setCity(value.city);
        setCityId(value.id);
        console.log(cityId);
        setCityErr(false);
        SchoolByCityId(value.id);
        break;
      case "select_aboutUs":
        console.log(value);
        setAbout(value);
        setAboutErr(false);
        break;

      case "select_sales":
        console.log(value);
        setSalesId(value.id);
        setSalesErr(false);
        break;
    }
  };

  const AboutUs = [
    "eupheus",

    // "Recommendation",
    // "Reading an article",
    // "Others",
  ];

  const PostData = async (e) => {
    const DataToPost = {
      name: schoolName,
      fk_city_id: cityId,
      fk_state_id: stateid,
      address: address,
      zip: zipcode,
      contact_person: name,
      phone: mob,
      email: email,
      fk_sales_id: salesId,
      source: about,
    };
    console.log(DataToPost);
    setH("640px");
    setMarg("7px");
    if (address.length === 0) {
      // alert("details needed");
      // e.preventDefault();
      setAddressErr(true);
    }
    if (schoolName.length === 0) {
      setSchoolNameErr(true);
    }
    if (state.length === 0) {
      setStateErr(true);
    }
    if (name.length === 0) {
      setcontactErr(true);
    }
    if (city.length === 0) {
      setCityErr(true);
    }
    if (about.length === 0) {
      setAboutErr(true);
    }
    if (salesId.length === 0) {
      setSalesErr(true);
    }
    if (mob.length === 0) {
      setMobErr(true);
    }
    // if (!gradeErr) {
    //   setGradeErr(true);
    // }
    if (email.length === 0) {
      setEmailErr(true);
    }
    if (zipcode.length === 0) {
      setZipErr(true);
    }
    if (name.length === 0) {
      setNameErr(true);
    } else {
      const res = await instance({
        url: `school/create`,
        method: "POST",
        data: DataToPost,
      });
      console.log(res.data.scode);
      setMessage(res.data.message);
      setSchoolCode(res.data.scode);
      setOpen(true);
    }
  };

  const closeDialog = () => {
    // setOpen(false);
    // setschoolName("");
    // setAddress("");
    // setZipcode("");
    // setName("");
    // setMob("");
    // setEmail("");
    // setCity("");
    // setAbout("");
    // setSalesId(null);
    // setState("");
    // GetState();
    // fetchSales();
    window.location.reload(true);
  };

  const handledateprops = (date) => {
    console.log(date);
  };

  const SchoolByStateId = async (id) => {
    console.log(id);
    const res = await instance({
      url: `school/list/${id}`,
      method: "GET",
    });
    console.log(res.data.message);
    // setschoolByState(res.data.message);
    let schoolByState = res.data.message;
    for (let ele of schoolByState) {
      if (ele.school_name === schoolName) {
        console.log("schoolError");
        setSchoolErr(true);
      }
    }
  };
  const SchoolByCityId = async (id) => {
    console.log(id);
    console.log(stateid);
    const res = await instance({
      url: `school/list/${stateid}/${id}`,
      method: "GET",
    });
    console.log("SchoolByCityId", res.data.message);
    // setschoolByState(res.data.message);
    let schoolByCity = res.data.message;
    for (let ele of schoolByCity) {
      if (ele.school_name === schoolName) {
        console.log("schoolErrorCity");
        setSchoolNameErr(true);
      }
    }
  };

  const EnterSchoolName = (e) => {
    if (schoolNameErr) {
      setSchoolNameErr(false);
      setschoolName(e.target.value);
    } else if (schoolErr) {
      setSchoolErr(false);
    } else {
      let school = e.target.value;

      setschoolName(e.target.value);
    }

    // let text = e.trim();
    // console.log(text);

    // {
    //   data.map((item) => {
    //     if (item.name === text) {
    //       setError(true);
    //     } else if (text.length === 0) {
    //       setError(false);
    //     } else {
    //       setGrade(text);
    //     }
    //   });
    // }
  };

  const EnterAddress = (e) => {
    if (addressErr) {
      setAddressErr(false);
      setAddress(e.target.value);
    } else {
      setAddress(e.target.value);
    }
  };

  const EnterZipCode = (e) => {
    if (ZipErr) {
      setZipErr(false);
      setZipcode(e.target.value);
    } else {
      setZipcode(e.target.value);
    }
  };

  const EnterMob = (e) => {
    if (mobErr) {
      setMobErr(false);
      setMob(e.target.value);
    } else {
      setMob(e.target.value);
    }
  };

  const EnterName = (e) => {
    if (nameErr) {
      setNameErr(false);
      setName(e.target.value);
    } else {
      setName(e.target.value);
    }
  };

  const EnterEmail = (e) => {
    if (emailErr) {
      setEmailErr(false);
      setEmail(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  return (
    <div>
      <Navbar status={"SchoolRegistration"} />
      <div className="flex justify-center mt-[25%] sm:mt-[7%] ">
        <div className="flex-col border-2 border-black-500 w-[40vh] sm:w-[900px] sm:he rounded-md shadow-lg shadow-[#808080]">
          <div className="  flex justify-center p-3 bg-[#B0DAFF] mb-3 ">
            <h1 className="text-black text-xl font-bold">
              School Registration
            </h1>
          </div>
          <div className="flex-col pb-4 px-4 ">
            <h1 className="!text-[rgb(242,52,39)] font-semibold text-xs">
              All * fields are mandatory to fill
            </h1>
            <div className="flex flex-col sm:flex-row sm:justify-between ">
              <div className="mb-2">
                <h1 className="font-bold ">
                  School Name:<span className="text-[#B70404]">*</span>
                </h1>
                <TextField
                  className="!w-[300px] sm:!w-[350px] !bg-[#F3F1F5]"
                  size=""
                  value={schoolName}
                  label="Enter Your School"
                  // onChange={(e) => setschoolName(e.target.value)}
                  onChange={(e) => {
                    EnterSchoolName(e);
                  }}
                  // error={SchoolNameError()}
                  // helperText={
                  //   SchoolNameError() ? "School Name cannot be empty" : ""
                  // }
                  error={SchoolNameError() || schoolNameErr || schoolErr}
                  // helperText={
                  //   SchoolNameError ? (schoolNameErr ? "required" : "") : ""
                  // }
                  helperText={schoolErr ? "School Already Exist" : ""}
                />
              </div>
              <div className="">
                <h1 className="font-bold ">
                  State:<span className="text-[#B70404]">*</span>
                </h1>

                <Dropdown
                  width={IsSmall ? "250px" : "300px"}
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  Name={"select_state"}
                  data={stateData}
                  value={state}
                  error={stateErr}
                  // helperText={stateErr ? "required" : ""}
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div>
                <h1 className="font-bold">
                  City:<span className="text-[#B70404]">*</span>
                </h1>

                <Dropdown
                  width={IsSmall ? "250px" : "300px"}
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  Name={"select_city"}
                  data={cityData}
                  value={city}
                  error={cityErr}
                  // helperText={cityErr ? "required" : ""}
                />
              </div>
            </div>
            {/* <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
              <div className="">
                <h1 className="font-bold ">
                  State:<span className="text-[#B70404]">*</span>
                </h1>

                <Dropdown
                  width="320px"
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  Name={"select_state"}
                  data={stateData}
                  value={state}
                />
              </div>
              <div>
                <h1 className="font-bold">
                  City:<span className="text-[#B70404]">*</span>
                </h1>

                <Dropdown
                  width="320px"
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  Name={"select_city"}
                  data={cityData}
                  value={city}
                />
              </div>
            </div> */}

            {/* <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
              <div className="">
                <h1 className="font-bold ">
                  School Name:<span className="text-[#B70404] ">*</span>
                </h1>

                <Dropdown
                  {...(IsSmall ? { width: "680px" } : { width: "320px" })}
                />
              </div>
            </div> */}
            <div className="flex flex-col sm:flex-row sm:justify-between ">
              {/* <div className="">
                <h1 className="font-bold ">
                  School Name:<span className="text-[#B70404]">*</span>
                </h1>

                <Dropdown width="320px" />
              </div> */}
              {/* <div>
                <h1 className="font-bold">Where do You learnt about Us:</h1>

                <Dropdown width="320px" />
              </div> */}
            </div>
            {/* <div className="mb-4 ">
              <h1 className="font-bold">School Name:</h1>
              <Dropdown width="670px" label="School Name" />
            </div> */}
            <div className="mb-4">
              <h1 className="font-bold">
                Address:<span className="text-[#B70404]">*</span>
              </h1>
              <TextField
                className="!w-[92%] sm:!w-full !bg-[#F3F1F5]"
                size=""
                value={address}
                label="Enter Your Address"
                multiline={true}
                rows={3}
                onChange={(e) => EnterAddress(e)}
                error={addressError() || addressErr}
                // helperText={
                //   addressErr
                //     ? addressError
                //       ? "required"
                //       : "please enter valid address"
                //     : ""
                // }
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between w-full">
              <div className="mb-4">
                <h1 className="font-bold">
                  ZipCode:<span className="text-[#B70404]">*</span>
                </h1>
                <TextField
                  // className="w-full !bg-[#F3F1F5]"
                  className={
                    IsSmall ? classes.textClass : "!w-[92%] !bg-[#F3F1F5]"
                  }
                  size=""
                  value={zipcode}
                  label="ZipCode"
                  type="number"
                  onChange={(e) => EnterZipCode(e)}
                  error={zipCodeError() || ZipErr}
                  // helperText={
                  //   ZipErr
                  //     ? zipCodeError
                  //       ? "required"
                  //       : "Please Enter Valid ZipCode "
                  //     : ""
                  // }
                />
              </div>
              <div className="mb-2">
                <h1 className="font-bold capitalize ">
                  Where do you Learn About Us:
                </h1>
                <Dropdown
                  label="Social media"
                  // width="250px"
                  width={IsSmall ? "250px" : "300px"}
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  data={AboutUs}
                  Name={"select_aboutUs"}
                  value={about}
                  error={aboutErr}
                  // helperText={aboutErr ? "required" : ""}
                />
              </div>
              <div className="mb-2">
                <h1 className="font-bold capitalize">
                  please mention the name/code for the source:
                </h1>
                {/* <TextField
                className="w-full !bg-[#F3F1F5]"
                label="Enter employee code in case of Eupheus Learning rep"
                onChange={(e) => setCode(e.target.value)}
              /> */}
                <Dropdown
                  label="Social media"
                  // width="385px"
                  width={IsSmall ? "385px" : "300px"}
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  data={salesData}
                  Name={"select_sales"}
                  value={salesId}
                  error={SalesErr}
                  // helperText={SalesErr ? "required" : ""}
                />
              </div>
            </div>

            {/* <div>
              <h1 className="font-bold">
                Contact Person:<span className="text-[#B70404]">*</span>
              </h1>
              <TextField
                className="w-full"
                label="Enter Your Name..."
                onChange={(e) => setContact(e.target.value)}
                error={contactError()}
              />
            </div> */}
            <div className="flex flex-col sm:flex-row sm:justify-between mb-2 w-full">
              <div>
                <h1 className="font-bold">
                  Contact Person:<span className="text-[#B70404]">*</span>
                </h1>
                <TextField
                  className="!w-[300px] sm:!w-[280px] !bg-[#F3F1F5]"
                  size=""
                  value={name}
                  label="Enter Your Name..."
                  onChange={(e) => EnterName(e)}
                  error={NameError() || nameErr}
                  // helperText={
                  //   nameErr
                  //     ? NameError
                  //       ? "required"
                  //       : "please enter valid address"
                  //     : ""
                  // }
                />
              </div>
              <div>
                <h1 className="font-bold">
                  Mobile:<span className="text-[#B70404]">*</span>
                </h1>
                <TextField
                  // className="!w-[320px] !bg-[#F3F1F5] "
                  className={
                    IsSmall ? classes.textfieldClass : "!w-[92%] !bg-[#F3F1F5]"
                  }
                  size=""
                  value={mob}
                  type="number"
                  label="+91 xxxx-nnnnnn"
                  onChange={(e) => EnterMob(e)}
                  error={mobError() || mobErr}
                  // helperText={
                  //   mobErr
                  //     ? mobError
                  //       ? "required"
                  //       : "please enter valid address"
                  //     : ""
                  // }
                />
              </div>

              <div>
                <h1 className="font-bold">
                  Email:<span className="text-[#B70404]">*</span>
                </h1>
                <TextField
                  className="!w-[300px] sm:!w-[320px] !bg-[#F3F1F5]"
                  size=""
                  value={email}
                  label="user@gmail.com"
                  onChange={(e) => EnterEmail(e)}
                  error={emailError() || emailErr}
                  // helperText={
                  //   emailErr
                  //     ? emailError
                  //       ? "required"
                  //       : "please enter valid address"
                  //     : ""
                  // }
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              {/* <div>
                <h1 className="font-bold">
                  Mobile:<span className="text-[#B70404]">*</span>
                </h1>
                <TextField
                  // className="!w-[320px] !bg-[#F3F1F5] "
                  className={classes.textfieldClass}
                  type="number"
                  label="+91 xxxx-nnnnnn"
                  onChange={(e) => setMob(e.target.value)}
                  error={mobError()}
                />
              </div> */}
              {/* <div className="flex justify-between"> */}
              {/* <div className="mb-2">
                <h1 className="font-bold capitalize ">
                  Where do you Learn About Us:
                </h1>
                <Dropdown
                  label="Social media"
                  width="320px"
                  handleOrderProcessingForm={handleOrderProcessingForm}
                  data={AboutUs}
                  Name={"select_aboutUs"}
                  value={about}
                />
              </div> */}
            </div>

            {/* <div className="mb-2">
              <h1 className="font-bold capitalize">
                please mention the name/code for the source:
              </h1>
              {/* <TextField
                className="w-full !bg-[#F3F1F5]"
                label="Enter employee code in case of Eupheus Learning rep"
                onChange={(e) => setCode(e.target.value)}
              /> */}
            {/* <Dropdown
                label="Social media"
                width="676px"
                handleOrderProcessingForm={handleOrderProcessingForm}
                data={salesData}
                Name={"select_sales"}
                value={salesId}
              />
            </div>  */}
            <div className="flex justify-center">
              <Button
                variant="contained"
                className=" !w-[90%] !mt-[2%] sm:!w-[35%] sm:!mt-[1%] "
                size="large"
                onClick={PostData}
              >
                Register Now!
              </Button>
              <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                // TransitionComponent={Transition}
                fullWidth
              >
                <DialogTitle id="alert-dialog-title" className="!font-bold">
                  {message} !!!
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <span className="text-[#FF0000]">School Code: </span>{" "}
                    <span className="text-[#080202]">{SchoolCode}</span>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button className="!text-[#CD1818]" onClick={closeDialog}>
                    Close <CloseIcon className="!text-[#CD1818]" />
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
