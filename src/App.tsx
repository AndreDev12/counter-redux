import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './features/counter/counterSlice';
import type { RootState } from './app/store';

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const disptach = useDispatch();

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-y-12">
      <h1 className="font-semibold text-indigo-800">
        Counter with Redux Toolkit
      </h1>
      <div className="flex items-center">
        <button
          className="border-0 bg-sky-500 text-3xl text-indigo-800"
          onClick={() => disptach(decrement())}
        >
          -
        </button>
        <span className="mx-7 text-5xl font-extrabold">{count}</span>
        <button
          className="border-0 bg-sky-500 text-3xl text-indigo-800"
          onClick={() => disptach(increment())}
        >
          +
        </button>
      </div>
    </section>
  );
}

export default App;
