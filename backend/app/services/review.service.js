const db = require("../config/db");

// Lấy tất cả đánh giá
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM reviews");
  return rows;
};

// Lấy đánh giá theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query("SELECT * FROM reviews WHERE review_id = ?", [
    id,
  ]);

  return rows[0];
};

// Thêm đánh giá
exports.create = async (review) => {
  const [result] = await db.query(
    `INSERT INTO reviews
    (
      user_id,
      book_id,
      rating,
      comment
    )
    VALUES (?, ?, ?, ?)`,
    [review.user_id, review.book_id, review.rating, review.comment],
  );
  return result.insertId;
};

// Cập nhật đánh giá
exports.update = async (id, review) => {
  const [result] = await db.query(
    `UPDATE reviews
     SET
        user_id = ?,
        book_id = ?,
        rating = ?,
        comment = ?
     WHERE review_id = ?`,
    [review.user_id, review.book_id, review.rating, review.comment, id],
  );
  return result.affectedRows;
};

// Xóa đánh giá
exports.delete = async (id) => {
  const [result] = await db.query("DELETE FROM reviews WHERE review_id = ?", [
    id,
  ]);
  return result.affectedRows;
};
