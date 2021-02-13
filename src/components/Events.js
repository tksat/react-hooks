import React, { useContext } from "react"
import { DELETE_EVENT } from '../actions'
import AppContext from "../contexts/AppContext"

const Events = () => {
  const { state, dispatch } = useContext(AppContext)

  return state.events.map(event => {
    const todoDelete = () => {
      const result = window.confirm("データを削除してもよろしいですか？")
      if (result) dispatch({ type: DELETE_EVENT, payload: { id: event.id } })
    }

    return (
      <tr key={event.id}>
        <td>{event.title}</td>
        <td>0000/00/00</td>
        <td>{event.body}</td>
        <td><input type="button" onClick={todoDelete} value="削除" /></td>
      </tr>
    )
  }
  )
}

export default Events
