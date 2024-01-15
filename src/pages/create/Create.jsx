import React, { useState } from "react";
import "./create.css";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  // @ts-ignore
  color: theme.palette.text.primary,
  // @ts-ignore
  backgroundColor: purple[500],
  "&:hover": {
    // @ts-ignore
    backgroundColor: purple[300],
  },
}));
export default function Create() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate()
  return (
    <Box component="form" sx={{ width: { xs: "330px", sx: "380px" } }}>
      <TextField
      autoComplete ='off'
        onChange={(eo) => {
          setTitle(eo.target.value);
        }}
        label="Transection Field"
        fullWidth={true}
        sx={{ m: 2, width: "100%", display: "block" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">&#128073;</InputAdornment>
          ),
        }}
        variant="filled"
      />
      <TextField
        onChange={(eo) => {
          // @ts-ignore
          setPrice(Number(eo.target.value));
        }}
        label="price"
        fullWidth={true}
        sx={{ m: 2, width: "100%", display: "block" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
      <ColorButton
        sx={{ marginLeft: "14px" }}
        variant="contained"
        onClick={() => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({title,price}),
          }).then(()=>{
            navigate("/")
          })
        }}
      >
        Submit
        <IconButton sx={{ color: "#fff" }}>
          <ChevronRightOutlinedIcon />
        </IconButton>
      </ColorButton>
    </Box>
  );
}
