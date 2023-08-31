import React from 'react';
import { useSelector } from 'react-redux';
import { getTableById } from '../../../redux/tablesRedux';
import { useParams, Navigate } from "react-router-dom";
import TableForm from '../../features/TableForm/TableForm';


const TablePage = () => {

  const { tableId } = useParams();
  const tableData = useSelector((state) => getTableById(state, tableId));
  console.log(tableId)


  if (!tableData) return <Navigate to="/" />

  return (
    <div className='table-page'>
      <h1 className='m-4 ms-0'>Table {tableData.id}</h1>
      <TableForm {...tableData} />
    </div>
  )
};

export default TablePage;