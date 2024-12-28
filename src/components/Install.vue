<template>
    <div class="install-guide">
      <h1 class="title">下载安装指南</h1>
      
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <h3>下载插件</h3>
          <p>点击首页或下方的按钮下载 Chrome 插件文件</p>
          <a href="/release/helloword.zip" class="download-button">
            <img src="../assets/chrome.svg" alt="Chrome" />
            下载插件
          </a>
        </div>
  
        <div class="step">
          <div class="step-number">2</div>
          <h3>打开扩展管理</h3>
          <p>在 Chrome 浏览器地址栏输入：chrome://extensions/</p>
          <p>或者点击浏览器右上角菜单 → 更多工具 → 扩展程序</p>
        </div>
  
        <div class="step">
          <div class="step-number">3</div>
          <h3>开启开发者模式</h3>
          <p>在扩展程序页面右上角，打开"开发者模式"开关</p>
        </div>
  
        <div class="step">
          <div class="step-number">4</div>
          <h3>安装插件</h3>
          <p>将下载的 .zip 文件拖拽到扩展程序页面中完成安装</p>
        </div>

        <div class="step">
          <div class="step-number">5</div>
          <h3>固定插件(推荐)</h3>
          <p>点击 Chrome 工具栏右侧的"扩展程序"图标，找到哈喽单词，点击图钉图标将其固定在工具栏中</p>
        </div>
      </div>
  
      <div class="note">
        <h3>注意事项：</h3>
        <ul>
          <li>安装完成后，请刷新网页以启用插件</li>
          <li>如遇到安装问题，请确保 Chrome 浏览器已更新至最新版本</li>
          <li>如有其他问题，请通过底部联系方式与我们联系</li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .install-guide {
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
  
  .title {
    color: #ffffff;
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 3rem;
    letter-spacing: -0.025em;
  }
  
  .steps {
    max-width: 800px;
    width: 100%;
    display: grid;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .step {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 1rem;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .step-number {
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 2.5rem;
    height: 2.5rem;
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
  }
  
  .step h3 {
    color: #93c5fd;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .step p {
    color: #94a3b8;
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  .download-button {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    transition: all 0.2s;
    font-weight: 500;
  }
  
  .download-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  
  .note {
    max-width: 800px;
    width: 100%;
    background: rgba(239, 68, 68, 0.1);
    padding: 1.5rem;
    border-radius: 1rem;
    border: 1px solid rgba(239, 68, 68, 0.2);
  }
  
  .note h3 {
    color: #f87171;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  .note ul {
    color: #94a3b8;
    padding-left: 1.5rem;
    line-height: 1.6;
  }
  
  .note li {
    margin-bottom: 0.5rem;
  }
  
  @media (max-width: 768px) {
    .title {
      font-size: 2rem;
    }
    
    .step {
      padding: 1.5rem;
    }
    
    .step-number {
      width: 2rem;
      height: 2rem;
      font-size: 1rem;
    }
    
    .step h3 {
      font-size: 1.25rem;
    }
  }
  </style>