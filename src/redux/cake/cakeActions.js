import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (id = 1) => {
    return { type: BUY_CAKE, payload: id }
};