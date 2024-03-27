import React from 'react'
import { TableData } from '../App'
import { useContext } from 'react'




const Team = () => {
    let age = 0;

    const { state, dispatch } = useContext(TableData)

    return (
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
    )
}

export default Team
