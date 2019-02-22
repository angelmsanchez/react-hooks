import React, { useCallback } from 'react';

import { useDispatch, useMappedState } from 'redux-react-hook';

import { INCREMENT, DECREMENT } from '../store/actions/counter.action';

export default function Counter() {
  const counter = useMappedState(useCallback(state => state.counter, []));
  const dispatch = useDispatch();

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <div>
      <button onClick={() => { dispatch({ type: INCREMENT }) }}>+</button>
      <p>Counter: {counter}</p>
      <button onClick={decrement}>-</button>
    </div>
  );
}
