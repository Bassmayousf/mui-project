import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "Mui-components/Appbar";
import Drawwer from "Mui-components/Drawwer";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "styles/MyTheme";

const Root = () => {
  const [drawerType, setDrawerType] = useState("permanent");
  const [noneORblock, setnoneORblock] = useState("none");
  const [mode, setMyMode] = useState(
    localStorage.getItem("currentmode") === null
      ? "light"
      : localStorage.getItem("currentmode") === "light"
      ? "light"
      : "dark"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <header>
      <h1>الحمدلله</h1>
      </header> */}

      <Appbar setnoneORblock={setnoneORblock} setDrawerType={setDrawerType} />
      <Drawwer
        setMode={setMyMode}
        myMode={mode}
        noneORblock={noneORblock}
        drawerType={drawerType}
        setnoneORblock={setnoneORblock}
        setDrawerType={setDrawerType}
      />
      <Box
        sx={{
          ml: { xs: "0", sx: "0", md: "240px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
