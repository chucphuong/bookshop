const OrderService = require("../services/order.service");

// Lấy tất cả Order
exports.findAll = async (req, res) => {
  try {
    const orders = await OrderService.findAll();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Order theo ID
exports.findOne = async (req, res) => {
  try {
    const order = await OrderService.findOne(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Order
exports.create = async (req, res) => {
  try {
    const id = await OrderService.create(req.body);

    res.status(201).json({
      message: "Order created successfully",
      order_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Order
exports.update = async (req, res) => {
  try {
    const affectedRows = await OrderService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json({
      message: "Order updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Order
exports.delete = async (req, res) => {
  try {
    const affectedRows = await OrderService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json({
      message: "Order deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
