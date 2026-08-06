<template>
  <footer class="footer">
    <div>
      <h3>BookStore</h3>

      <p>Find your next favorite book.</p>
    </div>

    <div>
      <h3>Quick Links</h3>

      <p>Home</p>

      <p>Books</p>

      <p>Categories</p>
    </div>

    <div>
      <h3>Support</h3>

      <p>FAQ</p>

      <p>Contact</p>

      <p>Policy</p>
    </div>

    <div>
      <h3>Follow Us</h3>

      <p>Facebook</p>

      <p>Instagram</p>

      <p>Github</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 40px;

  background: #0f172a;

  color: white;

  padding: 70px 80px;
}

.footer h3 {
  margin-bottom: 20px;
}

.footer p {
  margin-bottom: 10px;

  color: #cbd5e1;
}
</style>
