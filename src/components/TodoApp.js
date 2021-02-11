import React, { useState, useReducer } from 'react';
import styled from 'styled-components'
import reducer from '../reducers'
import TodoList from './TodoList'

import TodoForm from "./TodoForm"

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <StyledDiv>
      <TodoForm todoLength={state} dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </StyledDiv>
  )
}

export default TodoApp;

const StyledDiv = styled.div`
  width: 900px;
  max-width: 900px;
  margin: 0 auto;
`
