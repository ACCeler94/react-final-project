import React from 'react';
import styles from './TableForm.module.scss';

const TableForm = () => {


  return (
    <form className={styles.root}>
      <div className={`${styles.tableStatusWrapper} my-3`}>
        <label htmlFor='table-status' className='fw-bold me-3'>Status:</label>
        <select id='table-status' name='table-status' className={styles.select}>
          <option value='Free'>Free</option>
          <option value='Reserved'>Reserved</option>
          <option value='Busy' >Busy</option>
          <option value='Cleaning' >Cleaning</option>
        </select>
      </div>
      <div className={`${styles.peopleRangeWrapper} my-3`}>
        <label id='people-range' htmlFor='people-min' className='fw-bold me-3'>People:</label>
        <input id='people-min' name='people-min' aria-labelledby='people-range' type='text' />
        <span className={styles.divider}>/</span>
        <input id='people-max' name='people-max' aria-labelledby='people-range' type='text' />
      </div>
      <div className={`${styles.billWrapper} my-3`}>
        <label htmlFor='bill-amount' className='fw-bold me-4' >Bill:</label>
        $
        <input id='bill-amount' name='bill-amount' type='text' />
      </div>
      <input type='submit' className='btn btn-primary my-3' value='Update' />
    </form>
  )
};

export default TableForm;