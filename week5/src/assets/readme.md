การทำงานของโค้ด

Import React

import React from 'react';


เพื่อให้ใช้ React Component และ hook ได้

สร้าง Component

const Counter: React.FC = () => { ... }


Component Counter จะเก็บ state ของตัวเลขและปุ่มต่าง ๆ

State ของ Counter

const [count, setCount] = React.useState(0);


count → ค่าปัจจุบัน

setCount → ฟังก์ชันสำหรับเปลี่ยนค่า count

เริ่มต้นด้วย 0

Render UI

<div>
    <h2>Counter Exercise</h2>
    <p>your current count: {count}</p>
    <button>+</button>
    <button>-</button>
    <button>Reset</button>
</div>


แสดงค่าปัจจุบัน {count}

ปุ่มเพิ่ม/ลด/รีเซ็ต

การเพิ่ม/ลด/รีเซ็ต (TODO)

เพิ่ม: setCount(count + 1)

ลด: setCount(count - 1)

รีเซ็ต: setCount(0)

สรุป: Counter Component จะเก็บค่าใน state และปรับเปลี่ยนค่าเมื่อผู้ใช้กดปุ่ม โดย React จะ render UI ใหม่อัตโนมัติเมื่อ state เปลี่ยน

Workshop 5.2 — Form Component
สิ่งที่ต้องทำ

มี input field สำหรับกรอกชื่อและอีเมล

แสดงข้อมูลที่กรอกแบบ real-time

ปุ่ม Submit เพื่อแสดง alert ข้อมูล

ปุ่ม Clear เพื่อล้างข้อมูล

การทำงานของโค้ด

Import React และสร้าง interface

import React from 'react';

interface FormData {
    name: string;
    email: string;
}


Interface FormData ใช้กำหนด type ของข้อมูลใน form

State สำหรับ form

const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: ''
});


เก็บข้อมูลที่กรอกลงใน input field

setFormData ใช้เปลี่ยนค่า

Handle Input Change

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
}


ทุกครั้งที่ผู้ใช้พิมพ์ใน input

State formData จะอัปเดตแบบ real-time

Submit และ Clear

const handleSubmit = () => {
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
}

const handleClear = () => {
    setFormData({name: '', email: ''});
}


Submit → แสดงข้อมูลผ่าน alert

Clear → ล้างข้อมูล input

Render UI

<input name="name" value={formData.name} onChange={handleChange} />
<input name="email" value={formData.email} onChange={handleChange} />
<button onClick={handleSubmit}>Submit</button>
<button onClick={handleClear}>Clear</button>


Input ทั้งสอง field จะอัปเดตค่าแบบ real-time

ปุ่ม Submit / Clear จะเรียก function ตามที่กำหนด

สรุป: Form Component จะใช้ state เก็บข้อมูล input, อัปเดตแบบ real-time, ส่งข้อมูลผ่าน alert และสามารถล้างข้อมูลได้ง่าย