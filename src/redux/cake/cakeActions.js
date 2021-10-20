import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (id) => {
    return { type: BUY_CAKE, payload: id }
};