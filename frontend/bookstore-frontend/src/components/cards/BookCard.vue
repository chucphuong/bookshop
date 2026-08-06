<script setup>
import { ShoppingCart, Heart } from "lucide-vue-next";

defineProps({
  book: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="book-card">
    <div class="book-card__image-wrap">
      <span v-if="book.discount" class="discount">
        -{{ book.discount }}%
      </span>

      <button class="wishlist-btn" aria-label="Thêm vào yêu thích">
        <Heart :size="18" />
      </button>

      <img
        class="book-card__image"
        :src="book.image"
        :alt="book.title"
      />
    </div>

    <div class="book-card__content">
      <div class="rating">
        <span>★★★★★</span>
        <small>{{ book.rating }}</small>
      </div>

      <h3>{{ book.title }}</h3>

      <p class="author">{{ book.author }}</p>

      <div class="book-card__bottom">
        <div class="price">
          <strong>
            {{ Number(book.price).toLocaleString("vi-VN") }}đ
          </strong>

          <del v-if="book.oldPrice">
            {{ Number(book.oldPrice).toLocaleString("vi-VN") }}đ
          </del>
        </div>

        <button class="cart-btn" aria-label="Thêm vào giỏ hàng">
          <ShoppingCart :size="18" />
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped>
.book-card {
  overflow: hidden;
  background: white;
  border: 1px solid #edf1fb;
  border-radius: 18px;
  box-shadow: 0 8px 24px rgba(65, 88, 145, 0.08);
  transition: 0.3s ease;
}

.book-card:hover {
  transform: translateY(-7px);
  box-shadow: 0 18px 38px rgba(65, 88, 145, 0.15);
}

.book-card__image-wrap {
  height: 300px;
  position: relative;
  overflow: hidden;
  background: #f4f7ff;
}

.book-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.book-card:hover .book-card__image {
  transform: scale(1.05);
}

.discount {
  padding: 8px 12px;
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 2;
  color: white;
  background: var(--primary);
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
}

.wishlist-btn {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;
  color: var(--primary);
  background: rgba(255, 255, 255, 0.92);
  border-radius: 50%;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.wishlist-btn:hover {
  color: white;
  background: var(--primary);
}

.book-card__content {
  padding: 18px;
}

.rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.rating span {
  color: #f5a623;
  font-size: 13px;
  letter-spacing: 1px;
}

.rating small {
  color: var(--text-light);
}

.book-card h3 {
  min-height: 48px;
  color: #142b55;
  font-size: 17px;
  line-height: 1.4;
}

.author {
  margin-top: 7px;
  color: var(--text-light);
  font-size: 13px;
}

.book-card__bottom {
  margin-top: 16px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.price {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.price strong {
  color: #142b55;
  font-size: 18px;
}

.price del {
  color: #9aa6bd;
  font-size: 12px;
}

.cart-btn {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  color: var(--primary);
  background: #edf2ff;
  border-radius: 10px;
  transition: var(--transition);
}

.cart-btn:hover {
  color: white;
  background: var(--primary);
}

@media (max-width: 600px) {
  .book-card__image-wrap {
    height: 260px;
  }
}
</style>