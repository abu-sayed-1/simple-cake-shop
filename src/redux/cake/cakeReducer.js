import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCake: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            console.log(action.payload)
            return { ...state, numOfCake: state.numOfCake - action.payload }
        default: return state
    }
}

export default cakeReducer