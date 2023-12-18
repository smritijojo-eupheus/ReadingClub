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
import GradeTable from "../Grade/GradeTable";
import Dropdown from "../../Dropdown/Dropdown";
import Cookies from "js-cookie";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AssignmentIcon from "@mui/icons-material/Assignment";

const useStyle = makeStyles({
  textfieldClass: {
    "& .MuiOutlinedInput-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
    },
    margin: 0,
    width: "270px",
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

const Student = () => {
  const [grade, setGrade] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [grad, setGrad] = useState("");
  const [gradecategoryData, setGradeCategoryData] = useState([]);
  const [gradecategory, setGradeCategory] = useState("");
  const [func, setFunc] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [openDialog, setOpenDialog] = useState(false);
  const [activeOpen, setActiveOpen] = useState(false);

  const [fetchdata, setfetchdata] = useState([]);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const classes = useStyle();
  // console.log("hiii", fetch());
  useEffect(() => {
    getGradeCategory();
    fetch();
    // func();
  }, []);

  const handleData = (value) => {
    console.log(value);
    setData(value);
  };
  const fetchData = (value) => {
    console.log(value);
  };

  const handleFunc = (value) => {
    setFunc(value);
  };
  const CreateGrade = async () => {
    const DataToPost = {
      name: grade,
      fk_categoeyGradeMaster_id: grad,
    };
    const res = await instance({
      url: `grade/create`,
      method: "POST",
      data: DataToPost,
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.message);
    setMessage(res.data.message);
    setOpen(true);
  };

  const handleEnter = (val) => {
    console.log(val);
    let text = val.trim();
    console.log(text);

    {
      data.map((item) => {
        if (item.name === text) {
          setError(true);
        } else if (text.length === 0) {
          setError(false);
        } else {
          setGrade(text);
        }
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    fetch();
  };
  const handleClear = () => {
    setError(false);
  };

  const getGradeCategory = async () => {
    const res = await instance({
      // url: `categoryGrade/get/active`,
      url: `categoryGrade/get/all`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    console.log(res.data.message);
    setGradeCategoryData(res.data.message);
  };

  const handleOrderProcessingForm = (value, type, index) => {
    switch (type) {
      case "select_gradeCategory":
        console.log(value.id);
        setGrad(value.id);
        setGradeCategory(value.name);
        fetch();

        break;
    }
  };
  {
    /*Table data */
  }
  const fetch = async () => {
    console.log("hii", grad);

    const res = await instance({
      url: `grade/get/all`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });

    console.log(res.data.message);
    let data = res.data.message;

    setfetchdata(res.data.message);
    handleData(res.data.message);

    console.log(fetchdata);
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
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // const handlestatus = async (id, stat) => {
  //   const res = await localinstance({
  //     url: `user/update/status/${id}`,
  //     method: "PUT",
  //     data: {
  //       status: !stat,
  //     },
  //     headers: {
  //       Authorization: `${Cookies.get("token")}`,
  //       // accesskey: `auth74961a98ba76d4e4`,
  //     },
  //   });
  // };
  const UpdateStatus = async (status, id) => {
    console.log("oldstatus", status);
    let UpdatedStatus = !status;
    console.log("status", UpdatedStatus);
    const res = await instance({
      url: `grade/update/${UpdatedStatus}/${id}`,
      method: "PUT",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.message);
    setActiveOpen(false);
    fetch();
  };

  const deleteid = async (id) => {
    console.log(id);
    const res = await instance({
      url: `grade/delete/${id}`,
      method: "DELETE",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.message);
    setDeleteOpen(false);
    fetch();
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
      <div className="flex gap-[5%] bg-[#F7FFE5] ">
        {/* <div className="bg-[#F7DB6A] h-[90vh] w-[20%]  "> */}
        <div className="bg-[#EEE3CB] h-[90vh] w-[30%]  ">
          <SideBar status={"grade"} />
        </div>
        {/* <div className="flex mt-[5%]">
          <GradeTable
            handleData={handleData}
            grad={grad}
            fetchData={fetchData}
            handleFunc={handleFunc}
          /> */}
        <div className="flex-col w-full ">
          <div className="flex justify-end mt-[2rem] mx-[4rem]">
            <Button
              variant="contained"
              className="!w-[20%]"
              onClick={handleDialogOpen}
            >
              Create Grade <AssignmentIcon />
            </Button>
            <Dialog
              open={openDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              // TransitionComponent={Transition}
              fullWidth
              maxWidth={"sm"}
            >
              <DialogTitle id="alert-dialog-title"></DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description"></DialogContentText>

                <div>
                  <div className=" border-2 border-black rounded-md shadow-md shadow-slate-400 !bg-white ">
                    <form>
                      <div className="flex  justify-center p-3 border-2 border-slate-500 rounded-md bg-[#F7DB6A]">
                        <div className="p-1 text-black font-extrabold">
                          Add Grade
                        </div>
                      </div>
                      <div className="flex-col">
                        <div className="flex justify-between mt-3 mx-3">
                          <div className="mx-3 my-2  items-center font-bold text-[1.2rem]">
                            Category
                          </div>
                          <Dropdown
                            width="270px"
                            handleOrderProcessingForm={
                              handleOrderProcessingForm
                            }
                            data={gradecategoryData}
                            value={gradecategory}
                            Name={"select_gradeCategory"}
                          />
                        </div>

                        <div className="flex justify-between mt-3 mx-3">
                          <div className="mx-3 my-8  items-center font-bold text-[1.2rem]">
                            Grade
                          </div>
                          <TextField
                            type="number"
                            // className=" !my-5 !w-[57%]"
                            className={classes.textfieldClass}
                            size="medium"
                            onChange={(e) => handleEnter(e.target.value)}
                            label="1"
                            error={error}
                            helperText={
                              error ? "Grade already present in database" : ""
                            }
                          />
                        </div>
                      </div>

                      <div className="flex justify-center gap-3 p-3">
                        <Button
                          variant="contained"
                          className="!w-[20%]"
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
                            <Button onClick={handleClose} className="">
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
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} className="">
                  Close <CloseIcon />
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="flex flex-col gap-7 sm:flex-row  sm:justify-between mt-[4rem] mx-[5rem]">
            <div className="flex w-full ">
              <TableContainer
                component={Paper}
                sx={{ minWidth: 900, height: "100%" }}
              >
                <Table aria-label="simple table">
                  <TableHead className="!bg-[#EEE3CB] !w-full">
                    <TableRow>
                      {["#", "Grade Category", "Grade", "Status", "Action"].map(
                        (header, i) => (
                          <TableCell
                            className="!font-black text-lg !bg-slate-500"
                            align="center"
                            height={"2rem"}
                          >
                            {header}
                          </TableCell>
                        )
                      )}
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
                        //   height: "3rem",
                        // }}
                      >
                        <TableCell align="center" className="bg-slate-200">
                          {index + 1}
                        </TableCell>
                        <TableCell align="center" className="bg-slate-200">
                          {data.categoeyGradeMaster.name}
                        </TableCell>
                        <TableCell align="center" className="bg-slate-200">
                          {data.name}
                        </TableCell>
                        {/* <TableCell align="centre" className="bg-slate-200">
                        {data.series}
                      </TableCell> */}

                        <TableCell
                          align="center"
                          className="bg-slate-200 cursor-pointer"
                          // onClick={() => UpdateStatus(data.status, data.id)}
                          onClick={ActiveStatus}
                        >
                          {data.status === true ? (
                            // <VisibilityIcon className="   !text-[#5D9C59]" />
                            <h1 className="!text-[#5D9C59] font-bold cursor-pointer">
                              Active
                            </h1>
                          ) : (
                            <h1 className="!text-[#B70404] font-bold cursor-pointer">
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
                              onClick={() => UpdateStatus(data.status, data.id)}
                              className="!bg-[#5D9C59]"
                              variant="contained"
                            >
                              Yes
                            </Button>
                            <Button
                              onClick={handleActiveClose}
                              className="!bg-[#B70404]"
                              variant="contained"
                            >
                              {/* No <CloseIcon /> */}
                              No
                            </Button>
                          </DialogActions>
                        </Dialog>

                        {/* <TableCell
                          align="center"
                          className="bg-slate-200"
                          onClick={() => UpdateStatus(data.status, data.id)}
                        >
                          {data.status === true ? (
                            // <VisibilityIcon className="   !text-[#5D9C59]" />
                            <h1 className="!text-[#5D9C59] font-bold cursor-pointer">
                              Active
                            </h1>
                          ) : (
                            <h1 className="!text-[#B70404] font-bold cursor-pointer">
                              InActive
                            </h1>
                          )}
                        </TableCell> */}
                        <TableCell align="center" className="bg-slate-200">
                          <DeleteIcon
                            className="!text-[#B70404] cursor-pointer"
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
                            Do you want to delete the grade?
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
                              className="!bg-[#5D9C59]"
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
            <div className="flex w-full md:w-[60%] p-4">
              {/* <AddSeries fetch={fetch} /> */}
            </div>
          </div>

          {/*Form Code */}
          {/* <div>
            <div className=" border-2 border-black rounded-md shadow-md shadow-slate-400 !bg-white !w-[120%] mt-[5rem]">
              <form>
                <div className="flex  justify-center p-3 border-2 border-slate-500 rounded-md bg-[#F7DB6A]">
                  <div className="p-1 text-black font-extrabold">Add Grade</div>
                </div>
                <div className="flex-col">
                  <div className="flex justify-between mt-3 mx-3">
                    <div className="mx-3 my-2  items-center font-bold text-[1.2rem]">
                      Category
                    </div>
                    <Dropdown
                      width="270px"
                      handleOrderProcessingForm={handleOrderProcessingForm}
                      data={gradecategoryData}
                      value={gradecategory}
                      Name={"select_gradeCategory"}
                    />
                  </div>

                  <div className="flex justify-between mt-3 mx-3">
                    <div className="mx-3 my-8  items-center font-bold text-[1.2rem]">
                      Grade
                    </div>
                    <TextField
                      type="number"
                      // className=" !my-5 !w-[57%]"
                      className={classes.textfieldClass}
                      size="medium"
                      onChange={(e) => handleEnter(e.target.value)}
                      label="1"
                      error={error}
                      helperText={
                        error ? "Grade already present in database" : ""
                      }
                    />
                  </div>
                </div>

                <div className="flex justify-center gap-3 p-3">
                  <Button
                    variant="contained"
                    className="!w-[20%]"
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
                      <Button onClick={handleClose} className="">
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
  );
};

export default Student;
