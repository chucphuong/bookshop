const BookImageService = require("../services/bookimages.service");

// Lấy tất cả hình ảnh
exports.findAll = async (req, res, next) => {
  try {
    const images = await BookImageService.findAll();
    res.send(images);
  } catch (error) {
    next(error);
  }
};

// Lấy hình ảnh theo ID
exports.findOne = async (req, res, next) => {
  try {
    const image = await BookImageService.findOne(req.params.id);

    if (!image) {
      return res.status(404).send({
        message: "Image not found",
      });
    }

    res.send(image);
  } catch (error) {
    next(error);
  }
};

// Thêm hình ảnh
exports.create = async (req, res, next) => {
  try {
    const id = await BookImageService.create(req.body);

    res.send({
      message: "Image created successfully",
      image_id: id,
    });
  } catch (error) {
    next(error);
  }
};

// Cập nhật hình ảnh
exports.update = async (req, res, next) => {
  try {
    const affectedRows = await BookImageService.findOne(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    await BookImageService.update(req.params.id, req.body);

    res.send({
      message: "Image updated successfully",
    });
  } catch (error) {
    next(error);
  }
};

// Xóa hình ảnh
exports.delete = async (req, res, next) => {
  try {
    const affectedRows = await BookImageService.findOne(req.params.id);

    if (affectedRows === 0) {
      return res.status(404).json({
        message: "Image not found",
      });
    }

    await BookImageService.delete(req.params.id);

    res.send({
      message: "Image deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
