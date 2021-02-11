# イベント登録アプリ

## 起動方法
```
npm start
```

## useReducerを導入

### reducerの準備

### reducerとは
- reducerは関数である
- 引数に現在のstateとactionを受け取って、新しいstateを生成します

```javascript:src/reducers/index.js

const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1
      const data = { title: action.payload.title, body: action.payload.body }
      return [...state, { id, ...data }];
    case "DELETE_EVENT":
      const data = state.filter(event => event.id !== action.payload.id)
      return [...data]
    default:
      return state
  }
}

export default events

```

## useReducer
```javascript
const [state, dispatch] = useReducer(reducer,initialState,init)
```
- stateとdispatchが返ってくる
- 第一引数にreducerを渡す
- 第二引数にデフォルトの状態
- 第三引数には初期化時にのみ発火するコールバック関数

```javascript:src/components/TodoApp.js

import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import reducer from '../reducers'

const TodoApp = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [state, dispatch] = useReducer(reducer, [])

  const todoAdd = e => {
    e.preventDefault()
    dispatch({ type: 'CREATE_EVENT', payload: { title, body } })
    setTitle("")
    setBody("")
  }

  return (
    <StyledDiv>
      <StyledH4>イベント作成フォーム</StyledH4>
      <form>
        <div>
          <label htmlFor="title">タイトル</label>
          <StyledInputText id="title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="body">本文</label>
          <StyledTextArea id="body" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <StyledButton value="イベントを作成" onClick={todoAdd} />
        <StyledButton value="すべてのイベントを削除" delete />
      </form>
  )
}

export default TodoApp;

```

### actiontypeは定数で管理する
タイプミスの時にエラーで表示されるように定数にするのが基本

```javascript:src/actions/index.js

export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const ALL_DELETE_EVENT = 'ALL_DELETE_EVENT'

```

```javascript:src/reducers/index.js

import { CREATE_EVENT, DELETE_EVENT, ALL_DELETE_EVENT } from '../actions'

const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1
      const data = { title: action.payload.title, body: action.payload.body }
      return [...state, { id, ...data }];
    case DELETE_EVENT:
      const deleteddData = state.filter(event => event.id !== action.payload.id)
      return [...deleteddData];
    case ALL_DELETE_EVENT:
      return [];
    default:
      return state
  }
}

export default events

```

コンポーネントのtypeにも使用する

```javascript:src/components/TodoForm

import React, { useState } from "react"
import { CREATE_EVENT, ALL_DELETE_EVENT } from '../actions'
import styled from 'styled-components'

const TodoForm = ({ todoLength, dispatch }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const todoAdd = e => {
    e.preventDefault()
    dispatch({ type: CREATE_EVENT, payload: { title, body } })
    setTitle("")
    setBody("")
  }

  const todoAllDelete = e => {
    e.preventDefault()
    const result = window.confirm("全てのデータを削除してもよろしいですか？")
    if (result) dispatch({ type: ALL_DELETE_EVENT })
  }
```
