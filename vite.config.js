import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'generate-pages',
      closeBundle() {
        const routes = ['daily-quote', 'install']
        const template = fs.readFileSync('./dist/index.html', 'utf-8')
        
        // 为每个路由生成HTML文件
        routes.forEach(route => {
          const filePath = `./dist/${route}/index.html`
          // 确保目录存在
          fs.mkdirSync(`./dist/${route}`, { recursive: true })
          // 写入文件
          fs.writeFileSync(filePath, template)
        })
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      }
    }
  }
})