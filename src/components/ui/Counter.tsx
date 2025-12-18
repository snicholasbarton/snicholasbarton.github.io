import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-gray-900 my-4">
      <h3 className="text-lg font-bold mb-2">Interactive Counter</h3>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
        This is a live React component embedded directly in this MDX blog post.
      </p>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          -
        </button>
        <span className="font-mono text-xl">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};
