const db = require("../config/db");

// Lấy tất cả nhà xuất bản
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM publishers");
  return rows;
};

// Lấy nhà xuất bản theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM publishers WHERE publisher_id = ?",
    [id],
  );

  return rows[0];
};

// Thêm nhà xuất bản
exports.create = async (publisher) => {
  const [result] = await db.query(
    `INSERT INTO publishers
    (
      publisher_name,
      address,
      phone
    )
    VALUES (?, ?, ?)`,
    [publisher.publisher_name, publisher.address, publisher.phone],
  );
  return result.insertId;
};

// Cập nhật nhà xuất bản
exports.update = async (id, publisher) => {
  const [result] = await db.query(
    `UPDATE publishers
     SET
        publisher_name = ?,
        address = ?,
        phone = ?
     WHERE publisher_id = ?`,
    [publisher.publisher_name, publisher.address, publisher.phone, id],
  );
  return result.affectedRows;
};

// Xóa nhà xuất bản
exports.delete = async (id) => {
  const [result] = await db.query(
    "DELETE FROM publishers WHERE publisher_id = ?",
    [id],
  );
  return result.affectedRows;
};
