const BookService = require("../services/book.service");

// Lấy tất cả sách
exports.findAll = async (req, res) => {
  try {
    const books = await BookService.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 sách theo ID
exports.findOne = async (req, res) => {
  try {
    const book = await BookService.findOne(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm sách
exports.create = async (req, res) => {
  try {
    const id = await BookService.create(req.body);

    res.status(201).json({
      message: "Book created successfully",
      book_id: id,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Cập nhật sách
exports.update = async (req, res) => {
  try {
    const affectedRows = await BookService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    res.json({
      message: "Book updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa sách
exports.delete = async (req, res) => {
  try {
    const affectedRows = await BookService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "Book deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
