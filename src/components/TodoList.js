import React from 'react'
import styled from 'styled-components'
import Events from './Events'

const TodoList = () => {
  return (
    <>
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
          <Events />
        </tbody>
      </table>
    </>
  )
}

export default TodoList

const StyledH4 = styled.h4`
  font-size: 20px;
`
