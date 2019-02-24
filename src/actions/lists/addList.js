// @flow
export default function addList(list: {
  name: string
}) {
  return {
    type: 'ADD_LIST',
    payload: list
  }
}