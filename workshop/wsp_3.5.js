// สร้าง Array ชื่อ students ที่เก็บข้อมูลนักเรียนอย่างน้อย 6 คน
let students = [
    { name: "NUT", score: 85 },
    { name: "BoOM", score: 55 },
    { name: "BOTH", score: 70 },
    { name: "Halry", score: 40 },
    { name: "EVE", score: 90 },
    { name: "Frank", score: 60 }
];

// เขียนฟังก์ชัน filterPassedStudents
function filterPassedStudents(minScore) {
    // ใช้ forEach วนลูปเช็คทีละคน
    students.forEach(function(student) {
        if (student.score >= minScore) {
            // แสดงผลนักเรียนที่ผ่านเกณฑ์
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    });
}

// เรียกใช้งานฟังก์ชัน โดยกำหนดเกณฑ์ผ่าน = 60
filterPassedStudents(60);
