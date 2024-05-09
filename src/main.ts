import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="../public/test.jpg" download>下载图片</a>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
