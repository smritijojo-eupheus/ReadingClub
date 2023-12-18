import React, { useEffect, useLayoutEffect } from "react";
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
import WavingHandIcon from "@mui/icons-material/WavingHand";
import SideBar from "../component/SideBar";
import GradeCategoryTable from "./GradeCategoryTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Cookies from "js-cookie";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Student = () => {
  const [grade, setGrade] = useState("");
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [fetchdata, setfetchdata] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [id, setid] = useState("");
  const [status, setStatus] = useState("");
  const [activeOpen, setActiveOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  // console.log("hiii", fetch());

  const handleData = (value) => {
    console.log(value);
    setData(value);
  };

  useLayoutEffect((value) => {
    handleData(value);
    fetch();
  }, []);

  const CreateGrade = async () => {
    const DataToPost = {
      name: grade,
    };
    const res = await instance({
      url: `categoryGrade/create`,
      method: "POST",
      data: DataToPost,
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    setMessage(res.data.message);
    setOpen(true);
    // handleData(value);
    fetch();
  };

  const handleEnter = (val) => {
    console.log(val);
    let text = val.trim();
    console.log(text);

    {
      data.map((item) => {
        if (item.name === text) {
          setError(true);
        } else if (text.length < 16) {
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

  {
    /* Table code*/
  }
  const fetch = async () => {
    const res = await instance({
      url: `categoryGrade/get/all`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });
    console.log(res.data.message);
    setfetchdata(res.data.message);
    handleData(res.data.message);
    // fetch1(res.data.message.id);
    // setid(res.data.message.id);

    setStatus(res.data.message.status);
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

  const deleteid = async (id) => {
    console.log(id);
    const res = await instance({
      url: `categoryGrade/delete/${id}`,
      method: "DELETE",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.message);
    setDeleteOpen(false);
    fetch();
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const UpdateStatus = async (status, id) => {
    console.log("oldstatus", status);
    let UpdatedStatus = !status;
    console.log("status", UpdatedStatus);
    const res = await instance({
      // url: `categoryGrade/update/${UpdatedStatus}/${id}`,
      url: `categoryGrade/update/${UpdatedStatus}/${id}`,
      method: "PUT",
      headers: {
        Authorization: Cookies.get("token"),
      },
    });
    console.log(res.data.message);
    setActiveOpen(false);
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
      <div className="flex gap-[5%] ">
        <div className="bg-[#EEE3CB] h-[90vh] w-[30%]  ">
          <SideBar status={"category"} />
        </div>

        <div className="flex-col w-full">
          <div className="flex justify-end mt-[2rem] mx-[3rem]">
            <Button
              variant="contained"
              className="!w-[25%]"
              onClick={handleDialogOpen}
            >
              Create Grade Category <AssignmentIcon />
            </Button>
            <Dialog
              open={openDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              // TransitionComponent={Transition}
            >
              <DialogTitle id="alert-dialog-title"></DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description"></DialogContentText>
                <div>
                  <div className=" border-2 border-black rounded-md shadow-lg shadow-slate-400 !bg-white h-[280px]">
                    <form>
                      <div className="flex  justify-center p-3 border-2 border-slate-500 rounded-md bg-[#EEE3CB]">
                        <div className="p-1 text-black font-extrabold">
                          Add Grade Category
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                          Grade Category
                        </div>
                        <TextField
                          className="!mx-5 !my-5"
                          size="medium"
                          onChange={(e) => handleEnter(e.target.value)}
                          label="LEVEL 3 | Grade 8-9"
                          error={error}
                          helperText={
                            error
                              ? "Grade Category already present in database"
                              : ""
                          }
                        />
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
                            <Button onClick={handleCloseDialog}>
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
                <Button onClick={handleCloseDialog}>
                  Close <CloseIcon />
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <div className="flex gap-[5%] mt-[5%]">
            {/* <GradeCategoryTable handleData={handleData} /> */}
            {/*Table code */}

            <div className="">
              <div className="flex  w-[60vw] mx-[3rem] ">
                <TableContainer
                  component={Paper}
                  sx={{ minWidth: 700, height: "100%" }}
                >
                  <Table aria-label="simple table">
                    <TableHead className="!bg-[#EEE3CB] !w-full">
                      <TableRow>
                        {["#", "Grade Category", "Status", "Action"].map(
                          (header, i) => (
                            <TableCell
                              className="!font-black text-lg !bg-slate-500"
                              align="center"
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
                          // }}
                        >
                          <TableCell align="center" className="bg-slate-200">
                            {index + 1}
                          </TableCell>
                          <TableCell align="center" className="bg-slate-200">
                            {data.name}
                          </TableCell>
                          {/* <TableCell align="left" className="bg-slate-200">
                    {data.series}
                  </TableCell> */}
                          <TableCell
                            align="center"
                            className="bg-slate-200"
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
                          </TableCell>{" "}
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
                          <TableCell align="center" className="bg-slate-200">
                            <DeleteIcon
                              className="!text-[#B31312] cursor-pointer"
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
                              Do you want to delete the Grade Category?
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
              <div className=" border-2 border-black rounded-md shadow-lg shadow-slate-400 !bg-white h-[280px]">
                <form>
                  <div className="flex  justify-center p-3 border-2 border-slate-500 rounded-md bg-[#EEE3CB]">
                    <div className="p-1 text-black font-extrabold">
                      Add Grade Category
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mx-3 my-7  items-center font-bold text-[1.2rem]">
                      Grade Category
                    </div>
                    <TextField
                      className="!mx-5 !my-5"
                      size="medium"
                      onChange={(e) => handleEnter(e.target.value)}
                      label="LEVEL 3 | Grade 8-9"
                      error={error}
                      helperText={
                        error
                          ? "Grade Category already present in database"
                          : ""
                      }
                    />
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

export default Student;
