const db = require("../config/db");

// Lấy tất cả danh mục
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM categories");
  return rows;
};

// Lấy danh mục theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM categories WHERE category_id = ?",
    [id],
  );

  return rows[0];
};

// Thêm danh mục
exports.create = async (category) => {
  const [result] = await db.query(
    `INSERT INTO categories
    (
      category_name,
      description
    )
    VALUES (?, ?)`,
    [category.category_name, category.description],
  );
  return result.insertId;
};

// Cập nhật danh mục
exports.update = async (id, category) => {
  const [result] = await db.query(
    `UPDATE categories
     SET
        category_name = ?,
        description = ?
     WHERE category_id = ?`,
    [category.category_name, category.description, id],
  );
  return result.affectedRows;
};

// Xóa danh mục
exports.delete = async (id) => {
  const [result] = await db.query(
    "DELETE FROM categories WHERE category_id = ?",
    [id],
  );
  return result.affectedRows;
};
