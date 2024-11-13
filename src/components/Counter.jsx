import React from 'react';
import useCounterStore from '../store/useCounterStore';

const Counter = () => {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className="max-w-xs mx-auto p-6 bg-white shadow rounded text-center">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex space-x-4 justify-center">
        <button
          onClick={increase}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
