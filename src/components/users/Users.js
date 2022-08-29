import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

import userService from '../../services/user-service';

export default function Users() {
    const [users, setUsers] = useState([]);
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 150,
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 150,
            editable: true,
        },
        {
            field: 'first_name',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'last_name',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.getValue(params.id, 'first_name') || ''} ${
                    params.getValue(params.id, 'last_name') || ''
                }`,
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            renderCell: (values) => {
                return (
                    <Link to={`/profile/${values.row.username}`}>
                        <IconButton aria-label="delete" color="primary">
                            <PersonIcon />
                        </IconButton>
                    </Link>
                );
            },
        },
    ];

    const pageSize = 10;
    const headerSize = 56;
    const rowSize = 52;
    const tableHeight = pageSize * rowSize + headerSize + 54;

    React.useEffect(() => {
        userService.getUsers().then((response) => {
            if (response.data) {
                let userlist = response.data.map((user, index) => {
                    return {
                        id: index,
                        ...user,
                    };
                });
                setUsers(userlist);
            }
        });
    }, []);

    return (
        <>
            <h1>Users</h1>
            <Stack direction="row" spacking={1}>
                <IconButton aria-label="view" color="primary">
                    <DeleteIcon />
                </IconButton>
            </Stack>
            <div style={{ height: `${tableHeight}px`, width: '100%' }}>
                <DataGrid
                    rows={users}
                    columns={columns}
                    pageSize={pageSize}
                    rowsPerPageOptions={[pageSize]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </>
    );
}
