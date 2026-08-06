import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Books from "../views/Books.vue";
import BookDetail from "../views/BookDetail.vue";
import Cart from "../views/Cart.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/books",
    name: "books",
    component: Books,
  },
  {
    path: "/books/:id",
    name: "book-detail",
    component: BookDetail,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
