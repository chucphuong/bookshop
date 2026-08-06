const db = require("../config/db");

// Lấy tất cả danh sách yêu thích
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM wishlist");
  return rows;
};

// Lấy một mục yêu thích theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM wishlist WHERE wishlist_id = ?",
    [id],
  );

  return rows[0];
};

// Thêm vào danh sách yêu thích
exports.create = async (wishlist) => {
  const [result] = await db.query(
    `INSERT INTO wishlist
    (
      user_id,
      book_id
    )
    VALUES (?, ?)`,
    [wishlist.user_id, wishlist.book_id],
  );
  return result.insertId;
};

// Cập nhật mục yêu thích
exports.update = async (id, wishlist) => {
  const [result] = await db.query(
    `UPDATE wishlist
     SET
        user_id = ?,
        book_id = ?
     WHERE wishlist_id = ?`,
    [wishlist.user_id, wishlist.book_id, id],
  );
  return result.affectedRows;
};

// Xóa khỏi danh sách yêu thích
exports.delete = async (id) => {
  const [result] = await db.query(
    "DELETE FROM wishlist WHERE wishlist_id = ?",
    [id],
  );
  return result.affectedRows;
};
