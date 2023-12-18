import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import instance from "../../instance";
import { useLayoutEffect } from "react";
import Cookies from "js-cookie";
import Visibility from "@mui/icons-material/Visibility";
import { VisibilityOff } from "@mui/icons-material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import AddSeries from "../AddForm/AddSeries";
// import localinstance from "../../localinstance";

export default function GradeCategoryTable({ handleData }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [fetchdata, setfetchdata] = useState([]);
  const [columns, setcolumns] = useState([]);
  const [id, setid] = useState("");

  useLayoutEffect(() => {
    fetch();
  }, []);

  //   const deleteid = async (id) => {
  //     console.log(id);
  //     const res = await instance({
  //       url: `series/delete/${id}`,
  //       method: "DELETE",
  //       headers: {
  //         Authorization: `${Cookies.get("token")}`,
  //         // accesskey: `auth74961a98ba76d4e4`,
  //       },
  //     });
  //     console.log(res.data.message);
  //     await fetch();
  //   };
  const fetch = async () => {
    const res = await instance({
      url: `categoryGrade/get/active`,
      method: "GET",
      headers: {
        Authorization: `${Cookies.get("token")}`,
        // accesskey: `auth74961a98ba76d4e4`,
      },
    });

    console.log(res.data.message);
    console.log(res.data.message[0]);
    let columns = Object.keys(res.data.message[0]);
    console.log(columns);
    setcolumns(columns);
    setfetchdata(res.data.message);
    handleData(res.data.message);
    // fetch1(res.data.message.id);
    // setid(res.data.message.id);
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

  return (
    <div className="flex flex-col gap-5 sm:flex-row  sm:justify-between">
      <div className="flex w-full">
        <TableContainer component={Paper} sx={{ minWidth: 500, height: "50%" }}>
          <Table aria-label="simple table">
            <TableHead className="!bg-[#EEE3CB] !w-full">
              <TableRow>
                {["Grade Category", "Status", "Action"].map((header, i) => (
                  <TableCell
                    className="!font-black text-lg !bg-slate-500"
                    align="centre"
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
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" className="bg-slate-200">
                    {data.name}
                  </TableCell>
                  <TableCell align="left" className="bg-slate-200">
                    {"hi"}
                  </TableCell>
                  <TableCell align="left" className="bg-slate-200">
                    {/* {data.status === true ? <Visibility /> : <VisibilityOff />} */}
                    {"hello"}
                  </TableCell>
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
  );
}
