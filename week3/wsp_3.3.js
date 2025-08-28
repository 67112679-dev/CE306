// สร้าง Array ชื่อ students เก็บข้อมูลนักศึกษาอย่างน้อย 3 คน
let students = [
    { name: "NUT", grade: "A" },
    { name: "JAB", grade: "B+" },
    { name: "FLUCK", grade: "C" }
];

// ใช้ forEach แสดงผลชื่อและเกรดของนักศึกษาแต่ละคน
students.forEach(function(student, index) {
    console.log(`Student [${index}]: Name: ${student.name}, Grade: ${student.grade}`);
});

// ฟังก์ชัน showStudentCount แสดงจำนวนทั้งหมดของนักศึกษา
function showStudentCount() {
    console.log("Total students: " + students.length);
}

// เรียกใช้งานฟังก์ชัน
showStudentCount();
