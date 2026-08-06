const RoleService = require("../services/role.service");

// Lấy tất cả Role
exports.findAll = async (req, res) => {
  try {
    const roles = await RoleService.findAll();
    res.json(roles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Role theo ID
exports.findOne = async (req, res) => {
  try {
    const role = await RoleService.findOne(req.params.id);

    if (!role) {
      return res.status(404).json({
        message: "Role not found",
      });
    }

    res.json(role);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Role
exports.create = async (req, res) => {
  try {
    const id = await RoleService.create(req.body);

    res.status(201).json({
      message: "Role created successfully",
      role_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Role
exports.update = async (req, res) => {
  try {
    const affectedRows = await RoleService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Role not found",
      });
    }

    res.json({
      message: "Role updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Role
exports.delete = async (req, res) => {
  try {
    const affectedRows = await RoleService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Role not found",
      });
    }

    res.json({
      message: "Role deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
