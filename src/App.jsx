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
        original : [...state.original, x],
        table: [...state.table, x], // element
      }
    case 'remove':
      return {
        ...state,
        table: action.payload, // array
      }

    case 'disable':
      return {

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
