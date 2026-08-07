<script setup>
import {
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-vue-next";
</script>

<template>
  <footer class="footer">
    <div class="container footer-main">
      <!-- Thông tin cửa hàng -->
      <div class="footer-column footer-brand">
        <RouterLink to="/" class="footer-logo">
          <BookOpen :size="28" />
          <span>BookStore</span>
        </RouterLink>

        <p class="footer-description">
          Không gian mua sắm sách trực tuyến dành cho độc giả Việt Nam.
          Khám phá những cuốn sách hay và nhận hàng tận nơi trên toàn quốc.
        </p>

        <div class="social-list">
          <a href="#" aria-label="Facebook">
            <Facebook :size="19" />
          </a>

          <a href="#" aria-label="Instagram">
            <Instagram :size="19" />
          </a>

          <a href="#" aria-label="YouTube">
            <Youtube :size="19" />
          </a>
        </div>
      </div>

      <!-- Liên kết nhanh -->
      <div class="footer-column">
        <h3>Liên kết nhanh</h3>

        <nav class="footer-links">
          <RouterLink to="/">Trang chủ</RouterLink>
          <RouterLink to="/books">Tất cả sách</RouterLink>
          <a href="#categories">Danh mục sách</a>
          <a href="#bestsellers">Sách bán chạy</a>
          <a href="#blog">Bài viết</a>
        </nav>
      </div>

      <!-- Hỗ trợ -->
      <div class="footer-column">
        <h3>Hỗ trợ khách hàng</h3>

        <nav class="footer-links">
          <a href="#">Hướng dẫn mua hàng</a>
          <a href="#">Phương thức thanh toán</a>
          <a href="#">Chính sách giao hàng</a>
          <a href="#">Chính sách đổi trả</a>
          <a href="#">Câu hỏi thường gặp</a>
        </nav>
      </div>

      <!-- Liên hệ -->
      <div class="footer-column">
        <h3>Thông tin liên hệ</h3>

        <div class="contact-list">
          <div class="contact-item">
            <MapPin :size="19" />
            <span>123 Đường Sách, Quận 1, TP. Hồ Chí Minh</span>
          </div>

          <div class="contact-item">
            <Phone :size="19" />
            <a href="tel:0901234567">0901 234 567</a>
          </div>

          <div class="contact-item">
            <Mail :size="19" />
            <a href="mailto:hotro@bookstore.vn">
              hotro@bookstore.vn
            </a>
          </div>
        </div>

        <div class="payment-box">
          <span>Chấp nhận thanh toán</span>

          <div class="payment-list">
            <span>COD</span>
            <span>MoMo</span>
            <span>VNPay</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom__content">
        <p>
          © 2026 BookStore. Tất cả quyền được bảo lưu.
        </p>

        <div>
          <a href="#">Điều khoản sử dụng</a>
          <a href="#">Chính sách bảo mật</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  color: #d7e1f4;
  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(91, 124, 250, 0.2),
      transparent 30%
    ),
    #0f2348;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.35fr 0.8fr 1fr 1.15fr;
  gap: 55px;
  padding-top: 78px;
  padding-bottom: 65px;
}

.footer-logo {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 25px;
  font-weight: 700;
}

.footer-description {
  max-width: 370px;
  margin-top: 20px;
  color: #afbed7;
  font-size: 14px;
  line-height: 1.8;
}

.social-list {
  margin-top: 25px;
  display: flex;
  gap: 12px;
}

.social-list a {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  color: #dce6fa;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 50%;
  transition: var(--transition);
}

.social-list a:hover {
  color: white;
  background: var(--primary);
  transform: translateY(-4px);
}

.footer-column h3 {
  margin-bottom: 22px;
  color: white;
  font-size: 16px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
}

.footer-links a {
  color: #afbed7;
  font-size: 13px;
  transition: var(--transition);
}

.footer-links a:hover {
  color: white;
  transform: translateX(5px);
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.contact-item {
  display: grid;
  grid-template-columns: 21px minmax(0, 1fr);
  gap: 10px;
  color: #afbed7;
  font-size: 13px;
  line-height: 1.6;
}

.contact-item svg {
  margin-top: 2px;
  color: #8da6ff;
}

.contact-item a {
  color: inherit;
  transition: var(--transition);
}

.contact-item a:hover {
  color: white;
}

.payment-box {
  margin-top: 25px;
}

.payment-box > span {
  color: #d7e1f4;
  font-size: 12px;
}

.payment-list {
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.payment-list span {
  padding: 7px 11px;
  color: #dce6fa;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 7px;
  font-size: 11px;
  font-weight: 600;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.09);
}

.footer-bottom__content {
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  color: #91a4c3;
  font-size: 12px;
}

.footer-bottom__content div {
  display: flex;
  gap: 25px;
}

.footer-bottom a {
  transition: var(--transition);
}

.footer-bottom a:hover {
  color: white;
}

@media (min-width: 1800px) {
  .footer-main {
    gap: 75px;
    padding-top: 95px;
    padding-bottom: 80px;
  }

  .footer-description {
    max-width: 440px;
    font-size: 15px;
  }

  .footer-links a,
  .contact-item {
    font-size: 14px;
  }
}

@media (max-width: 1050px) {
  .footer-main {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 45px;
  }
}

@media (max-width: 620px) {
  .footer-main {
    grid-template-columns: 1fr;
    gap: 38px;
    padding-top: 58px;
    padding-bottom: 45px;
  }

  .footer-bottom__content {
    min-height: auto;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 22px;
    padding-bottom: 22px;
  }

  .footer-bottom__content div {
    flex-direction: column;
    gap: 10px;
  }
}
</style>