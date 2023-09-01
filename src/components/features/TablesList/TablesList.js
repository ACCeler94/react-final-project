import React from 'react';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/tablesRedux';
import { Link } from 'react-router-dom';


const TablesList = () => {

  const tablesArray = useSelector(getAll);

  return (
    <ul className='table-list-wrapper list-unstyled'>
      {tablesArray.map(element => {
        return (
          <li className='table-elem border-bottom d-flex py-4 justify-content-between' key={element.id}>
            <div className='table-elem-text-container d-flex align-items-center'>
              <h2 className='me-4 mb-0'>Table {element.id}</h2>
              <span><span className='fw-bold'>Status: </span>{element.status}</span>
            </div>
            <Link to={`/${element.id}`} className='btn btn-primary'>Show more</Link>
          </li>
        )
      })}
    </ul>
  )
};

export default TablesList;