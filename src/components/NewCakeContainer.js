import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

const NewCakeContainer = () => {
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();
    const cakeState = useSelector(state => state.cake.numOfCake)
    return (
        <div>
            <h2>this is new Contain value {cakeState}</h2>
            <input type="text" name="" value={number} onChange={(e) => setNumber(e.target.value)} id="" />
            <button onClick={() => dispatch(buyCake(number))}>buy {number} cake</button>
        </div>
    );
};

export default NewCakeContainer;