import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamActions';

const IceCreamContainer = () => {
    const dispatch = useDispatch();
    const iceCreamSt = useSelector(state => state.iceCream.iceCream);
    return (
        <div>
            <h1>this is iceCreamContainer count - ${iceCreamSt}</h1>
            <button onClick={() => dispatch(buyIceCream())}>iceCream</button>
        </div>
    );
};

export default IceCreamContainer;