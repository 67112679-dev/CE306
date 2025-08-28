// สร้าง Array เก็บสินค้า products
let products = [
    { price: 100, discount: 10 },   // ส่วนลด 10%
    { price: 200, discount: 5 },    // ส่วนลด 5%
    { price: 50, discount: 0 },     // ไม่มีส่วนลด
    { price: 500, discount: 20 },   // ส่วนลด 20%
    { price: 300, discount: 15 }    // ส่วนลด 15%
];

// เขียนฟังก์ชัน calculateTotal
function calculateTotal() {
    let total = 0;

    // ใช้ forEach วนลูปสินค้าแต่ละชิ้น
    products.forEach(function(product, index) {
        // คำนวณราคาหลังหักส่วนลด
        let discountAmount = product.price * (product.discount / 100);
        let finalPrice = product.price - discountAmount;

        // แสดงผลราคาหลังหักส่วนลดของแต่ละชิ้น
        console.log(`Product [${index + 1}] price after discount: $${finalPrice.toFixed(2)}`);

        // บวกเข้าราคารวม
        total += finalPrice;
    });

    // แสดงผลรวมทั้งหมด
    console.log(`Total price after discount: $${total.toFixed(2)}`);
}

// เรียกใช้งานฟังก์ชัน
calculateTotal();
