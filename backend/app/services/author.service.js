const db = require("../config/db");

// Lấy tất cả tác giả
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM authors");
  return rows;
};

// Lấy tác giả theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query("SELECT * FROM authors WHERE author_id = ?", [
    id,
  ]);

  return rows[0];
};

// Thêm tác giả
exports.create = async (author) => {
  const [result] = await db.query(
    `INSERT INTO authors
    (
      author_name,
      biography
    )
    VALUES (?, ?)`,
    [author.author_name, author.biography],
  );
  return result.insertId;
};

// Cập nhật tác giả
exports.update = async (id, author) => {
  const [result] = await db.query(
    `UPDATE authors
     SET
        author_name = ?,
        biography = ?
     WHERE author_id = ?`,
    [author.author_name, author.biography, id],
  );
  return result.affectedRows;
};

// Xóa tác giả
exports.delete = async (id) => {
  const [result] = await db.query("DELETE FROM authors WHERE author_id = ?", [
    id,
  ]);
  return result.affectedRows;
};
