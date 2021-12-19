import React, { useState } from 'react';

import ExpensesBarGraph from './ExpensesBarGraph';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  // const [data, setData] = useState(props.data[0].data);
  const [data, setData] = useState(props.data.find(record => record.year == props.selectedYear).data);

  const yearChangeHandler = (event) => {
    props.onChangeExpenseYear(event.target.value);
    setData(props.data.find(record => record.year == event.target.value).data);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={yearChangeHandler}>
          {props.data.map((selection, index) => {
            return (
              <option
                value={selection.year}
                key={index}>{selection.year}
              </option>
            );
          })}
        </select>
      </div>
      {/* <ExpensesBarGraph data={data}/> */}
    </div>
  );
};

export default ExpensesFilter;