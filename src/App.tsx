import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import {
  increment,
  decrement,
  addAmount,
  addIfOdd,
  // incrementAsync,
} from './features/counter/counterSlice';
import type { RootState } from './app/store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState<number>(2);

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-y-12 bg-[#242526]">
      <h1 className="font-semibold text-white">Counter with Redux Toolkit</h1>
      <div className="flex items-center">
        <button
          className="border-0 bg-sky-500 text-2xl text-white focus:outline-0"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="mx-7 min-w-[80px] text-center text-6xl font-extrabold text-white">
          {count}
        </span>
        <button
          className="border-0 bg-sky-500 text-2xl text-white focus:outline-0"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className="flex gap-x-3">
        <input
          className="w-16 p-[2px] text-center text-3xl focus:outline-0"
          value={amount || ''}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button
          className="bg-sky-500 text-2xl capitalize text-white focus:outline-0"
          onClick={() => dispatch(addAmount(amount))}
        >
          Add amount
        </button>
        {/* <button
          className="bg-sky-500 text-2xl capitalize text-white focus:outline-0"
          onClick={() => dispatch(incrementAsync(amount))}
        >
          Add async
        </button> */}
        <button
          className="bg-sky-500 text-2xl capitalize text-white focus:outline-0"
          onClick={() => dispatch(addIfOdd(amount))}
        >
          Add if odd
        </button>
      </div>
    </section>
  );
}

export default App;
