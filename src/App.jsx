import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <div class="touch-device">터치가 가능합니다</div>
      <div class="untouch-device">마우스, 터치패드 인터렉션이 가능합니다</div>

      </div>
    </>
  )
}

export default App
