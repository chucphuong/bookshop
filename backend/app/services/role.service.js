const db = require("../config/db");

// Lấy tất cả vai trò
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM roles");
  return rows;
};

// Lấy vai trò theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query("SELECT * FROM roles WHERE role_id = ?", [id]);

  return rows[0];
};

// Thêm vai trò
exports.create = async (role) => {
  const [result] = await db.query(
    `INSERT INTO roles
    (
      role_name
    )
    VALUES (?)`,
    [role.role_name],
  );
  return result.insertId;
};

// Cập nhật vai trò
exports.update = async (id, role) => {
  const [result] = await db.query(
    `UPDATE roles
     SET
        role_name = ?
     WHERE role_id = ?`,
    [role.role_name, id],
  );
  return result.affectedRows;
};

// Xóa vai trò
exports.delete = async (id) => {
  const [result] = await db.query("DELETE FROM roles WHERE role_id = ?", [id]);
  return result.affectedRows;
};
