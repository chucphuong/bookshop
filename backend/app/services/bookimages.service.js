const db = require("../config/db");

// Lấy tất cả hình ảnh
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM book_images");
  return rows;
};

// Lấy hình ảnh theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM book_images WHERE image_id = ?",
    [id],
  );

  return rows[0];
};

// Thêm hình ảnh
exports.create = async (image) => {
  const [result] = await db.query(
    `INSERT INTO book_images
    (
      book_id,
      image_url,
      is_main
    )
    VALUES (?, ?, ?)`,
    [image.book_id, image.image_url, image.is_main],
  );
  return result.insertId;
};

// Cập nhật hình ảnh
exports.update = async (id, image) => {
  const [result] = await db.query(
    `UPDATE book_images
     SET
        book_id = ?,
        image_url = ?,
        is_main = ?
     WHERE image_id = ?`,
    [image.book_id, image.image_url, image.is_main, id],
  );
  return result.affectedRows;
};

// Xóa hình ảnh
exports.delete = async (id) => {
  const [result] = await db.query(
    "DELETE FROM book_images WHERE image_id = ?",
    [id],
  );
  return result.affectedRows;
};
