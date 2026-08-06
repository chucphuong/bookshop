const WishlistService = require("../services/wishlist.service");

// Lấy tất cả Wishlist
exports.findAll = async (req, res) => {
  try {
    const wishlists = await WishlistService.findAll();
    res.json(wishlists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Lấy 1 Wishlist theo ID
exports.findOne = async (req, res) => {
  try {
    const wishlist = await WishlistService.findOne(req.params.id);

    if (!wishlist) {
      return res.status(404).json({
        message: "Wishlist not found",
      });
    }

    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Thêm Wishlist
exports.create = async (req, res) => {
  try {
    const id = await WishlistService.create(req.body);

    res.status(201).json({
      message: "Wishlist created successfully",
      wishlist_id: id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Cập nhật Wishlist
exports.update = async (req, res) => {
  try {
    const affectedRows = await WishlistService.update(req.params.id, req.body);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Wishlist not found",
      });
    }

    res.json({
      message: "Wishlist updated successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Xóa Wishlist
exports.delete = async (req, res) => {
  try {
    const affectedRows = await WishlistService.delete(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Wishlist not found",
      });
    }

    res.json({
      message: "Wishlist deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
