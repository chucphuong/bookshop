<script setup>
defineProps({
  book: {
    type: Object,
    required: true,
  },

  rank: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <article class="trending-item">
    <span class="rank">{{ rank }}</span>

    <img
      class="book-image"
      :src="book.image"
      :alt="book.title"
    />

    <div class="book-info">
      <h3>{{ book.title }}</h3>

      <p>{{ book.author }}</p>

      <div class="book-meta">
        <span class="rating">★ {{ book.rating }}</span>

        <strong>
          {{ Number(book.price).toLocaleString("vi-VN") }}đ
        </strong>
      </div>
    </div>
  </article>
</template>

<style scoped>
.trending-item {
  min-width: 0;
  display: grid;
  grid-template-columns: 30px 76px minmax(0, 1fr);
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  background: rgba(255, 255, 255, 0.68);
  border-right: 1px solid #dde6fb;
  transition: var(--transition);
}

.trending-item:hover {
  background: white;
  transform: translateY(-3px);
}

.rank {
  width: 25px;
  height: 25px;
  display: grid;
  place-items: center;
  color: white;
  background: var(--primary);
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
}

.book-image {
  width: 76px;
  height: 105px;
  object-fit: cover;
  border-radius: 7px;
  box-shadow: 0 8px 18px rgba(57, 79, 128, 0.16);
}

.book-info {
  min-width: 0;
}

.book-info h3 {
  display: -webkit-box;
  overflow: hidden;
  color: #142b55;
  font-size: 15px;
  line-height: 1.45;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.book-info p {
  margin-top: 6px;
  overflow: hidden;
  color: var(--text-light);
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.book-meta {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 12px;
}

.rating {
  color: #f59e0b;
}

.book-meta strong {
  color: #53637f;
  font-size: 12px;
}

@media (max-width: 560px) {
  .trending-item {
    border-right: none;
    border-bottom: 1px solid #dde6fb;
  }
}
</style>