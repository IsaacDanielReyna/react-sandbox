import * as React from "react";
import { useState } from 'react';
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MiniProfile from "./MiniProfile";
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: "#0a1021",
  color: "white",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  background: "#0a1021",
  color: "white",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const drawerMenu = [
  {
    title: "General",
    listItems: [
      {
        title: "Blueprints",
        id: 1,
        icon: <InboxIcon color="primary" />,
        listItems: [
          { title: "One" },
          { title: "Two" },
          { title: "Three" },
          { title: "Four" },
          { title: "Five" },
        ],
      },
      {
        title: "Login",
        link: "./login",
        id: 2,
        icon: <MailIcon color="primary" />,
      },
      {
        title: "Data Display",
        id: 3,
        icon: <InboxIcon color="primary" />,
        listItems: [
          { title: "One" },
          { title: "Two" },
          { title: "Three" },
          { title: "Four" },
          { title: "Five" },
        ],
      },
    ],
  },
  {
    title: "Management",
    listItems: [
      {
        title: "Users",
        id: 4,
        icon: <ManageAccountsIcon color="primary" />,
        listItems: [
            { title: "Users", link: './users' },
            { title: "Groups" },
            { title: "Roles" },
        ],
      },
      {
        title: "Projects",
        id: 5,
        icon: <MailIcon color="primary" />,
        listItems: [
          { title: "One" },
          { title: "Two" },
          { title: "Three" },
          { title: "Four" },
          { title: "Five" },
        ],
      },
      {
        title: "Invoices",
        id: 6,
        icon: <InboxIcon color="primary" />,
        listItems: [
          { title: "One" },
          { title: "Two" },
          { title: "Three" },
          { title: "Four" },
          { title: "Five" },
        ],
      },
    ],
  },
];

export default function SideBar({ isSidebarOpen }) {
    const [settings, setSettings] = useState([
        { id: 1, open: false },
        { id: 2, open: false },
        { id: 3, open: false },
        { id: 4, open: false },
        { id: 5, open: false },
        { id: 6, open: false },
    ]);

  const handleClick = (id) => {
    setSettings(settings.map(item => item.id === id ? { ...item, open: !item.open } : item));
  };

  return (
    <Drawer variant="permanent" open={isSidebarOpen} sx={{ zIndex: 0 }}>
      <Toolbar />
      <MiniProfile open={isSidebarOpen} />

      {drawerMenu.map((header) => (
        <List
          color="inherit"
          key={header.title}
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              style={{
                background: "none",
                color: "white",
                display: isSidebarOpen ? "block" : "none",
              }}
            >
              {header.title}
            </ListSubheader>
          }
        >
          {header.listItems.map((menu) => (
            <ListItem
              color="primary"
              key={menu.title}
              disablePadding
              sx={{ display: "block" }}
              {...(menu.listItems ? {}:{button: true, component: Link, to: menu.link ? menu.link : '#'})}
            >
              <ListItemButton
                onClick={() => {
                  handleClick(menu.id);
                }}
                color="primary"
                sx={{
                  minHeight: 48,
                  justifyContent: isSidebarOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  color="primary"
                  sx={{
                    minWidth: 0,
                    mr: isSidebarOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {menu.icon}
                </ListItemIcon>
                <ListItemText
                  primary={menu.title}
                  sx={{ opacity: isSidebarOpen ? 1 : 0 }}
                />
                {isSidebarOpen && menu.listItems?.length > 0 && (settings.find(item => item.id === menu.id).open ? <ExpandLess /> : <ExpandMore />) }
              </ListItemButton>
              <Collapse
                style={{ display: isSidebarOpen ? "block" : "none" }}
                in={settings.find(item => item.id === menu.id).open}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {menu.listItems?.map((submenu) => (
                    <ListItem
                    color="primary"
                    key={`${menu.title}-${menu.title}-${submenu.title}`}
                    disablePadding
                    sx={{ display: "block" }}
                    button component={Link} to={ submenu.link ? submenu.link : "#"}
                >
                    <ListItemButton sx={{ pl: 9 }}>
                        <ListItemText primary={submenu.title} />
                    </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </ListItem>
          ))}
        </List>
      ))}
    </Drawer>
  );
}
