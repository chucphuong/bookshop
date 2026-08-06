const PaymentService = require("../services/payment.service");

// Lấy tất cả Payment
exports.findAll = async (req, res) => {
  try {
    const payments = await PaymentService.findAll();
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Payment theo ID
exports.findOne = async (req, res) => {
  try {
    const payment = await PaymentService.findOne(req.params.id);

    if (!payment) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    res.json(payment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Payment
exports.create = async (req, res) => {
  try {
    const id = await PaymentService.create(req.body);

    res.status(201).json({
      message: "Payment created successfully",
      payment_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Payment
exports.update = async (req, res) => {
  try {
    const affectedRows = await PaymentService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    res.json({
      message: "Payment updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Payments
exports.delete = async (req, res) => {
  try {
    const affectedRows = await PaymentService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    res.json({
      message: "Payment deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
