import React, { useState, useEffect } from 'react';
import styles from './TableForm.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { fetchUpdateTable } from '../../../redux/tablesRedux';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';


const TableForm = ({ id, status, peopleAmount, maxPeopleAmount, bill }) => {

  const [tableStatus, setTableStatus] = useState(status);
  const [peopleCount, setPeopleCount] = useState(peopleAmount ? peopleAmount : '');
  const [maxPeopleCount, setMaxPeopleCount] = useState(maxPeopleAmount ? maxPeopleAmount : '');
  const [billAmount, setBillAmount] = useState(bill ? bill : 0);

  const dispatch = useDispatch();
  const navigate = useNavigate();


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
    let newValue = e.target.value
    if (newValue) {
      newValue = parseInt(newValue, 10);
    } else {
      newValue = '';
    }
    if (newValue < 0) {
      setPeopleCount(0);
    } else {
      setPeopleCount(newValue);
    }
  }

  const maxPeopleAmountChangeHandler = e => {
    let newValue = e.target.value
    if (newValue) {
      newValue = parseInt(newValue, 10);
    } else {
      newValue = '';
    }
    if (newValue < 0) {
      setMaxPeopleCount(0)
    } else if (newValue > 10) {
      setMaxPeopleCount(10)
    } else {
      setMaxPeopleCount(newValue);
    }
  };

  const billAmountChangeHandler = e => {
    let newValue = e.target.value
    if (newValue) {
      newValue = parseInt(newValue, 10);
    } else {
      newValue = '';
    }
    if (newValue < 0) {
      setBillAmount(0);
    } else {
      setBillAmount(newValue);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const updatedValues = {};


    // take only values that changed
    if (tableStatus !== status) {
      updatedValues.status = tableStatus;
    };
    if (peopleCount !== peopleAmount) {
      if (peopleCount > maxPeopleCount || peopleCount < 0) {
        alert('Check the value given as a number of people');
        return
      }
      updatedValues.peopleAmount = peopleCount;
    }
    if (maxPeopleCount !== maxPeopleAmount) {
      if (maxPeopleCount < 0) {
        alert('Check the value given as a number of people');
        return
      }
      updatedValues.maxPeopleAmount = maxPeopleCount;
    }
    if (billAmount !== bill) {
      if (billAmount < 0) {
        alert('Check the value given as Bill');
        return
      }
      updatedValues.bill = billAmount
    }

    dispatch(fetchUpdateTable(id, updatedValues)).then(navigate('/'));
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit} >
      <div className={`${styles.tableStatusWrapper} my-3`}>
        <label htmlFor='table-status' className='fw-bold me-3'>Status:</label>
        <select id='table-status' name='table-status' className={styles.select} onChange={statusChangeHandler} defaultValue={tableStatus} data-testid='status'>
          <option value='Free' >Free</option>
          <option value='Reserved' >Reserved</option>
          <option value='Busy' >Busy</option>
          <option value='Cleaning' >Cleaning</option>
        </select>
      </div>
      <div className={`${styles.peopleRangeWrapper} my-3`}>
        <label id='people-range' htmlFor='people-min' className='fw-bold me-3'>People:</label>
        <input id='people-min' name='people-min' aria-labelledby='people-range' type='number' value={peopleCount} onChange={peopleAmountChangeHandler} min='0' max={maxPeopleCount ? maxPeopleCount : '10'} data-testid='min-people' />
        <span className={styles.divider}>/</span>
        <input id='people-max' name='people-max' aria-labelledby='people-range' type='number' value={maxPeopleCount} onChange={maxPeopleAmountChangeHandler} min='0' max='10' data-testid='max-people' />
      </div>
      <div className={clsx(styles.billWrapper, 'my-3', tableStatus !== 'Busy' && styles.hidden)}>
        <label htmlFor='bill-amount' className='fw-bold me-4'>Bill:</label>
        $
        <input id='bill-amount' name='bill-amount' type='number' min='0' value={billAmount} onChange={billAmountChangeHandler} data-testid='bill' />
      </div>
      <input type='submit' className='btn btn-primary my-3' value='Update' />
    </form>
  )
};

export default TableForm;

TableForm.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  peopleAmount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  maxPeopleAmount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  bill: PropTypes.number
}