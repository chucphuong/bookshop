<script setup>
import {
  Search,
  BookOpen,
  Tag,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Truck,
  BadgeCheck,
  LibraryBig,
} from "lucide-vue-next";

import CategoryCard from "../components/cards/CategoryCard.vue";
import BookCard from "../components/cards/BookCard.vue";
import TrendingBookItem from "../components/cards/TrendingBookItem.vue";
// import vanHocImage from "../assets/images/categories/van-hoc.jpg";
// import kinhTeImage from "../assets/images/categories/kinh-te.jpg";
// import kyNangImage from "../assets/images/categories/ky-nang.jpg";
// import thieuNhiImage from "../assets/images/categories/thieu-nhi.jpg";
// import congNgheImage from "../assets/images/categories/cong-nghe.jpg";
// import tamLyImage from "../assets/images/categories/tam-ly.jpg";

const categories = [
  {
    title: "Văn học",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Kinh tế",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Kỹ năng sống",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  },
  {
    title: "Thiếu nhi",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    title: "Công nghệ",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
  },
  {
    title: "Tâm lý",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

const bestSellerBooks = [
  {
    id: 1,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: 79000,
    oldPrice: 99000,
    discount: 20,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: 86000,
    oldPrice: 108000,
    discount: 20,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    author: "Rosie Nguyễn",
    price: 72000,
    oldPrice: 90000,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1511108690759-009324a90311?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Cây Cam Ngọt Của Tôi",
    author: "José Mauro de Vasconcelos",
    price: 88000,
    oldPrice: 110000,
    discount: 20,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Atomic Habits",
    author: "James Clear",
    price: 145000,
    oldPrice: 181000,
    discount: 20,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=700&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Tâm Lý Học Về Tiền",
    author: "Morgan Housel",
    price: 119000,
    oldPrice: 149000,
    discount: 20,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=700&auto=format&fit=crop&q=80",
  },
];

const trendingBooks = [
  {
    id: 1,
    title: "Cho Tôi Xin Một Vé Đi Tuổi Thơ",
    author: "Nguyễn Nhật Ánh",
    price: 85000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
    author: "Nguyễn Nhật Ánh",
    price: 92000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1511108690759-009324a90311?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Muôn Kiếp Nhân Sinh",
    author: "Nguyên Phong",
    price: 129000,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Không Diệt Không Sinh Đừng Sợ Hãi",
    author: "Thích Nhất Hạnh",
    price: 99000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Đi Tìm Lẽ Sống",
    author: "Viktor E. Frankl",
    price: 88000,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Hiểu Về Trái Tim",
    author: "Minh Niệm",
    price: 118000,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&auto=format&fit=crop&q=80",
  },
];

const advantages = [
  {
    title: "Đa dạng đầu sách",
    description:
      "Hàng nghìn đầu sách thuộc nhiều thể loại, phù hợp với mọi độ tuổi.",
    icon: LibraryBig,
  },
  {
    title: "Thanh toán thuận tiện",
    description: "Hỗ trợ nhiều phương thức thanh toán an toàn và linh hoạt.",
    icon: CreditCard,
  },
  {
    title: "Sách chính hãng",
    description: "Cam kết sách có nguồn gốc rõ ràng và đảm bảo chất lượng.",
    icon: BadgeCheck,
  },
  {
    title: "Giao hàng nhanh chóng",
    description: "Đóng gói cẩn thận và giao hàng tận nơi trên toàn quốc.",
    icon: Truck,
  },
];
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
    <!-- Danh mục  -->
    <section id="categories" class="category-section section">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="section-label">Danh mục nổi bật</span>

            <h2>Khám phá theo danh mục</h2>

            <p>
              Dễ dàng tìm thấy những cuốn sách phù hợp với sở thích và nhu cầu
              của bạn.
            </p>
          </div>

          <RouterLink to="/books" class="view-all-link">
            Xem tất cả
          </RouterLink>
        </div>

        <div class="category-grid">
          <CategoryCard
            v-for="category in categories"
            :key="category.title"
            :title="category.title"
            :image="category.image"
          />
        </div>
      </div>
    </section>
    <!--  -->
    <section class="trending-section">
      <div class="container">
        <div class="trending-box">
          <div class="trending-heading">
            <div>
              <span class="section-label"> Xu hướng đọc sách </span>

              <h2>Sách đang được quan tâm</h2>
            </div>

            <RouterLink to="/books" class="view-all-link">
              Xem tất cả
            </RouterLink>
          </div>

          <div class="trending-grid">
            <TrendingBookItem
              v-for="(book, index) in trendingBooks"
              :key="book.id"
              :book="book"
              :rank="index + 1"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Sách bán chạy  -->
    <section id="bestsellers" class="bestseller-section">
      <div class="container">
        <div class="section-heading">
          <div>
            <span class="section-label">Được yêu thích nhất</span>
            <h2>Sách bán chạy trong tháng</h2>
          </div>

          <RouterLink to="/books" class="view-all-link"> Xem thêm </RouterLink>
        </div>

        <div class="bestseller-layout">
          <div class="book-grid">
            <BookCard
              v-for="book in bestSellerBooks"
              :key="book.id"
              :book="book"
            />
          </div>

          <aside class="promotion-card">
            <div class="promotion-card__content">
              <span>Ưu đãi trong tuần</span>

              <h3>Giảm 20% sách bán chạy</h3>

              <p>
                Sở hữu những cuốn sách được yêu thích nhất với mức giá hấp dẫn.
              </p>

              <RouterLink to="/books" class="promotion-btn">
                Nhận ưu đãi
              </RouterLink>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <!--  -->
    <section class="advantages-section">
      <div class="container advantages-layout">
        <div class="advantages-intro">
          <span class="section-label">BookStore</span>

          <h2>Vì sao nên chọn chúng tôi?</h2>

          <p>
            BookStore mang đến trải nghiệm mua sách thuận tiện, an toàn và phù
            hợp với độc giả Việt Nam.
          </p>

          <RouterLink to="/books" class="learn-more-link">
            Khám phá ngay
          </RouterLink>
        </div>

        <div class="advantages-grid">
          <article
            v-for="advantage in advantages"
            :key="advantage.title"
            class="advantage-card"
          >
            <div class="advantage-icon">
              <component :is="advantage.icon" :size="30" />
            </div>

            <div>
              <h3>{{ advantage.title }}</h3>

              <p>{{ advantage.description }}</p>
            </div>
          </article>
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
  grid-template-columns: minmax(480px, 0.9fr) minmax(600px, 1.1fr);
  align-items: center;
  gap: clamp(60px, 6vw, 130px);
  padding-top: 70px;
  padding-bottom: 90px;
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

@media (min-width: 1800px) {
  .hero {
    min-height: 820px;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 140px;
    padding-top: 90px;
    padding-bottom: 110px;
  }

  .hero-content h1 {
    max-width: 700px;
    font-size: 76px;
  }

  .hero-description {
    max-width: 650px;
    font-size: 18px;
  }

  .search-box {
    max-width: 620px;
    height: 64px;
  }

  .search-box button {
    width: 64px;
    height: 64px;
  }

  .hero-visual {
    min-height: 610px;
  }

  .visual-background {
    max-width: 680px;
    height: 580px;
  }

  .main-book {
    width: 285px;
    max-height: 410px;
  }

  .small-book {
    width: 190px;
    max-height: 285px;
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

.category-section {
  background: var(--white);
}

.section-heading {
  margin-bottom: 35px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 30px;
}

.section-label {
  display: inline-block;
  margin-bottom: 10px;
  color: var(--primary);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.3px;
}

.section-heading h2 {
  color: #102650;
  font-size: clamp(30px, 4vw, 43px);
  line-height: 1.2;
}

.section-heading p {
  max-width: 570px;
  margin-top: 12px;
  color: var(--text-light);
  line-height: 1.7;
}

.view-all-link {
  flex-shrink: 0;
  color: var(--primary);
  font-size: 14px;
  font-weight: 600;
  transition: var(--transition);
}

.view-all-link:hover {
  color: var(--primary-dark);
  transform: translateX(4px);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

@media (min-width: 1600px) {
  .category-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 30px;
  }

  .category-card {
    min-height: 240px;
  }
}

@media (max-width: 850px) {
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .section-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }
}

.bestseller-section {
  padding: 90px 0;
  background: #fbfcff;
}

.view-all-link {
  padding: 10px 18px;
  color: var(--primary);
  border: 1px solid #cfdcff;
  border-radius: 9px;
  font-size: 14px;
  font-weight: 600;
  transition: var(--transition);
}

.view-all-link:hover {
  color: white;
  background: var(--primary);
  border-color: var(--primary);
}

.bestseller-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 330px;
  gap: 28px;
  align-items: stretch;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.promotion-card {
  min-height: 100%;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 36px;
  color: white;
  background:
    linear-gradient(to top, rgba(32, 82, 211, 0.92), rgba(91, 124, 250, 0.68)),
    url("https://images.unsplash.com/photo-1526243741027-444d633d7365?w=900&auto=format&fit=crop&q=85")
      center/cover;
  border-radius: 24px;
  box-shadow: var(--shadow-md);
}

.promotion-card__content span {
  display: inline-block;
  margin-bottom: 12px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.promotion-card h3 {
  max-width: 260px;
  font-size: 34px;
  line-height: 1.2;
}

.promotion-card p {
  margin-top: 15px;
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.7;
}

.promotion-btn {
  display: inline-flex;
  margin-top: 24px;
  padding: 13px 22px;
  color: var(--primary);
  background: white;
  border-radius: 999px;
  font-weight: 600;
  transition: var(--transition);
}

.promotion-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(17, 44, 103, 0.22);
}

@media (min-width: 1800px) {
  .bestseller-layout {
    grid-template-columns: minmax(0, 1fr) 380px;
    gap: 32px;
  }

  .book-grid {
    gap: 28px;
  }
}

@media (max-width: 1200px) {
  .bestseller-layout {
    grid-template-columns: 1fr;
  }

  .promotion-card {
    min-height: 420px;
  }
}

@media (max-width: 900px) {
  .book-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .book-grid {
    grid-template-columns: 1fr;
  }

  .promotion-card {
    min-height: 360px;
    padding: 28px;
  }

  .promotion-card h3 {
    font-size: 29px;
  }
}

.trending-section {
  padding: 30px 0 80px;
  background: white;
}

.trending-box {
  padding: 34px;
  background:
    radial-gradient(circle at 90% 0, rgba(91, 124, 250, 0.13), transparent 30%),
    linear-gradient(135deg, #f5f8ff, #eef4ff);
  border: 1px solid #e4ebfc;
  border-radius: 24px;
}

.trending-heading {
  margin-bottom: 24px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 25px;
}

.trending-heading h2 {
  color: #142b55;
  font-size: clamp(27px, 3vw, 39px);
  line-height: 1.2;
}

.trending-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  overflow: hidden;
  background: rgba(255, 255, 255, 0.52);
  border: 1px solid #e3eafb;
  border-radius: 16px;
}

.trending-grid > :nth-child(3n) {
  border-right: none;
}

.trending-grid > :nth-child(-n + 3) {
  border-bottom: 1px solid #dde6fb;
}

@media (min-width: 1800px) {
  .trending-box {
    padding: 42px;
  }

  .trending-grid {
    gap: 0;
  }
}

@media (max-width: 1050px) {
  .trending-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .trending-grid > * {
    border-bottom: 1px solid #dde6fb;
  }

  .trending-grid > :nth-child(2n) {
    border-right: none;
  }

  .trending-grid > :nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 650px) {
  .trending-section {
    padding-bottom: 60px;
  }

  .trending-box {
    padding: 22px 16px;
  }

  .trending-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .trending-grid {
    grid-template-columns: 1fr;
  }

  .trending-grid > * {
    border-right: none;
    border-bottom: 1px solid #dde6fb;
  }

  .trending-grid > :last-child {
    border-bottom: none;
  }
}

.advantages-section {
  padding: 90px 0;
  background: white;
}

.advantages-layout {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  align-items: center;
  gap: 52px;
}

.advantages-intro h2 {
  margin-top: 8px;
  color: #142b55;
  font-size: clamp(32px, 3vw, 43px);
  line-height: 1.2;
}

.advantages-intro p {
  margin-top: 16px;
  color: var(--text-light);
  line-height: 1.75;
}

.learn-more-link {
  display: inline-flex;
  margin-top: 22px;
  color: var(--primary);
  font-size: 14px;
  font-weight: 600;
  transition: var(--transition);
}

.learn-more-link:hover {
  color: var(--primary-dark);
  transform: translateX(5px);
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.advantage-card {
  min-height: 205px;
  padding: 28px 24px;
  background: linear-gradient(
    145deg,
    rgba(245, 248, 255, 0.96),
    rgba(234, 241, 255, 0.92)
  );
  border: 1px solid #e4ebfc;
  border-radius: 22px;
  transition: var(--transition);
}

.advantage-card:hover {
  transform: translateY(-7px);
  box-shadow: var(--shadow-md);
}

.advantage-icon {
  width: 58px;
  height: 58px;
  display: grid;
  place-items: center;
  margin-bottom: 22px;
  color: var(--primary);
  background: white;
  border-radius: 17px;
  box-shadow: 0 8px 20px rgba(73, 105, 182, 0.12);
}

.advantage-card h3 {
  color: #183461;
  font-size: 17px;
  line-height: 1.35;
}

.advantage-card p {
  margin-top: 10px;
  color: var(--text-light);
  font-size: 12px;
  line-height: 1.65;
}

@media (min-width: 1800px) {
  .advantages-layout {
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 70px;
  }

  .advantage-card {
    min-height: 230px;
    padding: 32px 28px;
  }
}

@media (max-width: 1150px) {
  .advantages-layout {
    grid-template-columns: 1fr;
  }

  .advantages-intro {
    max-width: 650px;
  }

  .advantages-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .advantages-section {
    padding: 65px 0;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .advantage-card {
    min-height: auto;
  }
}
</style>
