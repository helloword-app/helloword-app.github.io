<template>
  <section class="hero">
    <div class="hero-content">
      <nav class="nav">
        <div class="logo"></div>
        <div class="nav-links">
          <a href="#install" class="nav-link">下载安装</a>
          <router-link to="/daily-quote" class="nav-link">每日佳句</router-link>
        </div>
      </nav>

      <div class="main-content">
        <h1 class="title">
          哈喽单词（Hello Word）
          <span class="subtitle">AI驱动的智能单词学习工具</span>
        </h1>

        <a href="#" class="install-button">
          <img src="../assets/chrome.svg" alt="Chrome" />
          添加至Chrome浏览器
        </a>
        
        <div class="features">
          <div class="feature-item" v-for="feature in features" :key="feature.id">
            <i :class="feature.icon"></i>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>

        <div class="screenshots-container">
          <div class="screenshots-carousel">
            <Transition name="fade" mode="out-in">
              <div class="screenshot-slide" :key="currentIndex">
                <img 
                  :src="screenshots[currentIndex].src" 
                  :alt="screenshots[currentIndex].caption" 
                  class="screenshot"
                />
                <p class="screenshot-caption">{{ screenshots[currentIndex].caption }}</p>
              </div>
            </Transition>

            <div class="carousel-controls">
              <button 
                class="carousel-arrow prev" 
                @click="prevSlide"
                aria-label="上一张"
              >
                <i class="i-carbon-arrow-left"></i>
              </button>
              <div class="carousel-dots">
                <button 
                  v-for="(_, index) in screenshots" 
                  :key="index"
                  :class="['carousel-dot', { active: currentIndex === index }]"
                  @click="currentIndex = index"
                  :aria-label="`切换到第${index + 1}张图片`"
                ></button>
              </div>
              <button 
                class="carousel-arrow next" 
                @click="nextSlide"
                aria-label="下一张"
              >
                <i class="i-carbon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-links">
          <a href="#contact" class="footer-link">联系</a>
          <span class="divider">·</span>
          <a href="#about" class="footer-link">关于</a>
        </div>
        <div class="copyright">
          © 2024 哈喽单词. All rights reserved.
        </div>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
// 导入图片
import selectionImg from '../assets/selection.jpg'
import translateImg from '../assets/translate.jpg'
import wordsImg from '../assets/words.jpg'
import aiContentImg from '../assets/ai_content.jpg'

const features = [
  {
    id: 1,
    icon: 'i-carbon-translate',
    title: '智能划词翻译',
    desc: '即点即译，快速理解'
  },
  {
    id: 2,
    icon: 'i-carbon-ai-status',
    title: 'AI智能助记',
    desc: '个性化记忆提示'
  }
]

const screenshots = [
  {
    src: selectionImg,
    caption: '智能划词翻译'
  },
  {
    src: translateImg,
    caption: '智能划词翻译'
  },
  {
    src: wordsImg,
    caption: 'AI智能助记'
  },
  {
    src: aiContentImg,
    caption: 'AI内容生成'
  }
]

const currentIndex = ref(0)
let autoplayInterval

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % screenshots.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? screenshots.length - 1 
    : currentIndex.value - 1
}

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 4000)
}

const stopAutoplay = () => {
  clearInterval(autoplayInterval)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  padding: 2rem 1rem;
  background: linear-gradient(
    135deg,
    rgb(15, 23, 42) 0%,
    rgb(23, 37, 84) 100%
  );
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(
    circle at top right,
    rgba(99, 179, 237, 0.08) 0%,
    rgba(99, 179, 237, 0) 60%
  );
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(
    circle at bottom left,
    rgba(129, 140, 248, 0.08) 0%,
    rgba(129, 140, 248, 0) 60%
  );
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4rem);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.logo {
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #93c5fd;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
  padding: 0.5rem 0;
  font-weight: 500;
}

.nav-link:hover,
.router-link-active {
  color: #ffffff;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.footer {
  margin-top: 4rem;
  text-align: center;
  padding: 2rem 0;
  color: #718096;
}

.footer-links {
  margin-bottom: 1rem;
}

.footer-link {
  color: #93c5fd;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #ffffff;
}

.divider {
  margin: 0 0.75rem;
  color: #475569;
}

.copyright {
  color: #64748b;
  font-size: 0.85rem;
}

.screenshots-container {
  width: 100%;
  margin: 2rem 0;
}

.screenshots-carousel {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  padding: 0 1rem;
}

.screenshot-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.screenshot {
  width: 100%;
  max-width: 700px;
  height: auto;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.screenshot-caption {
  margin-top: 1rem;
  color: #93c5fd;
  font-size: 1rem;
  font-weight: 500;
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
}

.carousel-arrow {
  background: none;
  border: none;
  color: #93c5fd;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.5rem;
  transition: color 0.2s;
  display: flex;
  align-items: center;
}

.carousel-arrow:hover {
  color: #ffffff;
}

.carousel-dots {
  display: flex;
  gap: 0.75rem;
}

.carousel-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(147, 197, 253, 0.3);
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.2s;
}

.carousel-dot.active {
  background-color: #93c5fd;
  transform: scale(1.2);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.install-button {
  background: linear-gradient(
    135deg,
    #3b82f6 0%,
    #2563eb 100%
  );
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  margin: 1.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.install-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  background: linear-gradient(
    135deg,
    #2563eb 0%,
    #1d4ed8 100%
  );
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero {
    padding: 1.5rem 1rem;
  }

  .nav {
    margin-bottom: 2rem;
  }

  .nav-links {
    gap: 1.5rem;
  }

  .footer {
    margin-top: 3rem;
    padding: 1.5rem 0;
  }
}

.title {
  color: #ffffff;
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.subtitle {
  display: block;
  color: #93c5fd;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0.75rem;
  letter-spacing: -0.025em;
}

.feature-item h3 {
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem;
  letter-spacing: -0.025em;
}

.feature-item p {
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 450;
}
</style>