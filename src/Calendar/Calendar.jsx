import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Calendar({ handledateprops, handlename }) {
  const [value, setValue] = React.useState(dayjs(""));

  const handledate = (newValue) => {
    setValue(`${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`);
    // let date = `${newValue.$y}/${newValue.$M + 1}/${newValue.$D}`;
    // handledateprops(date);
    let date = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
    handledateprops(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          // value={value}
          onChange={(newValue) => handledate(newValue)}
          sx={{ backgroundColor: "#F3F1F5" }}
          // {...name==="past"?disablePast={{true}} :disableFuture={true}}
          // {...(handlename === "pa" ? disablePast={true}: disableFuture={true}}
          disableFuture={handlename === "fu" ? true : false}
          disablePast={handlename === "pa" ? true : false}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
