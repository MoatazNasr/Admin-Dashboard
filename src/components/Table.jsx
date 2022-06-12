import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Table = ({rows , columns}) => {
  return (
    <>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{height:'85%',margin:'0.5rem 0rem'}}
      />
    </>
  )
}

export default Table