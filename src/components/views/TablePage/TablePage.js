import React from 'react';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useParams, Navigate } from "react-router-dom";


const TablePage = () => {

  const { tableId } = useParams();
  const tableData = useSelector((state) => getTableById(state, tableId));


  if (!tableData) return <Navigate to="/" />

  return (
    <div className='table-page'>
      <h1 className='m-4 ms-0'>Table {tableData.id}</h1>
    </div>
  )
};

export default TablePage;