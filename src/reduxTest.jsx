import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCus } from './store/asyncAction/async';
import { countDecrement, countIncrement } from './store/counterReducer/counterReducer';

const ReduxTest = () => {
  const dispatch = useDispatch()
  const [first, setfirst] = useState(100);
  const value = useSelector(state => state.counts.value)
  const cust = useSelector(state => state.count.cust)
  console.log(value);
  const inc = () => {
    dispatch(countIncrement(first))
  }
  const dec = () => {
    dispatch(countDecrement())
  }
  const incs = () => {
    setfirst(first + 1 )
  }
  
  const fetch = () => {
    console.log(cust);
    dispatch(fetchCus())
  }
  return(
   <div>
      count: {value}
      <button onClick={inc}>
        100
      </button>
      <button onClick={dec}>
        -
      </button>
      <button onClick={incs}>
        +
      </button>
      <button onClick={fetch}>ЖМИ</button>
      {
        cust.map((item, id) => (
          <div key={`${id}_${item.price}`}>{item.activity}</div>
        ))
  
      }
   </div>
  )
}

export default ReduxTest;
