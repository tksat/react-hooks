# Reactの学習 【useEffectについて】

## useEffectとは
レンダリングが発生したら最後に実行されるメゾッド。
第一引数に関数をを受け取ることができす。


```javascript:App.js
import { useEffect, useState } from "react"

const App = props => {

  const [state, setState] = useState(props)
  const { name, price } = state

  const reset = () => setState(props)

  const changeInput = e => setState({ ...state, name: e.target.value })

  useEffect(() => {
    console.log("useEffectを実行しました")
  })

  return (
    <>
      <h1>複数のstate管理方法</h1>
      <p>{state.name}は{state.price}です</p>
      <button onClick={() => setState({ ...state, price: price + 10 })}>+10</button>
      <button onClick={() => setState({ ...state, price: price - 10 })}>+10</button>
      <input value={name} onChange={changeInput} />
      <button onClick={reset}>reset</button>
    </>
  );
}

App.defaultProps = {
  name: "商品名",
  price: 0
}

export default App

```
