import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {increment,decrement} from './redux/count'


function App(){
    const state = useSelector(state=> state)
    console.log(state)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>{state}</h2>
            <button onClick={()=> dispatch(increment())}>increment</button>
            <button onClick={()=> dispatch(decrement())}>decrement</button>
        </div>
    )
}

export default App