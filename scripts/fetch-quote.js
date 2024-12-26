import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function fetchQuote() {
  const apiEndpoint = process.env.QUOTE_API_ENDPOINT
  
  if (!apiEndpoint) {
    console.error('QUOTE_API_ENDPOINT environment variable is not set')
    process.exit(1)
  }

  try {
    // 读取现有数据从网站
    let quotes = []
    try {
      const websiteResponse = await fetch('https://helloword-app.github.io/data/daily-quote.json')
      if (websiteResponse.ok) {
        quotes = await websiteResponse.json()
        if (!Array.isArray(quotes)) {
          quotes = [quotes]
        }
      }
    } catch (error) {
      // 如果网站数据获取失败，直接使用本地数据
      const localData = await fs.readFile(path.join(__dirname, '../public/data/daily-quote.json'), 'utf-8')
      quotes = JSON.parse(localData)
      console.log('Using local data as fallback')
    }

    // 获取新数据
    const response = await fetch(apiEndpoint)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const newQuote = await response.json()

    if (newQuote.english) {
        // 检查是否已存在相同或更新的数据
        const existingQuote = quotes.find(q => q.updateDate >= newQuote.updateDate)
        if (!existingQuote) {
            // 添加新数据到数组开头
            quotes.unshift(newQuote)
            console.log('New quote added')
        } else {
            console.log('Quote for this date already exists')
        }
    }

    // 写入更新后的数据
    const publicDataDir = path.join(__dirname, '../public/data')
    await fs.mkdir(publicDataDir, { recursive: true })
    await fs.writeFile(
      path.join(publicDataDir, 'daily-quote.json'),
      JSON.stringify(quotes, null, 2)
    )
    
    console.log('Daily quote file updated successfully')
  } catch (error) {
    console.error('Error fetching daily quote:', error)
    process.exit(1)
  }
}

fetchQuote()