<script setup>
import {
  Search,
  ShoppingCart,
  UserRound,
  BookOpen,
  Menu,
  X,
} from "lucide-vue-next";

import { ref } from "vue";

const menuOpen = ref(false);
</script>

<template>
  <header class="app-header">
    <div class="container header-inner">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <span class="logo-icon">
          <BookOpen :size="25" stroke-width="2.4" />
        </span>

        <span>Books</span>
      </RouterLink>

      <!-- Desktop navigation -->
      <nav class="navigation">
        <RouterLink to="/">Trang chủ</RouterLink>
        <RouterLink to="/books">Sách</RouterLink>
        <a href="#categories">Danh mục</a>
        <a href="#bestsellers">Sách bán chạy</a>
        <a href="#blog">Bài viết</a>
      </nav>

      <!-- Actions -->
      <div class="header-actions">
        <button class="action-button" aria-label="Tìm kiếm">
          <Search :size="21" />
        </button>

        <RouterLink
          to="/cart"
          class="action-button cart-button"
          aria-label="Giỏ hàng"
        >
          <ShoppingCart :size="22" />

          <span class="cart-count">2</span>
        </RouterLink>

        <RouterLink to="/login" class="user-button" aria-label="Tài khoản">
          <UserRound :size="18" />
        </RouterLink>

        <button
          class="mobile-menu-button"
          aria-label="Open menu"
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="25" />
          <Menu v-else :size="25" />
        </button>
      </div>
    </div>

    <!-- Mobile navigation -->
    <nav v-if="menuOpen" class="mobile-navigation">
      <RouterLink to="/" @click="menuOpen = false"> Trang chủ </RouterLink>

      <RouterLink to="/books" @click="menuOpen = false"> Sách </RouterLink>

      <a href="#categories" @click="menuOpen = false"> Danh mục </a>

      <a href="#bestsellers" @click="menuOpen = false"> Sách bán chạy </a>

      <a href="#blog" @click="menuOpen = false"> Bài viết </a>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  background: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid rgba(91, 124, 250, 0.08);
  backdrop-filter: blur(16px);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-inner {
  min-height: 82px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 30px;
}

.logo {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--primary);
  font-size: 25px;
  font-weight: 700;
}

.logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navigation {
  display: flex;
  align-items: center;
  gap: 36px;
}

.navigation a {
  color: #30446d;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  padding: 30px 0;
  transition: var(--transition);
}

.navigation a::after {
  content: "";
  width: 0;
  height: 2px;
  background: var(--primary);
  border-radius: 99px;
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  transition: var(--transition);
}

.navigation a:hover,
.navigation a.router-link-active {
  color: var(--primary);
}

.navigation a:hover::after,
.navigation a.router-link-active::after {
  width: 100%;
}

.header-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
}

.action-button,
.user-button,
.mobile-menu-button {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #1f3764;
  border-radius: 50%;
  transition: var(--transition);
}

.action-button:hover,
.user-button:hover,
.mobile-menu-button:hover {
  color: var(--primary);
  background: var(--secondary);
}

.cart-button {
  position: relative;
}

.cart-count {
  min-width: 17px;
  height: 17px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: var(--primary);
  border: 2px solid white;
  border-radius: 20px;
  font-size: 9px;
  font-weight: 700;
  position: absolute;
  top: 1px;
  right: 0;
}

.user-button {
  width: 34px;
  height: 34px;
  color: var(--primary);
  background: #e8edff;
}

.mobile-menu-button {
  display: none;
}

.mobile-navigation {
  display: none;
}

@media (min-width: 1800px) {
  .header-inner {
    min-height: 92px;
  }

  .logo {
    font-size: 29px;
  }

  .navigation {
    gap: 46px;
  }

  .navigation a {
    font-size: 16px;
    padding: 35px 0;
  }

  .header-actions {
    gap: 20px;
  }

  .action-button {
    width: 44px;
    height: 44px;
  }
}

@media (max-width: 900px) {
  .header-inner {
    grid-template-columns: 1fr auto;
    min-height: 72px;
  }

  .navigation {
    display: none;
  }

  .mobile-menu-button {
    display: inline-flex;
  }

  .mobile-navigation {
    display: flex;
    flex-direction: column;
    padding: 10px 24px 22px;
    background: white;
    border-top: 1px solid var(--border);
  }

  .mobile-navigation a {
    padding: 13px 4px;
    color: #30446d;
    font-weight: 500;
    border-bottom: 1px solid #eef1f8;
  }
}

@media (max-width: 520px) {
  .header-actions {
    gap: 5px;
  }

  .header-actions > .action-button:first-child {
    display: none;
  }

  .logo {
    font-size: 21px;
  }
}
</style>
