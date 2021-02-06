const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const id = state.length === 0 ? 1 : state[state.length - 1].id + 1
      const data = { title: action.payload.title, body: action.payload.body }
      return [...state, { id, ...data }];
    case "DELETE_EVENT":
      const deleteddData = state.filter(event => event.id !== action.payload.id)
      return [...deleteddData];
    case "ALL_DELETE_EVENT":
      return [];
    default:
      return state
  }
}

export default events
