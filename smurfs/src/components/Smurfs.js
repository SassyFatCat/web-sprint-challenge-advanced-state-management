import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/smurfActions';

const Smurfs = props => {
useEffect(() => {
    props.getSmurfs()
}, [])

return (
    <div>
        <h2>The Smurfs</h2>
        {props.smurfs.map(smurf => {
            return <p key={smurf.id}>{smurf.name}</p>
        })}
    </div>
)
}

export default connect(state => {
    return {
        smurfs: state.smurfs
    }
}, {getSmurfs})(Smurfs);