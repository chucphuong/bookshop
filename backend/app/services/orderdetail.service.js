const db = require("../config/db");

// Lấy tất cả chi tiết đơn hàng
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM order_details");
  return rows;
};

// Lấy chi tiết đơn hàng theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM order_details WHERE order_detail_id = ?",
    [id],
  );

  return rows[0];
};

// Thêm chi tiết đơn hàng
exports.create = async (orderDetail) => {
  const [result] = await db.query(
    `INSERT INTO order_details
    (
      order_id,
      book_id,
      quantity,
      unit_price
    )
    VALUES (?, ?, ?, ?)`,
    [
      orderDetail.order_id,
      orderDetail.book_id,
      orderDetail.quantity,
      orderDetail.unit_price,
    ],
  );
  return result.insertId;
};

// Cập nhật chi tiết đơn hàng
exports.update = async (id, orderDetail) => {
  const [result] = await db.query(
    `UPDATE order_details
     SET
        order_id = ?,
        book_id = ?,
        quantity = ?,
        unit_price = ?
     WHERE order_detail_id = ?`,
    [
      orderDetail.order_id,
      orderDetail.book_id,
      orderDetail.quantity,
      orderDetail.unit_price,
      id,
    ],
  );
  return result.affectedRows;
};

// Xóa chi tiết đơn hàng
exports.delete = async (id) => {
  const [result] = await db.query(
    "DELETE FROM order_details WHERE order_detail_id = ?",
    [id],
  );
  return result.affectedRows;
};
