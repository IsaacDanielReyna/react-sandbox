import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const drawerMenu = [
    {
        title: 'Examples',
        listItems: [
            {
                title: 'Example 1',
                id: 1,
                icon: <InboxIcon color="primary" />,
                listItems: [
                    { title: 'One' },
                    { title: 'Two' },
                    { title: 'Three' },
                    { title: 'Four' },
                    { title: 'Five' },
                ],
            },
            {
                title: 'Example 2',
                id: 3,
                icon: <InboxIcon color="primary" />,
                listItems: [
                    { title: 'One' },
                    { title: 'Two' },
                    { title: 'Three' },
                    { title: 'Four' },
                    { title: 'Five' },
                ],
            },
        ],
    },
    {
        title: 'Management',
        listItems: [
            {
                title: 'Users',
                id: 4,
                icon: <ManageAccountsIcon color="primary" />,
                link: '/users',
            },
        ],
    },
];
