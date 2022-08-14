import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const drawerMenu = [
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
          { title: "Users", link: "./users" },
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
