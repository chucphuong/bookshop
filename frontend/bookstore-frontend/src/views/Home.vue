<script setup>
import { Search, BookOpen, Tag, ShieldCheck } from "lucide-vue-next";
</script>

<template>
  <div class="home-page">
    <section class="hero container">
      <!-- Nội dung bên trái -->
      <div class="hero-content">
        <h1>
          Khám phá thế giới sách
          <span>dành riêng cho bạn</span>
        </h1>

        <p class="hero-description">
          Khám phá hàng nghìn đầu sách thuộc nhiều thể loại, từ văn học, kinh
          tế, kỹ năng sống đến sách thiếu nhi. Đặt sách dễ dàng và giao hàng tận
          nơi trên toàn quốc.
        </p>

        <form class="search-box" @submit.prevent>
          <Search :size="19" />

          <input
            type="text"
            placeholder="Tìm kiếm tên sách, tác giả hoặc thể loại..."
          />

          <button type="submit" aria-label="Tìm kiếm">
            <Search :size="20" />
          </button>
        </form>

        <div class="hero-benefits">
          <div class="benefit-item">
            <span class="benefit-icon">
              <BookOpen :size="19" />
            </span>
            <span>Đa dạng đầu sách</span>
          </div>

          <div class="benefit-item">
            <span class="benefit-icon">
              <Tag :size="19" />
            </span>
            <span>Ưu đãi hấp dẫn</span>
          </div>

          <div class="benefit-item">
            <span class="benefit-icon">
              <ShieldCheck :size="19" />
            </span>
            <span>Sách chính hãng</span>
          </div>
        </div>
      </div>

      <!-- Hình ảnh bên phải -->
      <div class="hero-visual">
        <div class="visual-background">
          <span class="discount-badge">-20%</span>

          <img
            class="main-book"
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=700"
            alt="Sách nổi bật"
          />

          <img
            class="small-book"
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?fit=crop&w=800&q=80](https://images.unsplash.com/photo-1589829085413-56de8ae18c73?fit=crop&w=800&q=80"
            alt="Sách đề xuất"
          />

          <div class="platform platform-main"></div>
          <div class="platform platform-small"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-page {
  overflow: hidden;
  background:
    radial-gradient(circle at 80% 5%, rgba(91, 124, 250, 0.1), transparent 30%),
    var(--background);
}

.hero {
  min-height: 620px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: 70px;
  padding-top: 55px;
  padding-bottom: 70px;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  max-width: 550px;
  color: #102650;
  font-size: clamp(42px, 5vw, 67px);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -2px;
}

.hero-content h1 span {
  color: var(--primary);
}

.hero-description {
  max-width: 530px;
  margin-top: 25px;
  color: var(--text-light);
  font-size: 16px;
  line-height: 1.8;
}

.search-box {
  max-width: 520px;
  height: 58px;
  margin-top: 30px;
  padding-left: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #8b98b3;
  background: var(--white);
  border: 1px solid #e9edfa;
  border-radius: 12px;
  box-shadow: var(--shadow-md);
}

.search-box input {
  min-width: 0;
  flex: 1;
  color: var(--text);
  background: transparent;
  font-family: inherit;
  font-size: 14px;
}

.search-box input::placeholder {
  color: #9aa6bd;
}

.search-box button {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  color: var(--white);
  background: var(--primary);
  border-radius: 11px;
  transition: var(--transition);
}

.search-box button:hover {
  background: var(--primary-dark);
}

.hero-benefits {
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 9px;
  color: #465a7d;
  font-size: 13px;
  font-weight: 500;
}

.benefit-icon {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  color: var(--primary);
  background: #edf2ff;
  border-radius: 50%;
}

.hero-visual {
  min-height: 510px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.visual-background {
  width: 100%;
  max-width: 570px;
  height: 490px;
  position: relative;
  background:
    radial-gradient(
      circle at 50% 35%,
      rgba(255, 255, 255, 0.9),
      transparent 48%
    ),
    linear-gradient(145deg, #eff5ff, #dce9ff);
  border-radius: 70px 70px 45px 45px;
}

.visual-background::before,
.visual-background::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: rgba(91, 124, 250, 0.08);
}

.visual-background::before {
  width: 150px;
  height: 150px;
  top: 45px;
  right: -45px;
}

.visual-background::after {
  width: 95px;
  height: 95px;
  bottom: 25px;
  left: -30px;
}

.main-book {
  width: 245px;
  max-height: 355px;
  object-fit: cover;
  position: absolute;
  left: 43%;
  bottom: 92px;
  z-index: 3;
  border-radius: 13px;
  transform: translateX(-50%);
  box-shadow: 0 24px 45px rgba(31, 68, 139, 0.28);
}

.small-book {
  width: 165px;
  max-height: 250px;
  object-fit: cover;
  position: absolute;
  right: -23px;
  bottom: 74px;
  z-index: 3;
  border-radius: 11px;
  box-shadow: 0 20px 35px rgba(31, 68, 139, 0.23);
}

.discount-badge {
  width: 82px;
  height: 82px;
  display: grid;
  place-items: center;
  color: var(--white);
  background: var(--primary);
  border-radius: 50%;
  font-size: 21px;
  font-weight: 600;
  position: absolute;
  top: 70px;
  left: 25px;
  z-index: 5;
  box-shadow: 0 12px 28px rgba(91, 124, 250, 0.32);
}

.platform {
  position: absolute;
  z-index: 2;
  background: linear-gradient(to bottom, #dce9ff, #bad0fb);
  border-radius: 50%;
  box-shadow: 0 18px 30px rgba(57, 91, 155, 0.2);
}

.platform-main {
  width: 340px;
  height: 75px;
  left: 44%;
  bottom: 58px;
  transform: translateX(-50%);
}

.platform-small {
  width: 205px;
  height: 52px;
  right: -42px;
  bottom: 43px;
}

@media (max-width: 1050px) {
  .hero {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .hero-content h1 {
    font-size: 48px;
  }

  .visual-background {
    height: 430px;
  }

  .main-book {
    width: 210px;
  }

  .small-book {
    width: 135px;
    right: -5px;
  }
}

@media (max-width: 850px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding-top: 60px;
  }

  .hero-content h1,
  .hero-description,
  .search-box {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-benefits {
    justify-content: center;
  }

  .hero-visual {
    min-height: 480px;
  }
}

@media (max-width: 560px) {
  .hero {
    padding-top: 40px;
    gap: 25px;
  }

  .hero-content h1 {
    font-size: 39px;
    letter-spacing: -1px;
  }

  .hero-description {
    font-size: 14px;
  }

  .hero-benefits {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .visual-background {
    height: 365px;
    border-radius: 45px;
  }

  .hero-visual {
    min-height: 390px;
  }

  .main-book {
    width: 170px;
    bottom: 75px;
  }

  .small-book {
    width: 105px;
    right: -5px;
    bottom: 65px;
  }

  .discount-badge {
    width: 65px;
    height: 65px;
    top: 50px;
    left: 12px;
    font-size: 17px;
  }

  .platform-main {
    width: 240px;
  }

  .platform-small {
    width: 135px;
    right: -15px;
  }
}
</style>
