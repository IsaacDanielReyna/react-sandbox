import * as React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { drawerMenu } from "../../../sample/sidebar-menu";
import Box from "@mui/material/Box";

export default function MenuLogic({ isSidebarOpen }) {
  const [settings, setSettings] = useState([
    { id: 1, open: false },
    { id: 2, open: false },
    { id: 3, open: false },
    { id: 4, open: false },
    { id: 5, open: false },
    { id: 6, open: false },
  ]);

  const handleClick = (id) => {
    setSettings(
      settings.map((item) =>
        item.id === id ? { ...item, open: !item.open } : item
      )
    );
  };

  return (
    <Box id="menu-logic" style={{ overflow: "hidden", overflowY: "auto" }}>
      {drawerMenu.map((header) => (
        <List
          color="inherit"
          key={header.title}
          subheader={
            <ListSubheader
              disableSticky
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
              {...(menu.listItems
                ? {}
                : {
                    button: true,
                    component: Link,
                    to: menu.link ? menu.link : "#",
                  })}
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
                {isSidebarOpen &&
                  menu.listItems?.length > 0 &&
                  (settings.find((item) => item.id === menu.id).open ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  ))}
              </ListItemButton>
              <Collapse
                style={{ display: isSidebarOpen ? "block" : "none" }}
                in={settings.find((item) => item.id === menu.id).open}
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
                      button
                      component={Link}
                      to={submenu.link ? submenu.link : "#"}
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
    </Box>
  );
}
