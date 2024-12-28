<template>
  <section class="daily-quote">
    <!-- 静态结构部分 -->
    <div class="header">
      <h1>每日佳句</h1>
      <p class="subtitle">每天一句经典名言，提升英语学习乐趣</p>
    </div>

    <!-- 动态内容部分 -->
    <div class="quotes-container">
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>正在加载佳句...</p>
      </div>
      
      <div v-else-if="error" class="error">
        <p>{{ error }}</p>
        <button @click="fetchQuotes">重试</button>
      </div>
      
      <template v-else>
        <div 
          v-for="quote in quotes" 
          :key="quote.updateDate"
          class="quote-content"
        >
          <div class="quote-date">{{ formatDate(quote.updateDate) }}</div>
          <blockquote class="quote-text">
            <p class="english">{{ quote.english }}</p>
            <p class="chinese">{{ quote.chinese }}</p>
          </blockquote>
          <div class="quote-author">—— {{ quote.author || 'Unknown' }}</div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const quotes = ref([])
const loading = ref(true)
const error = ref(null)

async function fetchQuotes() {
  loading.value = true
  error.value = null
  
  try {
    const response = await fetch('/data/daily-quote.json')
    if (!response.ok) throw new Error('获取数据失败')
    
    const data = await response.json()
    quotes.value = Array.isArray(data) ? data : [data]
  } catch (e) {
    error.value = '加载佳句失败，请稍后重试'
    console.error('Error loading quotes:', e)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchQuotes()
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}
</script>

<style scoped>
.daily-quote {
    min-height: 100vh;
    padding: 2rem 1rem;
    background: linear-gradient(
      135deg,
      rgb(15, 23, 42) 0%,
      rgb(23, 37, 84) 100%
    );
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
  max-width: 800px;
}

.header h1 {
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
}

.subtitle {
  color: #93c5fd;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: normal;
  opacity: 0.9;
}

.quotes-container {
  max-width: 800px;
  width: 100%;
  display: grid;
  gap: 2rem;
}

.quote-content {
  background: #ffffff08;
  padding: 3rem;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, .1);
}

.quote-content:hover {
  transform: translateY(-5px);
}

.quote-date {
  font-size: 1rem;
  color: #93c5fd;
  margin-bottom: 1.5rem;
}

.quote-text {
  margin: 0;
  padding: 0;
}

.english {
  color: white;
  font-size: clamp(1.5rem, 4vw, 1.75rem);
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  font-style: italic;
  letter-spacing: -.025em;
}

.chinese {
  color: #94a3b8;
  font-size: clamp(1.1rem, 3vw, 1.25rem);
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.quote-author {
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #93c5fd;;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top: 4px solid white;
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error button {
  background: white;
  color: var(--primary-color);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.error button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .daily-quote {
    padding: 3rem 1rem;
  }
  
  .quote-content {
    padding: 2rem 1.5rem;
  }
}
</style> 