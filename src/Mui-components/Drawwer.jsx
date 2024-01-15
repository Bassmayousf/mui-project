import React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { Create, LoginOutlined, Person } from "@mui/icons-material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useLocation, useNavigate } from "react-router-dom";
const Drawwer = ({
  setMode,
  myMode,
  noneORblock,
  setDrawerType,
  drawerType,
  setnoneORblock,
}) => {
  const navigate = useNavigate();
  const currentLocation = useLocation();
  const theme = useTheme();
  const myList = [
    { text: "Home", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <SettingsOutlinedIcon/>, path: "/profile" },
    { text: "Setting", icon:<Person/> , path: "/setting" },
  ];
  return (
    <Drawer
      sx={{
        display: { xs: noneORblock, sx: "block", md: "block" },
        width: "240px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "240px",
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      open={true}
      anchor="left"
      onClose={() => {
        setDrawerType("permanent");
        setnoneORblock("none");
      }}
    >
      <IconButton
        sx={{ margin: "10.5px" }}
        color="inherit"
        onClick={() => {
          localStorage.setItem(
            "currentmode",
            myMode !== "light" ? "light" : "dark"
          );
          setMode(myMode !== "light" ? "light" : "dark");
        }}
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon sx={{ color: "orange" }} />
        )}
      </IconButton>

      <Divider />

      <Divider />
      <List>
        {myList.map((item) => {
          return (
            <ListItem
            key={item.text}
              disablePadding
              sx={{
                backgroundColor:
                  currentLocation.pathname === item.path
                    ? theme.palette.divider
                    : null,
              }}
            >
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
              >
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color:
                      currentLocation.pathname === item.path
                        ? theme.palette.background.paper
                        : null,
                  }}
                  primary={item.text}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LoginOutlined />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
export default Drawwer;
