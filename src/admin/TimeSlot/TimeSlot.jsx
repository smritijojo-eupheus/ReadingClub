import React, { useEffect } from "react";
import Example from "../component/Topnavbar";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import instance from "../../instance";
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SideBar from "../component/SideBar";
import TimeSlotTable from "../TimeSlot/TimeSlotTable";
import Dropdown from "../../Dropdown/Dropdown";
import Calendar from "../../Calendar/Calendar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Cookies from "js-cookie";
import { useLayoutEffect } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

import DeleteIcon from "@mui/icons-material/Delete";

// const useStyle = makeStyles({
//   textfieldClass: {
//     "& .MuiOutlinedInput-input": {
//       "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
//         "-webkit-appearance": "none",
//         marginY: 5,
//       },
//     },
//     width: "260px",
//     backgroundColor: "#F3F1F5",
//   },
//   textClass: {
//     "& .MuiOutlinedInput-input": {
//       "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
//         "-webkit-appearance": "none",
//         margin: 0,
//       },
//     },
//     width: "200px",
//     backgroundColor: "#F3F1F5",
//   },
// });

const TimeSlot = () => {
  const [grade, setGrade] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [handledata, sethandleData] = useState("");
  const [error, setError] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [categoryData, setCategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [gradeId, setGradeId] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState([]);
  const [fetchdata, setfetchdata] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [id, setid] = useState("");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [name, setName] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [clear, setClear] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [activeOpen, setActiveOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // console.log("hiii", fetch());
  useLayoutEffect(() => {
    fetch();
    GetgradeCategory();
  }, []);

  const handleData = (value) => {
    console.log(value);
    sethandleData(value);
  };

  const CreateGrade = async () => {
    const DataToPost = {
      name: name,
      fk_categoeyGradeMaster_id: categoryId,
      slot_date: date,
      slot_time: slot,
    };
    const res = await instance({
      url: `timeslot/create`,
      method: "POST",
      data: DataToPost,
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    setMessage(res.data.message);
    setOpen(true);
  };

  // const handleEnter = (val) => {
  //   console.log(val);
  //   let text = val.trim();
  //   console.log(text);

  //   {
  //     handledata.map((item) => {
  //       if (item.name === text) {
  //         setError(true);
  //       } else {
  //         setName(text);
  //       }
  //     });
  //   }
  // };

  const deleteid = async (id) => {
    console.log(id);
    const res = await instance({
      url: `timeslot/delete/${id}`,
      method: "DELETE",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.message);
    alert(res.data.message);
    setDeleteOpen(false);
    fetch();
  };
  const handledateprops = (date) => {
    console.log(date);
    if (clear === "true") {
      setDate("");
    }
    setDate(date);
  };

  const handleClose = () => {
    setOpen(false);
    fetch();
  };
  // const handleClear = () => {
  //   setError(false);
  // };

  const GetgradeCategory = async () => {
    const res = await instance({
      url: `categoryGrade/get/all`,
      method: "GET",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log("GradeData", res.data.message);
    let data = res.data.message;
    setCategoryData(data);
  };

  const Time = [
    "10:00 am to 11:00 am",
    "11:00 am to 12:00 am",
    "12:00 am to 1:00 pm",
    "1:00 pm to 2:00 pm",
    "2:00 pm to 3:00 pm",
    "3:00 pm to 4:00 pm",
    "4:00 pm to 5:00 pm",
    "5:00 pm to 6:00 pm",
  ];

  const handleOrderProcessingForm = (value, type, index) => {
    switch (type) {
      case "select_gradeCategory":
        console.log(value);
        setCategoryId(value.id);
        setCategoryName(value.name);
        // setGradeid(value.id);
        // setGradeCategory(value.name);
        // setGradeId(value.id);

        break;
      case "select_slotTime":
        console.log(value);
        setSlot(value);

        break;
    }
  };

  const fetch = async () => {
    const res = await instance({
      url: `timeslot/get/all`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });

    console.log(res.data.message);

    // setfetchdata(res.data.message);
    // // handleData(res.data.message);
    // fetchdata.map((item) => {
    //   console.log("hi", item.slot_date);
    //   let date = item.slot_date;
    //   let slot = new Date(date).toLocaleDateString();
    //   console.log("hello", slot);
    // });
    let data = res.data.message;
    let slotData = [];
    data.map((item) => {
      let date = item.slot_date;
      // let slot_date = new Date(date).toDateString();
      let slot_date = new Date(date).toLocaleDateString();
      slotData.push({
        id: item.id,
        name: item.name,
        slot_date: slot_date,
        slot_time: item.slot_time,
        status: item.status,
      });
    });
    console.log("Slot", slotData);
    setfetchdata(slotData);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - fetchdata.length) : 0;

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const UpdateStatus = async (status, id) => {
    console.log("oldstatus", status);
    let UpdatedStatus = !status;
    console.log("status", UpdatedStatus);
    const res = await instance({
      // url: `grade/update/${UpdatedStatus}/${id}`,
      url: `timeslot/update/${UpdatedStatus}/${id}`,
      method: "PUT",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.message);
    setActiveOpen(false);
    fetch();
  };

  const handleClear = () => {
    setClear(true);
    setName("");
    setCategoryName("");
    setDate("");
    setSlot("");
  };

  const ActiveStatus = () => {
    setActiveOpen(true);
  };
  const handleActiveClose = () => {
    setActiveOpen(false);
  };

  const handledeleteOpen = () => {
    setDeleteOpen(true);
  };

  const handleDeleteClose = () => {
    setDeleteOpen(false);
  };
  return (
    <div className="">
      <Example status={"Student"} />
      <div className="flex gap-[5%] ">
        {/* <div className="flex justify-between"> */}
        <div className="bg-[#EEE3CB] h-[90vh] w-[30%]  ">
          <SideBar status={"TimeSlot"} />
        </div>
        {/* <div>
          <Button>Create TimeSlot</Button>
        </div> */}
        <div className="flex-col w-full mx-[2.5rem]">
          <div className="flex justify-end my-5 mt-[2rem]">
            <Button variant="contained" onClick={handleDialogOpen}>
              Create TimeSlot <DateRangeIcon />
            </Button>
            <Dialog
              open={openDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              // TransitionComponent
              className=""
              fullWidth
              maxWidth={"sm"}
            >
              <DialogTitle
                id="alert-dialog-title"
                className="!bg-[#F0F0F0]"
              ></DialogTitle>
              <DialogContent className="!bg-[#F0F0F0]">
                {/* <DialogContentText id="alert-dialog-description">
                  {"hi"}
                </DialogContentText> */}
                {/* <div className="flex justify-center"> */}
                <div className=" border-2 border-black rounded-md shadow-md shadow-slate-400 !bg-white ">
                  <form>
                    <div className="flex  justify-center p-3 border-2 border-slate-500 rounded-md bg-[#EEE3CB]">
                      <div className="p-1 text-black font-extrabold">
                        Add TimeSlot
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="flex justify-between">
                        <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                          Name
                        </div>

                        <div>
                          <TextField
                            className="!mx-5 !my-5 !w-[260px] !bg-[#F3F1F5]"
                            size="medium"
                            onChange={(e) => setName(e.target.value)}
                            label=""
                            // error={error}
                            // helperText={
                            //   error
                            //     ? "Grade Category already present in database"
                            //     : ""
                            // }
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                          Grade category
                        </div>

                        <div className="!mx-5 !my-2">
                          <Dropdown
                            width={"260px"}
                            handleOrderProcessingForm={
                              handleOrderProcessingForm
                            }
                            data={categoryData}
                            value={categoryName}
                            Name={"select_gradeCategory"}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                          Slot Date
                        </div>

                        <div className="!mx-5 !my-2">
                          <Calendar
                            handledateprops={handledateprops}
                            handlename="pa"
                          />
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                          Slot Time
                        </div>

                        <div className="!mx-5 !my-2">
                          <Dropdown
                            width={"260px"}
                            handleOrderProcessingForm={
                              handleOrderProcessingForm
                            }
                            data={Time}
                            value={slot}
                            Name={"select_slotTime"}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center gap-3 p-3">
                      <Button
                        variant="contained"
                        className=""
                        onClick={CreateGrade}
                      >
                        Save
                      </Button>
                      <Dialog
                        open={open}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        // TransitionComponent={Transition}
                        className="!w-[100vw]"
                        maxWidth={"md"}
                        fullWidth
                      >
                        <DialogTitle id="alert-dialog-title"></DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            {message}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleClose}>
                            Close <CloseIcon />
                          </Button>
                        </DialogActions>
                      </Dialog>
                      <Button
                        type="reset"
                        variant="contained"
                        className="!bg-[#B70404]"
                        onClick={handleClear}
                      >
                        Clear
                      </Button>
                    </div>
                  </form>
                </div>
                {/* </div> */}
              </DialogContent>
              <DialogActions className="!bg-[#F0F0F0]">
                <Button onClick={handleDialogClose}>
                  Close <CloseIcon />
                </Button>
              </DialogActions>
            </Dialog>
          </div>

          <div className="!w-full mt-[5%]">
            {/* <GradeCategoryTable handleData={handleData} /> */}
            {/*Table data */}

            <div className="flex ">
              <div className="flex w-[60vw]">
                <TableContainer
                  component={Paper}
                  sx={{ minWidth: 900, height: "100%" }}
                >
                  <Table aria-label="simple table">
                    <TableHead className="!bg-[#EEE3CB] !w-full">
                      <TableRow>
                        {[
                          "#",
                          "Name",
                          "Slot date",
                          "Slot time",
                          "Status",
                          "Action",
                        ].map((header, i) => (
                          <TableCell
                            className="!font-black text-lg !bg-slate-500"
                            align="center"
                          >
                            {header}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {(rowsPerPage > 0
                        ? fetchdata.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                        : fetchdata
                      ).map((data, index) => (
                        <TableRow
                          key={index}
                          // sx={{
                          //   "&:last-child td, &:last-child th": { border: 0 },
                          // }}
                        >
                          <TableCell
                            className="bg-slate-200"
                            // sx={{ paddingLeft: "2px" }}
                            align="center"
                          >
                            {index + 1}
                          </TableCell>
                          <TableCell align="center" className="bg-slate-200">
                            {data.name}
                          </TableCell>
                          <TableCell align="center" className="bg-slate-200">
                            {data.slot_date}
                          </TableCell>
                          <TableCell align="center" className="bg-slate-200">
                            {data.slot_time}
                          </TableCell>
                          <TableCell
                            align="center"
                            className="bg-slate-200 cursor-pointer"
                            // onClick={() => {
                            //   UpdateStatus(data.status, data.id);
                            // }}
                            onClick={ActiveStatus}
                          >
                            {data.status === true ? (
                              // <VisibilityIcon className="!text-[#5D9C59]" />
                              <h1 className="!text-[#5D9C59] font-bold cursor-pointer ">
                                Active
                              </h1>
                            ) : (
                              // <VisibilityOffIcon className="!text-[#B31312]" />
                              <h1 className="!text-[#B31312] font-bold cursor-pointer">
                                InActive
                              </h1>
                            )}
                          </TableCell>
                          <Dialog
                            open={activeOpen}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            // TransitionComponent={Transition}
                          >
                            <DialogTitle id="alert-dialog-title">
                              {" "}
                              Do you want to change the status?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                {/* Do You Want to change the status? */}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={() =>
                                  UpdateStatus(data.status, data.id)
                                }
                                className="!bg-[#5D9C59] cursor-pointer"
                                variant="contained"
                              >
                                Yes
                              </Button>
                              <Button
                                onClick={handleActiveClose}
                                className="!bg-[#B70404] cursor-pointer"
                                variant="contained"
                              >
                                {/* No <CloseIcon /> */}
                                No
                              </Button>
                            </DialogActions>
                          </Dialog>

                          <TableCell align="center" className="bg-slate-200">
                            <DeleteIcon
                              className="!text-[#B31312] cursor-pointer "
                              // onClick={() => {
                              //   deleteid(data.id);
                              // }}
                              onClick={handledeleteOpen}
                            />
                          </TableCell>
                          <Dialog
                            open={deleteOpen}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                            // TransitionComponent={Transition}
                          >
                            <DialogTitle id="alert-dialog-title">
                              {" "}
                              Do you want to delete the TimeSlot?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                {/* Do You Want to change the status? */}
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                // onClick={() => UpdateStatus(data.status, data.id)}
                                onClick={() => {
                                  deleteid(data.id);
                                }}
                                className="!bg-[#5D9C59] cursor-pointer"
                                variant="contained"
                              >
                                Yes
                              </Button>
                              <Button
                                onClick={handleDeleteClose}
                                className="!bg-[#B70404]"
                                variant="contained"
                              >
                                {/* No <CloseIcon /> */}
                                No
                              </Button>
                            </DialogActions>
                          </Dialog>
                          {/* <TableCell align="right">{row.protein}</TableCell> */}
                        </TableRow>
                      ))}
                      {emptyRows > 0 && (
                        <TableRow style={{ height: 41 * emptyRows }}>
                          <TableRow colSpan={3} />
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                  <TablePagination
                    component="div"
                    count={fetchdata.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableContainer>
              </div>
            </div>
            {/*Form Code */}
            {/* <div>
              <div className=" border-2 border-black rounded-md shadow-md shadow-slate-400 !bg-white !w-[120%]">
                <form>
                  <div className="flex  justify-center p-3 border-2 border-slate-500 rounded-md bg-[#EEE3CB]">
                    <div className="p-1 text-black font-extrabold">
                      Add TimeSlot
                    </div>
                  </div>
                  <div className="flex-col">
                    <div className="flex justify-between">
                      <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                        Name
                      </div>

                      <div>
                        <TextField
                          className="!mx-5 !my-5 !w-[260px] !bg-[#F3F1F5]"
                          size="medium"
                          onChange={(e) => setName(e.target.value)}
                          label=""
                          error={error}
                          helperText={
                            error
                              ? "Grade Category already present in database"
                              : ""
                          }
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                        Grade category
                      </div>

                      <div className="!mx-5 !my-2">
                        <Dropdown
                          width={"260px"}
                          handleOrderProcessingForm={handleOrderProcessingForm}
                          data={categoryData}
                          value={categoryName}
                          Name={"select_gradeCategory"}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                        Slot Date
                      </div>

                      <div className="!mx-5 !my-2">
                        <Calendar handledateprops={handledateprops} />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                        Slot Time
                      </div>

                      <div className="!mx-5 !my-2">
                        <Dropdown
                          width={"260px"}
                          handleOrderProcessingForm={handleOrderProcessingForm}
                          data={Time}
                          // value={gradecategory}
                          Name={"select_slotTime"}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center gap-3 p-3">
                    <Button
                      variant="contained"
                      className=""
                      onClick={CreateGrade}
                    >
                      Save
                    </Button>
                    <Dialog
                      open={open}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      // TransitionComponent={Transition}
                    >
                      <DialogTitle id="alert-dialog-title"></DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          {message}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>
                          Close <CloseIcon />
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <Button
                      type="reset"
                      variant="contained"
                      className="!bg-[#B70404]"
                      onClick={handleClear}
                    >
                      Clear
                    </Button>
                  </div>
                </form>
              </div>
            </div> */}
            {/*Form code */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;
