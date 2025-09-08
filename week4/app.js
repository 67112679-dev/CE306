const fs = require("fs");

// -------------------- Load Users --------------------
function loadUsers() {
  try {
    const data = fs.readFileSync("./users.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("❌ ไม่สามารถโหลดไฟล์ users.json ได้:", err.message);
    return [];
  }
}

// -------------------- Functions --------------------
function renderSkillTag(skill) {
  return skill.level ? `${skill.name} (${skill.level})` : skill.name;
}

function renderUserProfileCard(user) {
  console.log("=================================");
  console.log(`👤 Name: ${user.name}`);
  console.log(`📧 Email: ${user.email}`);
  console.log(`🌐 Status: ${user.isOnline ? "ออนไลน์ ✅" : "ออฟไลน์ ❌"}`);
  console.log("🛠 Skills:");
  user.skills.forEach((skill) => {
    console.log("   - " + renderSkillTag(skill));
  });
  console.log("👉 [ดูรายละเอียด]");
  console.log("=================================\n");
}

function onViewDetails(userId) {
  console.log("🔎 ดูรายละเอียดผู้ใช้ ID:", userId, "\n");
}

// -------------------- App --------------------
function App() {
  const users = loadUsers();
  if (users.length === 0) {
    console.log("❌ ไม่มีข้อมูลผู้ใช้");
    return;
  }

  console.log("===== User Profile Cards =====\n");
  users.forEach((user) => {
    renderUserProfileCard(user);
    // simulate "click" ดูรายละเอียด
    onViewDetails(user.id);
  });
}

// Run App
App();
