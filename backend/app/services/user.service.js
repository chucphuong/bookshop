const db = require("../config/db");

// Lấy tất cả người dùng
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
};

// Lấy người dùng theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query("SELECT * FROM users WHERE user_id = ?", [id]);

  return rows[0];
};

// Thêm người dùng
exports.create = async (user) => {
  const [result] = await db.query(
    `INSERT INTO users
    (
      full_name,
      email,
      password,
      phone,
      address,
      role_id
    )
    VALUES (?, ?, ?, ?, ?, ?)`,
    [
      user.full_name,
      user.email,
      user.password,
      user.phone,
      user.address,
      user.role_id,
    ],
  );
  return result.insertId;
};

// Cập nhật người dùng
exports.update = async (id, user) => {
  const [result] = await db.query(
    `UPDATE users
     SET
        full_name = ?,
        email = ?,
        password = ?,
        phone = ?,
        address = ?,
        role_id = ?
     WHERE user_id = ?`,
    [
      user.full_name,
      user.email,
      user.password,
      user.phone,
      user.address,
      user.role_id,
      id,
    ],
  );
  return result.affectedRows;
};

// Xóa người dùng
exports.delete = async (id) => {
  const [result] = await db.query("DELETE FROM users WHERE user_id = ?", [id]);
  return result.affectedRows;
};
