import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import instance from "../../instance";
import { useEffect } from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Swal from "sweetalert2";

import TablePagination from "@mui/material/TablePagination";

export default function SchoolTable() {
  // const [schooldata, setSchoolData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [fetchdata, setfetchdata] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [searchRow, setSearchRow] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    TotalSchool();
  }, []);
  const TotalSchool = async () => {
    const res = await instance({
      url: `school/get/all`,
      method: "GET",
    });
    console.log(res.data.message);
    setfetchdata(res.data.message);
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

  const handleSearch = (val) => {
    setSearchVal(val.trim());
  };

  const filterTable = () => {
    // console.log(searchVal);
    // console.log(rowdata)
    setPage(0);
    let tempArr = [];
    for (let ele of fetchdata) {
      console.log("element", ele);
      let schoolName = ele.school_name.toLowerCase();
      let email = ele.email.toLowerCase();
      if (
        schoolName.indexOf(searchVal.toLowerCase()) > -1 ||
        email.indexOf(searchVal.toLowerCase()) > -1
      ) {
        tempArr.push(ele);
      }
    }
    setSearchRow([]);
    if (tempArr.length === 0) {
      alert("No data Found");
    } else {
      setSearchRow(tempArr);
    }
  };

  const handlestatus = async (id, status) => {
    console.log(id);
    console.log(status);
    // Swal.fire({
    //   // title: "Example",
    //   text: "Do You want to change the status?",
    //   icon: "question",
    //   confirmButtonText: "OK",
    //   cancelButtonText: "Cancel",
    // });

    const res = await instance({
      url: `school/update/status/${id}`,
      method: "PUT",
      data: {
        status: !status,
      },
    });
    console.log(res.data.message);
    TotalSchool();
    window.location.reload();
  };
  return (
    // <TableContainer
    //   component={Paper}
    //   sx={{ maxWidth: 1050 }}
    //   className="border-2 border-black-500"
    // >
    //   <Table aria-label="simple table">
    //     <TableHead className="bg-[#FFE699]">
    //       {/* <TableRow sx={{ "&:last-child td, &:last-child th": { border: 1 } }}> */}
    //       <TableRow>
    //         <TableCell className="!text-[1rem] !font-bold !text-[#CD1818]">
    //           School Name
    //         </TableCell>
    //         <TableCell className="!text-[1rem] !font-bold !text-[#CD1818]">
    //           Contact Person
    //         </TableCell>
    //         <TableCell
    //           align="left"
    //           className="!text-[1rem] !font-bold !text-[#CD1818]"
    //         >
    //           Email&nbsp;
    //         </TableCell>
    //         <TableCell
    //           align="left"
    //           className="!text-[1rem] !font-bold !text-[#CD1818]"
    //         >
    //           Phone&nbsp;
    //         </TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {schooldata.map((row) => (
    //         <TableRow key={row.school_name}>
    //           <TableCell component="th" scope="row">
    //             {row.school_name}
    //           </TableCell>
    //           <TableCell>{row.contact_person}</TableCell>
    //           <TableCell>{row.email}</TableCell>
    //           <TableCell>{row.phone}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <div className="flex w-[80%] p-4  ">
      <TableContainer
        component={Paper}
        //   sx={{ minWidth: 1000, marginLeft: 5 }}
      >
        <Toolbar className="bg-[#BFCCB5] flex justify-between">
          <div className="flex">
            <TextField
              id="search-bar"
              className="text"
              onInput={(e) => {
                handleSearch(e.target.value);
              }}
              label="Enter Search Value"
              variant="outlined"
              placeholder="Search..."
              size="small"
              type="search"
            />
            <div className="bg-slate-300">
              <IconButton
                type="submit"
                aria-label="search"
                onClick={filterTable}
              >
                <SearchIcon style={{ fill: "blue" }} />
              </IconButton>
            </div>
          </div>

          <TablePagination
            rowsPerPageOptions={[10, 50, 100, { label: "All", value: -1 }]}
            colSpan={3}
            count={searchRow.length === 0 ? fetchdata.length : searchRow.length}
            rowsPerPage={rowsPerPage}
            page={page}
            slotProps={{
              select: {
                "aria-label": "rows per page",
              },
              actions: {
                showFirstButton: true,
                showLastButton: true,
              },
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Toolbar>

        <Table aria-label="simple table">
          <TableHead className="!bg-[#FFE699] !w-full">
            <TableRow>
              {[
                "School Name",
                "Contact Person",
                "Email",
                "Phone",
                "Status",
              ].map((header, i) => (
                <TableCell
                  className="!text-[#CD1818] !font-bold text-lg !bg-slate-500 "
                  align="center"
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* {loading ? (
            <div>
              <Loader />
            </div>
          ) : ( */}
          <TableBody className="bg-[#F5F5F5]">
            {searchRow.length === 0
              ? (rowsPerPage > 0
                  ? fetchdata.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : fetchdata
                ).map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center" className="bg-slate-200">
                      {data.school_name}
                    </TableCell>
                    <TableCell align="center" className="bg-slate-200">
                      {data.contact_person}
                    </TableCell>
                    {/* <TableCell align="left" className="bg-slate-200">
                    {data.status === true ? <Visibility /> : <VisibilityOff />}
                  </TableCell> */}
                    <TableCell align="center" className="bg-slate-200">
                      {data.email}
                    </TableCell>
                    <TableCell align="center" className="bg-slate-200">
                      {data.phone}
                    </TableCell>
                    {/* <TableCell align="left" className="bg-slate-200">
                      {data.createdAt}
                    </TableCell>
                    <TableCell align="left" className="bg-slate-200">
                      {data.UserCategory.category}
                    </TableCell> */}

                    <TableCell
                      align="center"
                      className="bg-slate-200 cursor-pointer"
                    >
                      <div onClick={() => handlestatus(data.id, data.status)}>
                        {data.status === true ? (
                          <h1 className="!text-[#CD1818] font-bold">Active</h1>
                        ) : (
                          <h1 className="!text-[#5D9C59] font-bold">
                            InActive
                          </h1>
                        )}
                      </div>
                    </TableCell>
                    {/* <TableCell align="left" className="bg-slate-200">
                      {data.UserCategory.category === "Admin" ? (
                        <div></div>
                      ) : (
                        <div className="flex gap-2 cursor-pointer">
                          <Button
                            variant="contained"
                            onClick={() => handleassignbook(data.id)}
                            className=" !w-full gap-1"
                          >
                            Assign <span> Books</span>
                          </Button>
                          <div>
                            <Button
                              variant="contained"
                              className="!w-full gap-1 !bg-slate-500 cursor-pointer"
                              onClick={handleaddexpiry}
                            >
                              Add <span>Expiry</span>
                            </Button>
                            <Dialog
                              PaperProps={{
                                sx: {
                                  backgroundColor: "",
                                },
                              }}
                              open={open}
                              aria-labelledby="alert-dialog-title"
                              aria-describedby="alert-dialog-description"
                              TransitionComponent={Transition}
                            >
                              <DialogContent className="">
                                <div className=" mx-[5rem] mt-[1rem] shadow-md shadow-black">
                                  <Calender handledateprops={handledateprops} />
                                </div>
                              </DialogContent>
                              <DialogActions>
                                <Button
                                  onClick={() => handlecalenderdate(data.id)}
                                  variant="contained"
                                >
                                  Set Date
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </div>
                          <Button
                            variant="contained"
                            className=" !w-full gap-1"
                            onClick={() => handlebook(data.id)}
                          >
                            Books
                          </Button>
                        </div>
                      )}
                    </TableCell> */}

                    {/* <TableCell align="left" className="bg-slate-200">
                    <DeleteOutlineIcon
                      className=""
                      onClick={() => {
                        deleteid(data.id);
                      }}
                    />
                  </TableCell> */}
                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                  </TableRow>
                ))
              : (rowsPerPage > 0
                  ? searchRow.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : searchRow
                ).map((data, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center" className="bg-slate-200">
                      {data.school_name}
                    </TableCell>
                    <TableCell align="center" className="bg-slate-200">
                      {data.contact_person}
                    </TableCell>
                    {/* <TableCell align="left" className="bg-slate-200">
                    {data.status === true ? <Visibility /> : <VisibilityOff />}
                  </TableCell> */}
                    <TableCell align="center" className="bg-slate-200">
                      {data.email}
                    </TableCell>
                    <TableCell align="center" className="bg-slate-200">
                      {data.phone}
                    </TableCell>
                    {/* <TableCell align="left" className="bg-slate-200">
                          {data.createdAt}
                        </TableCell> */}
                    {/* <TableCell align="left" className="bg-slate-200">
                          {data.UserCategory.category}
                        </TableCell> */}

                    <TableCell align="center" className="bg-slate-200">
                      <div onClick={() => handlestatus(data.id, data.status)}>
                        {data.status === true ? (
                          <h1 className="!text-[#CD1818] font-bold">Active</h1>
                        ) : (
                          <h1 className="!text-[#5D9C59] font-bold">
                            InActive
                          </h1>
                        )}
                      </div>
                    </TableCell>

                    {/* <TableCell align="left" className="bg-slate-200">
                          {data.UserCategory.category === "Admin" ? (
                            <div></div>
                          ) : (
                            <div className="flex-col ">
                              <Button
                                variant="contained"
                                onClick={handleassignbook}
                                className=" !w-full gap-1"
                              >
                                Assign <span> Books</span>
                              </Button>
                              <div>
                                <Button
                                  variant="contained"
                                  className="!mt-2 !w-full gap-1"
                                  onClick={() => handleaddexpiry(data.id)}
                                >
                                  Add <span>Expiry</span>
                                </Button>
                                <Dialog
                                  PaperProps={{
                                    sx: {
                                      width: "80%",
                                      height: "100%",
                                      backgroundColor: "rgb(235,215,224)",
                                    },
                                  }}
                                  open={open}
                                  aria-labelledby="alert-dialog-title"
                                  aria-describedby="alert-dialog-description"
                                  TransitionComponent={Transition}
                                >
                                  {/* <DialogTitle id="alert-dialog-title">"{postdata}"</DialogTitle> */}
                    {/* <DialogContent className="">
                                    {/* <DialogContentText id="alert-dialog-description">
                New Subject Added Successfully!!!
              </DialogContentText> */}
                    {/* <div className="">
                                      <Calender />
                                    </div>
                                  </DialogContent>
                                  <DialogActions>
                                    <Button>Close</Button>
                                  </DialogActions>
                                </Dialog>
                              </div>
                            </div>
                          )}
                        </TableCell>  */}

                    {/* <TableCell align="left" className="bg-slate-200">
                    <DeleteOutlineIcon
                      className=""
                      onClick={() => {
                        deleteid(data.id);
                      }}
                    />
                  </TableCell> */}
                    {/* <TableCell align="right">{row.protein}</TableCell> */}
                  </TableRow>
                ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 41 * emptyRows }}>
                <TableRow colSpan={3} />
              </TableRow>
            )}
          </TableBody>
          {/* )} */}
        </Table>
        {/* <TablePagination
            component="div"
            count={fetchdata.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
      </TableContainer>
    </div>
  );
}
