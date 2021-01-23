import { useState } from "react"


function App() {

  const [count, setCount] = useState(0)

  const handleClickPlusDubble = () => setCount(count * 2)
  const handleClickMinusDubble = () => setCount(count * -2)

  //引数で変更前のものを受け取って変更
  const handleClickPlus2 = () => setCount(prevCount => prevCount + 1)
  const handleClickMinus2 = () => setCount(prevCount => prevCount - 1)

  //3の倍数の時だけ3で割る
  const divide3 = () => {
    setCount(prevCOunt => count % 3 === 0 ? prevCOunt / 3 : prevCOunt)
  }

  const reset = () => setCount(0)

  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={handleClickPlusDubble}>X2</button>
      <button onClick={handleClickMinusDubble}>-X2</button>
      <br />
      <button onClick={handleClickPlus2}>+1</button>
      <button onClick={handleClickMinus2}>-1</button>
      <br />
      <button onClick={reset}>reset</button>
      <br />
      <button onClick={divide3}>3の倍数の時だけ3で割る</button>
    </>
  );
}

export default App;
