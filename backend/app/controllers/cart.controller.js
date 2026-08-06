const CartService = require("../services/cart.service");

// Lấy tất cả Cart
exports.findAll = async (req, res) => {
  try {
    const carts = await CartService.findAll();
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Cart theo ID
exports.findOne = async (req, res) => {
  try {
    const cart = await CartService.findOne(req.params.id);

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Cart
exports.create = async (req, res) => {
  try {
    const id = await CartService.create(req.body);

    res.status(201).json({
      message: "Cart created successfully",
      cart_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Cart
exports.update = async (req, res) => {
  try {
    const affectedRows = await CartService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }
    res.json({
      message: "Cart updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Carts
exports.delete = async (req, res) => {
  try {
    const affectedRows = await CartService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    res.json({
      message: "Cart deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
