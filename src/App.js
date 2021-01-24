import { useState } from "react"

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
