# Reactの学習 【stateをまとめて管理】

## 基本の記述

```javascript:App.js
const App = props => {

  const [state, setState] = useState(props)

  const reset = () => setState(props)

  const changeInput = e => setState({ ...state, name: e.target.value })

  return (
    <>
      <h1>複数のstate管理方法</h1>
      <p>{state.name}は{state.price}です</p>
      <button onClick={() => setState({ ...state, price: state.price + 10 })}>+10</button>
      <button onClick={() => setState({ ...state, price: state.price - 10 })}>+10</button>
      <input value={state.name} onChange={changeInput} />
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

## 重複している名前をリファクタリングしよう
重複しているname.stateとname.priceをすっきりさせる
```javascript
const { name, price } = state
```

```javascript:App.js
const App = props => {

  const [state, setState] = useState(props)
  const { name, price } = state

  const reset = () => setState(props)

  const changeInput = e => setState({ ...state, name: e.target.value })

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
