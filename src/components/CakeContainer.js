import React from 'react';
import { connect } from "react-redux";
import { buyCake } from '../redux/cake/cakeActions';

const CakeContainer = (props) => {
    return (
        <div>
            <h1>this is Cake Shop- {props.numOfCake}</h1>
            <button onClick={props.buyCake}>buy cakes</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfCake: state.cake.numOfCake
    }
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);