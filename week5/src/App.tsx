import React from 'react';
import Counter from './wks_5';
import UserForm from './wks_5_2';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
        Workshop 5 - React + TypeScript
      </h1>


      <div
        style={{
          marginBottom: '40px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <Counter />
      </div>


      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <UserForm />
      </div>
    </div>
  );
};

export default App;
