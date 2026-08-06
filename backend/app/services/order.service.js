const db = require("../config/db");

// Lấy tất cả đơn hàng
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM orders");
  return rows;
};

// Lấy đơn hàng theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query("SELECT * FROM orders WHERE order_id = ?", [
    id,
  ]);

  return rows[0];
};

// Thêm đơn hàng
exports.create = async (order) => {
  const [result] = await db.query(
    `INSERT INTO orders
    (
      user_id,
      shipping_address,
      total_amount,
      status
    )
    VALUES (?, ?, ?, ?)`,
    [order.user_id, order.shipping_address, order.total_amount, order.status],
  );
  return result.insertId;
};

// Cập nhật đơn hàng
exports.update = async (id, order) => {
  const [result] = await db.query(
    `UPDATE orders
     SET
        user_id = ?,
        shipping_address = ?,
        total_amount = ?,
        status = ?
     WHERE order_id = ?`,
    [
      order.user_id,
      order.shipping_address,
      order.total_amount,
      order.status,
      id,
    ],
  );
  return result.affectedRows;
};

// Xóa đơn hàng
exports.delete = async (id) => {
  const [result] = await db.query("DELETE FROM orders WHERE order_id = ?", [
    id,
  ]);
  return result.affectedRows;
};
