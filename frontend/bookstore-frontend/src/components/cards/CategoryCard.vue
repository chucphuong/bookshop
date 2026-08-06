<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article class="category-card">
    <img :src="image" :alt="title" />

    <div class="category-overlay"></div>

    <h3>{{ title }}</h3>
  </article>
</template>

<style scoped>
.category-card {
  min-height: 210px;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: var(--transition);
}

.category-card:hover {
  transform: translateY(-7px);
  box-shadow: var(--shadow-lg);
}

.category-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;
}

.category-card:hover img {
  transform: scale(1.08);
}

.category-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 23, 42, 0.78),
    rgba(15, 23, 42, 0.08)
  );
}

.category-card h3 {
  position: absolute;
  left: 20px;
  bottom: 18px;
  z-index: 2;
  color: white;
  font-size: 20px;
  font-weight: 600;
}
</style>