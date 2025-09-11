import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    alert(`ชื่อ: ${form.name || 'ยังไม่ได้กรอก'}, อีเมล: ${form.email || 'ยังไม่ได้กรอก'}`);
  };

  const handleClear = () => {
    setForm({ name: '', email: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>User Form Exercise - Solution</h2>

      {/* input fields */}
      <div style={{ margin: '10px 0' }}>
        <label>ชื่อ:</label>
        <input
          type="text"
          name="name"
          placeholder="กรอกชื่อของคุณ"
          value={form.name}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '6px',
            marginTop: '4px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>
      <div style={{ margin: '10px 0' }}>
        <label>อีเมล:</label>
        <input
          type="email"
          name="email"
          placeholder="กรอกอีเมลของคุณ"
          value={form.email}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '6px',
            marginTop: '4px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
      </div>

      {/* ปุ่ม Submit และ Clear */}
      <div style={{ margin: '15px 0', textAlign: 'center' }}>
        <button
          onClick={handleSubmit}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Clear
        </button>
      </div>

      {/* แสดงข้อมูลแบบ real-time */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          border: '1px solid gray',
          backgroundColor: 'white',
          borderRadius: '6px',
        }}
      >
        <h4 style={{ textAlign: 'center', fontWeight: 'bold' }}>ข้อมูลปัจจุบัน:</h4>
        <p>ชื่อ: {form.name || 'ยังไม่ได้กรอก'}</p>
        <p>อีเมล: {form.email || 'ยังไม่ได้กรอก'}</p>
      </div>
    </div>
  );
};

export default UserForm;
