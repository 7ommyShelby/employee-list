import React, { useCallback, useReducer, useState } from 'react'
import data from './data.json'

import Table from './Table'
import Team from './Team'


const Home = () => {

  let age = 0;

  return (
    <main>
      <div className='left'>
        <h1>Employes</h1>
        <div className='list'>
          {state.original.map((e, idx) => {
            return (
              <>
                <div className="tab" key={idx + "list"}>
                  <h3>Name : {e.first_name}</h3>
                  <p>Age : {e.age}</p>
                  <button onClick={() => {
                    dispatch({ type: 'add', payload: e })
                  }}>Add</button>
                </div>
              </>
            )
          })}
        </div>

      </div>

      <div className='right'>
        <h1>Team</h1>
        <div className="team">
          {state.table.map((e, idx) => {

            return (
              <>
                <div className="tab">
                  <h3>Name : {e.first_name}</h3>
                  <p>Age : {e.age}</p>
                  <button onClick={() => {
                    state.table.splice(idx, 1)
                    dispatch({ type: 'remove', payload: state.table })
                  }}>Remove</button>
                </div>
              </>
            )
          })}
          {
            state.table.map((e) => {
              age += e.age
            })
          }
          <h4>Avg age :{age / state.table.length}</h4>
        </div>
      </div>
    </main>
  )
}

export default Home
