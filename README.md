# Reactの学習

## useStateを複数管理

### 基本の記述

```javascript:App.js

function App() {

  const initialState = {
    name: "りんご",
    price: 1000
  }

  const [name, setName] = useState(initialState.name)
  const [price, setPlise] = useState(initialState.price)

  return (
    <>
      <h1>複数のstate管理方法</h1>
      <p>{name}は{price}です</p>
    </>
  );
}

```

### 初期のstateがPropsで渡される場合
** こちらの記述の方がわかりやすいので推奨 **

```javascript:App.js

const App = props => {

  const [name, setName] = useState(props.name)
  const [price, setPlise] = useState(props.price)

  return (
    <>
      <h1>複数のstate管理方法</h1>
      <p>{name}は{price}です</p>
    </>
  );
}

App.defaultProps = {
  name: "りんご",
  price: 1000
}

export default App

```

#### props管理で変更してみよう

```javascript:App.js

const App = props => {

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setName(props.name)
    setPrice(props.price)
  }

  const changeInput = e => setName(e.target.value)

  return (
    <>
      <h1>複数のstate管理方法</h1>
      <p>{name}は{price}です</p>
      <button onClick={() => setPrice(price + 10)}>+10</button>
      <button onClick={() => setPrice(price - 10)}>+10</button>
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
