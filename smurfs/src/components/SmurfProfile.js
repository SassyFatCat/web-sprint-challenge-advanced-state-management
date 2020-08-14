import React from 'react';
import {connect} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

const SmurfProfile = props => {
const history = useHistory();
const param = useParams().id;
const smurfInQuestion = props.smurfs.find(smurf => smurf.id === parseInt(param, 10))

return (
    <div>
        <button onClick={event => {
            event.preventDefault();
            history.push('/')
        }} >Back</button>
        <h2>Profile</h2>
        <div style={{border: '2px solid black', backgroundColor: 'lightBlue', color: 'red', width: '30%', margin: '2% auto'}}>
            <h4>{smurfInQuestion.name}</h4>
            <h5>{smurfInQuestion.age}</h5>
            <p>{smurfInQuestion.height}</p>
        </div>
    </div>
)
}

export default connect(state => {
    return {
        smurfs: state.smurfs
    }
}, {})(SmurfProfile)