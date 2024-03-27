import React from 'react'
import { TableData } from '../App'
import { useContext } from 'react'




const Table = () => {

    const { state, dispatch } = useContext(TableData)



    // console.log(state.table);

    return (
        <div className='left'>
            <h1>Employes</h1>
            <div className='list'>
                {state.original.map((e) => {

                    return (
                        <>
                            <div className={e.condition ? "red" : "tab"}>
                                <h3>Name : {e.first_name}</h3>
                                <p>Age : {e.age}</p>
                                <button disabled={e.condition} onClick={() => {
                                    dispatch({ type: 'add', payload: e.id })
                                }}>Add</button>
                            </div>
                        </>
                    )
                })}
            </div>

        </div>
    )
}

export default Table
