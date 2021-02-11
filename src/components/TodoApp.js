import React, { useReducer } from 'react';
import styled from 'styled-components'
import reducer from '../reducers'
import TodoList from './TodoList'
import AppContext from '../contexts/AppContext'

import TodoForm from "./TodoForm"

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <StyledDiv>
        <TodoForm />
        <TodoList />
      </StyledDiv>
    </AppContext.Provider>
  )
}

export default TodoApp;

const StyledDiv = styled.div`
  width: 900px;
  max-width: 900px;
  margin: 0 auto;
`
