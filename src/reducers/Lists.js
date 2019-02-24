export function Lists(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch(action.type) {
    case 'ADD_LIST':
    return {
      ...state,
      items: [
        ...this.state.items,
        action.payload
      ],
      isFetching: false
    }
  }
}