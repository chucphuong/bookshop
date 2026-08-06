const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const bookRouter = require("./app/routes/book.route");
const userRouter = require("./app/routes/user.route");
const authorRouter = require("./app/routes/author.route");
const categoryRouter = require("./app/routes/category.route");
const publisherRouter = require("./app/routes/publisher.route");
const reviewRouter = require("./app/routes/review.route");
const cartRouter = require("./app/routes/cart.route");
const wishlistRouter = require("./app/routes/wishlist.route");
const orderRouter = require("./app/routes/order.route");
const orderDetailRouter = require("./app/routes/orderdetail.route");
const paymentRouter = require("./app/routes/payment.route");
const roleRouter = require("./app/routes/role.route");
const bookImageRouter = require("./app/routes/bookimages.route");

app.use("/api/books", bookRouter);
app.use("/api/users", userRouter);
app.use("/api/authors", authorRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/publishers", publisherRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/cart", cartRouter);
app.use("/api/wishlist", wishlistRouter);
app.use("/api/orders", orderRouter);
app.use("/api/orderdetails", orderDetailRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/roles", roleRouter);
app.use("/api/bookimages", bookImageRouter);

module.exports = app;
