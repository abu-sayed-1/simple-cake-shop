import { BUY_ICECREAM } from "./iceCreamTypes";

const iceCreamState = {
    iceCream: 20,
}

const iceCreamReducer = (state = iceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state, iceCream: state.iceCream - 1
            }
        default: return state
    }
};

export default iceCreamReducer;