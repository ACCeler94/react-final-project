import React, { useState } from 'react';
import styles from './TableForm.module.scss';

const TableForm = ({ id, status, peopleAmount, maxPeopleAmount, bill }) => {

  const [tableStatus, setTableStatus] = useState(status);
  const [peopleCount, setPeopleCount] = useState(peopleAmount ? peopleAmount : '');
  const [maxPeopleCount, setMaxPeopleCount] = useState(maxPeopleAmount ? maxPeopleAmount : '');
  const [billAmount, setBillAmount] = useState(bill ? bill : 0);


  return (
    <form className={styles.root}>
      <div className={`${styles.tableStatusWrapper} my-3`}>
        <label htmlFor='table-status' className='fw-bold me-3'>Status:</label>
        <select id='table-status' name='table-status' className={styles.select}>
          <option value='Free' selected={tableStatus === 'Free'} >Free</option>
          <option value='Reserved' selected={tableStatus === 'Reserved'}>Reserved</option>
          <option value='Busy' selected={tableStatus === 'Busy'} >Busy</option>
          <option value='Cleaning' selected={tableStatus === 'Cleaning'} >Cleaning</option>
        </select>
      </div>
      <div className={`${styles.peopleRangeWrapper} my-3`}>
        <label id='people-range' htmlFor='people-min' className='fw-bold me-3'>People:</label>
        <input id='people-min' name='people-min' aria-labelledby='people-range' type='text' value={peopleCount} />
        <span className={styles.divider}>/</span>
        <input id='people-max' name='people-max' aria-labelledby='people-range' type='text' value={maxPeopleCount} />
      </div>
      <div className={`${styles.billWrapper} my-3`}>
        <label htmlFor='bill-amount' className='fw-bold me-4' >Bill:</label>
        $
        <input id='bill-amount' name='bill-amount' type='text' value={billAmount} />
      </div>
      <input type='submit' className='btn btn-primary my-3' value='Update' />
    </form>
  )
};

export default TableForm;