import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div
      style={{
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}
    >
      <h2>Counter Exercise - Solution</h2>
      <h1 style={{ fontSize: '40px', color: '#2d6cdf' }}>{count}</h1>

      <div style={{ marginTop: '20px' }}>
        <button
          onClick={handleIncrement}
          style={{
            margin: '0 5px',
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          + เพิ่ม
        </button>
        <button
          onClick={handleDecrement}
          style={{
            margin: '0 5px',
            padding: '8px 16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          - ลด
        </button>
        <button
          onClick={handleReset}
          style={{
            margin: '0 5px',
            padding: '8px 16px',
            backgroundColor: '#ff9800',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
