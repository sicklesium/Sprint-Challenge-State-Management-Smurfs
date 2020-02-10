import React from "react";
import "./App.css";

import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Form from './Form';


const Smurf = props => {
    props.fetchData();
    return (
        <div className="card">
            <h1>Smurfs</h1>
            <div className="container">{props.smurfs.map(item => {
                return (
                    <div className="smurf">
                        <div>
                            <h3>{item.name}</h3>
                            <p>Age: {item.age}</p>
                            <p>Heigh: {item.height}</p>
                        </div>
                    </div>
                );
            })}</div>
            <Form />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { fetchData }
)(Smurf);