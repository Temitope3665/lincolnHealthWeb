import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../reducers/counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <p>This is the real dev</p>
        <p class="font-['Rubik']">Yessssaa</p>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}