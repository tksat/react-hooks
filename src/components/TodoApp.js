import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import reducer from '../reducers'
import Events from './Events'

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

  const todoAllDelete = e => {
    e.preventDefault()
    const result = window.confirm("全てのデータを削除してもよろしいですか？")
    if (result) dispatch({ type: 'ALL_DELETE_EVENT' })
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
        <StyledButton value="イベントを作成" onClick={todoAdd} disabled={title === '' || body === ''} />
        <StyledButton value="すべてのイベントを削除" delete onClick={todoAllDelete} disabled={state.length == 0} />
      </form>

      <StyledH4>イベント一覧</StyledH4>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>日付</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <Events events={state} dispatch={dispatch} />
        </tbody>
      </table>

    </StyledDiv>
  )
}

export default TodoApp;

//style

const StyledDiv = styled.div`
  width: 900px;
  max-width: 900px;
  margin: 0 auto;
`

const StyledH4 = styled.h4`
  font-size: 20px;
`
const StyledInputText = styled.input.attrs(props => ({
  type: "text"
}))`
  border: 2px solid #ccc;
`

const StyledButton = styled.input.attrs(props => ({
  type: 'button'
}))`
  background: ${props => props.delete ? "red" : "blue"};
  color: #fff;
`

const StyledTextArea = styled.textarea`
  width: 100%;
`
