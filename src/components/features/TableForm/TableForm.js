import React, { useState, useEffect } from 'react';
import styles from './TableForm.module.scss';
import clsx from 'clsx';

const TableForm = ({ id, status, peopleAmount, maxPeopleAmount, bill }) => {

  const [tableStatus, setTableStatus] = useState(status);
  const [peopleCount, setPeopleCount] = useState(peopleAmount ? peopleAmount : '');
  const [maxPeopleCount, setMaxPeopleCount] = useState(maxPeopleAmount ? maxPeopleAmount : '');
  const [billAmount, setBillAmount] = useState(bill ? bill : 0);

  useEffect(() => {
    if (maxPeopleCount && peopleCount > maxPeopleCount) {
      setPeopleCount(maxPeopleCount);
    }
  }, [maxPeopleCount, peopleCount]);

  const statusChangeHandler = e => {
    const newTableStatus = e.target.value;
    setTableStatus(newTableStatus);
    if (newTableStatus === 'Free' || newTableStatus === 'Cleaning') {
      setPeopleCount('');
      setMaxPeopleCount('');
    }
    setBillAmount(0);
  }

  const peopleAmountChangeHandler = e => {
    const newValue = e.target.value;
    if (newValue < 0 || isNaN(newValue)) {
      setPeopleCount(0);
    } else {
      setPeopleCount(newValue);
    }
  }

  const maxPeopleAmountChangeHandler = e => {
    const newValue = e.target.value;
    if (newValue < 0 || isNaN(newValue)) {
      setMaxPeopleCount(0)
    } else if (newValue > 10) {
      setMaxPeopleCount(10)
    } else {
      setMaxPeopleCount(newValue);
    }
  };

  const billAmountChangeHandler = e => {
    const newValue = e.target.value;
    if (newValue < 0 || isNaN(newValue)) {
      setBillAmount(0);
    } else {
      setBillAmount(newValue);
    }
  }

  return (
    <form className={styles.root} >
      <div className={`${styles.tableStatusWrapper} my-3`}>
        <label htmlFor='table-status' className='fw-bold me-3'>Status:</label>
        <select id='table-status' name='table-status' className={styles.select} onChange={statusChangeHandler} defaultValue={tableStatus}>
          <option value='Free' >Free</option>
          <option value='Reserved' >Reserved</option>
          <option value='Busy' >Busy</option>
          <option value='Cleaning' >Cleaning</option>
        </select>
      </div>
      <div className={`${styles.peopleRangeWrapper} my-3`}>
        <label id='people-range' htmlFor='people-min' className='fw-bold me-3'>People:</label>
        <input id='people-min' name='people-min' aria-labelledby='people-range' type='number' value={peopleCount} onChange={peopleAmountChangeHandler} min='0' max={maxPeopleCount} />
        <span className={styles.divider}>/</span>
        <input id='people-max' name='people-max' aria-labelledby='people-range' type='number' value={maxPeopleCount} onChange={maxPeopleAmountChangeHandler} min='0' max='10' />
      </div>
      <div className={clsx(styles.billWrapper, 'my-3', tableStatus !== 'Busy' && styles.hidden)}>
        <label htmlFor='bill-amount' className='fw-bold me-4'>Bill:</label>
        $
        <input id='bill-amount' name='bill-amount' type='number' min='0' value={billAmount} onChange={billAmountChangeHandler} />
      </div>
      <input type='submit' className='btn btn-primary my-3' value='Update' />
    </form>
  )
};

export default TableForm;