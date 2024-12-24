<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="title">
        哈喽单词（Hello Word）
        <span class="subtitle">AI驱动的智能单词学习工具</span>
      </h1>
      
      <div class="features">
        <div class="feature-item" v-for="feature in features" :key="feature.id">
          <i :class="feature.icon"></i>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.desc }}</p>
        </div>
      </div>

      <a href="#" class="install-button">
        <img src="../assets/chrome.svg" alt="Chrome" />
        添加至Chrome浏览器
      </a>
    </div>
  </section>
</template>

<script setup>
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
</script> 