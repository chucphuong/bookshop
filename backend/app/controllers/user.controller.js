const UserService = require("../services/user.service");

// Lấy tất cả users
exports.findAll = async (req, res) => {
  try {
    const users = await UserService.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 users theo ID
exports.findOne = async (req, res) => {
  try {
    const user = await UserService.findOne(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm users
exports.create = async (req, res) => {
  try {
    const id = await UserService.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      user_id: id,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Cập nhật users
exports.update = async (req, res) => {
  try {
    const affectedRows = await UserService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Xóa users
exports.delete = async (req, res) => {
  try {
    const affectedRows = await UserService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};