const db = require("../config/db");

// Lấy tất cả giỏ hàng
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM cart");
  return rows;
};

// Lấy một mục trong giỏ hàng theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query("SELECT * FROM cart WHERE cart_id = ?", [id]);

  return rows[0];
};

// Thêm sản phẩm vào giỏ hàng
exports.create = async (cart) => {
  const [result] = await db.query(
    `INSERT INTO cart
    (
      user_id,
      book_id,
      quantity
    )
    VALUES (?, ?, ?)`,
    [cart.user_id, cart.book_id, cart.quantity],
  );
  return result.insertId;
};

// Cập nhật số lượng sản phẩm
exports.update = async (id, cart) => {
  const [result] = await db.query(
    `UPDATE cart
     SET
        user_id = ?,
        book_id = ?,
        quantity = ?
     WHERE cart_id = ?`,
    [cart.user_id, cart.book_id, cart.quantity, id],
  );
  return result.affectedRows;
};

// Xóa sản phẩm khỏi giỏ hàng
exports.delete = async (id) => {
  const [result] = await db.query("DELETE FROM cart WHERE cart_id = ?", [id]);
  return result.affectedRows;
};
