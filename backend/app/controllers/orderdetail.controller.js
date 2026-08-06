const OrderdetailService = require("../services/orderdetail.service");

// Lấy tất cả Order Detail
exports.findAll = async (req, res) => {
  try {
    const orderdetails = await OrderdetailService.findAll();
    res.json(orderdetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Order Detail theo ID
exports.findOne = async (req, res) => {
  try {
    const orderdetail = await OrderdetailService.findOne(req.params.id);

    if (!orderdetail) {
      return res.status(404).json({
        message: "Order Detail not found",
      });
    }

    res.json(orderdetail);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Order Detail
exports.create = async (req, res) => {
  try {
    const id = await OrderdetailService.create(req.body);

    res.status(201).json({
      message: "Order Detail created successfully",
      order_detail_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Order Detail
exports.update = async (req, res) => {
  try {
    const affectedRows = await OrderdetailService.update(
      req.params.id,
      req.body,
    );

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Order Detail not found",
      });
    }

    res.json({
      message: "Order Detail updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Order Detail
exports.delete = async (req, res) => {
  try {
    const affectedRows = await OrderdetailService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Order Detail not found",
      });
    }

    res.json({
      message: "Order Detail deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
