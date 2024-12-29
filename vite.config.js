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
        
        // 为每个路由生成HTML文件，保留 Google Analytics 代码
        routes.forEach(route => {
          const filePath = `./dist/${route}/index.html`
          fs.mkdirSync(`./dist/${route}`, { recursive: true })
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