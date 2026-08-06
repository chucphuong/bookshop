const db = require("../config/db");

// Lấy tất cả sách
exports.findAll = async () => {
  const [rows] = await db.query("SELECT * FROM books WHERE status = 'active'");

  return rows;
};
// Lấy 1 sách theo ID
exports.findOne = async (id) => {
  const [rows] = await db.query("SELECT * FROM books WHERE book_id = ?", [id]);

  return rows[0];
};

// Thêm sách
exports.create = async (book) => {
  const [result] = await db.query(
    `INSERT INTO books
    (
      title,
      isbn,
      description,
      price,
      stock,
      publish_year,
      status,
      category_id,
      author_id,
      publisher_id
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      book.title,
      book.isbn,
      book.description,
      book.price,
      book.stock,
      book.publish_year,
      book.status,
      book.category_id,
      book.author_id,
      book.publisher_id,
    ],
  );

  return result.insertId;
};

// Cập nhật sách
exports.update = async (id, book) => {
  const [result] = await db.query(
    `UPDATE books
     SET
        title = ?,
        isbn = ?,
        description = ?,
        price = ?,
        stock = ?,
        publish_year = ?,
        status = ?,
        category_id = ?,
        author_id = ?,
        publisher_id = ?
     WHERE book_id = ?`,
    [
      book.title,
      book.isbn,
      book.description,
      book.price,
      book.stock,
      book.publish_year,
      book.status,
      book.category_id,
      book.author_id,
      book.publisher_id,
      id,
    ],
  );
  return result.affectedRows;
};

// Xóa sách
exports.delete = async (id) => {
  const [result] = await db.query(
    "UPDATE books SET status='inactive' WHERE book_id=?",
    [id],
  );

  return result.affectedRows;
};
