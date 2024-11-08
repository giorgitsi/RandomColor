
import { useState } from 'react'
import './App.css'


function App() {

  let [num, setNum] = useState(1)
  const [name, setName] = useState("Mike")
  let [color, setColor] = useState("blue")

  function getRandomColor() {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let rgb = `rgb(${red}, ${green}, ${blue})`
    console.log(rgb)
    setColor(rgb)
  }

  function funcRandom() {
    let random1 = Math.floor(Math.random() * 101)
    let random2 = Math.floor(Math.random() * 101)
    let random3 = random1 + random2
    setNum(random3)

  }

  return (
    <>
      <button onClick={getRandomColor}>Random COlor</button>

      <p style={{
        color: "black",
        background: color
      }}>hi</p>
      <h2 style={{ color: "red", fontSize: "40px" }}>hello</h2>
      <button onClick={() => {
        console.log(num)
        setNum(num + 1)
      }} className='btn'>
        {num}
      </button>

      <button onClick={() => setNum(num * 2)}>2x</button>
      <button onDoubleClick={() => setNum(0)}>Reset</button>
      <button onClick={() => setNum(num - 1)}>-1</button>
      <button onClick={() => {
        let randomNum = Math.floor(Math.random() * 101)
        setNum(randomNum)
      }}>Random</button>

      <button onClick={() => {
        let randomNum = Math.floor(Math.random() * 20 + 60)
        setNum(randomNum)
      }}>Random 2</button>

      <button onClick={funcRandom}>random 3 </button>

    </>
  )
}

export default App
