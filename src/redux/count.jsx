import redux from 'redux'
import {createStore} from "redux"


//actions
export function increment(){
    return {
        type: "INCREMENT"
    }
}


export function decrement(){
    return {
        type:"DECREMENT"
    }
}


function countReducer(state=0,action){
    switch(action.type){
        case "INCREMENT":
          return state + 1

        case "DECREMENT":
          return state - 1 
          
        default:
            return state  
    }
       
      
}

const store = redux.createStore(countReducer)

store.subscribe(()=> {
    console.log(store.getState())
})

export default store