function calculateFinalPrice(productPrice, discountPercent) {
    // คำนวณราคาหลังหักส่วนลด
    let discountAmount = (productPrice * discountPercent) / 100;
    let finalPrice = productPrice - discountAmount;

    // ตรวจสอบเงื่อนไขตามโจทย์
    if (finalPrice <= 0) {
        finalPrice = 0;
    } else if (finalPrice <= 500) {
        finalPrice += 50; // ค่าธรรมเนียมการจัดส่ง 50 บาท
    } else if (finalPrice > 500) {
        finalPrice = finalPrice - (finalPrice * 0.10); // ลดเพิ่มอีก 10%
    }

    return finalPrice;
}

// ตัวอย่างการใช้งาน
let price = 1000;       // ราคาสินค้า
let discount = 20;      // ส่วนลด (%)
let result = calculateFinalPrice(price, discount);

console.log("ราคาสุดท้ายที่ต้องจ่ายคือ: " + result + " บาท");
