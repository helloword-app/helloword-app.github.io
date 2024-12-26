<template>
  <section class="daily-quote">
    <div class="quotes-container">
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const quotes = ref([])

// 直接从 public 目录读取数据
fetch('/data/daily-quote.json')
  .then(response => response.json())
  .then(data => {
    quotes.value = Array.isArray(data) ? data : [data]
  })
  .catch(error => {
    console.error('Error loading quotes:', error)
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
}

.quotes-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 0;
}

.quote-content {
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.2s;
}

.quote-content:hover {
  transform: translateY(-2px);
}

.quote-date {
  color: #93c5fd;
  font-size: 1rem;
  margin-bottom: 2rem;
}

.quote-text {
  margin: 0;
  padding: 0;
}

.english {
  color: #ffffff;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  font-style: italic;
  letter-spacing: -0.025em;
}

.chinese {
  color: #94a3b8;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.quote-author {
  color: #93c5fd;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .quotes-container {
    gap: 2rem;
  }

  .quote-content {
    padding: 2rem 1rem;
  }

  .english {
    font-size: 1.5rem;
  }

  .chinese {
    font-size: 1.125rem;
  }
}
</style> 