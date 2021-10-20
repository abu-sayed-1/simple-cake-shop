import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCake);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>num of cakes - {numOfCakes} from hooks</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    );
};

export default HooksCakeContainer;