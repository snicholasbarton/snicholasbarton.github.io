import { useState } from 'react';
import styles from './Counter.module.css';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Interactive Counter</h3>
      <p className={styles.description}>
        This is a live React component embedded directly in this MDX blog post.
      </p>
      <div className={styles.controls}>
        <button
          onClick={() => setCount(count - 1)}
          className={styles.buttonMinus}
        >
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className={styles.buttonPlus}
        >
          +
        </button>
      </div>
    </div>
  );
};
