import React from "react";
import { Avatar, Link, Toolbar, Typography, AppBar } from "@mui/material";
import Ava from "..//images/7302829c17b36bbd51bc4d98d57508a2.jpg";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
export default function Appbar({ setnoneORblock, setDrawerType }) {
  return (
    <AppBar
      sx={{
        marginLeft: { xs: "0px", sx: "0px", md: "240px" },
        width: { xs: "100%", sx: "100%", md: "calc(100% - 240px)" },
        mb: "40px",
      }}
      position="static"
    >
      <Toolbar>
        <WidgetsOutlinedIcon
          onClick={() => {
            setnoneORblock("block");
            setDrawerType("temporary");
          }}
          sx={{
            mr: "15px",
            display: { xs: "block", md: "none" },
            cursor: "pointer",
            transition: ".6s ease-in",
            "&:hover": { transform: "rotate(360deg)" }
          }}
        />
        <Link
          sx={{
            flexGrow: 1,
            color: "#fff",
            fontSize: "19px",
            transition: ".2s ease-in",
            "&:hover": { fontSize: "22px" },
          }}
          underline="none"
          href="/"
        >
          My Expanse
        </Link>
        <Typography variant="body1" sx={{ mr: "15px" }}>
          Bassma Yousef
        </Typography>
        <Avatar
          alt="basmma yousef"
          src={Ava}
          sx={{ width: 50, height: 50 }}
        ></Avatar>
      </Toolbar>
    </AppBar>
  );
}
