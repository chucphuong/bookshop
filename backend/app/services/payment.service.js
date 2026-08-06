const db = require("../config/db");

// Lấy tất cả thanh toán
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM payments");
  return rows;
};

// Lấy thanh toán theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query("SELECT * FROM payments WHERE payment_id = ?", [
    id,
  ]);

  return rows[0];
};

// Thêm thanh toán
exports.create = async (payment) => {
  const [result] = await db.query(
    `INSERT INTO payments
    (
      order_id,
      payment_method,
      payment_status,
      payment_date
    )
    VALUES (?, ?, ?, ?)`,
    [
      payment.order_id,
      payment.payment_method,
      payment.payment_status,
      payment.payment_date,
    ],
  );
  return result.insertId;
};

// Cập nhật thanh toán
exports.update = async (id, payment) => {
  const [result] = await db.query(
    `UPDATE payments
     SET
        order_id = ?,
        payment_method = ?,
        payment_status = ?,
        payment_date = ?
     WHERE payment_id = ?`,
    [
      payment.order_id,
      payment.payment_method,
      payment.payment_status,
      payment.payment_date,
      id,
    ],
  );
  return result.affectedRows;
};

// Xóa thanh toán
exports.delete = async (id) => {
  const [result] = await db.query("DELETE FROM payments WHERE payment_id = ?", [
    id,
  ]);
  return result.affectedRows;
};
