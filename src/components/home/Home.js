import React, { useState } from 'react';
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';

export default function Home() {
    const [users, setUsers] = useState([]);
    const columns = [
        { 
            field: 'id',
            headerName: 'ID',
            width: 150
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
        }
      ];

    React.useEffect(() => {
        axios.get('/list/').then(response => {
            if (response.data) {
                let userlist = response.data.map((user, index) => {
                    return {
                        id: index,
                        ...user
                    }
                });
                setUsers(userlist);
            }
        });
    }, []);

    return (
        <>
            <h1>Home</h1>
            <div style={{ height: '75vh', width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
            </div>
        </>
    );
}
