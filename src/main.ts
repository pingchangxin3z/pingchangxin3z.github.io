import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="../test.jpg" download>下载图片</a>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
