import './App.css'
import Home from './comp/Home'
import Table from './comp/Table'
import Team from './comp/Team'
import data from './comp/data.json'
import './comp/home.css'

import { useContext, createContext } from 'react'
import { useReducer } from 'react'


export const TableData = createContext();



let initial = {
  table: [],
  original: data.map((e) => {
    e.condition = false
    return e;
  })
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':

      let x = state.original[action.payload - 1]
      x.condition = true;

      return {
        original: [...state.original],
        table: [...state.table, x], // element
        // ...state,
        // table: [...state.table, action.payload]

      }
    case 'remove':
      state.original[action.payload - 1].condition = false

      return {
        original: [...state.original],
        table: [...state.table]
        // ...state,
        // table: action.payload, // array
      }

    case 'sort':
      state.table.sort(function (a, b) { return a.age - b.age })
      return {
        ...state,
        table: [...state.table]
      }
    default:
      return state;
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initial)

  return (
    <TableData.Provider value={{ state, dispatch }}>

      <main>
        <Table></Table>
        <Team></Team>
      </main>

    </TableData.Provider>
  )
}

export default App
