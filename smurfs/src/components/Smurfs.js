import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/smurfActions';
import {useHistory} from 'react-router-dom';

const Smurfs = props => {
const history = useHistory();

useEffect(() => {
    props.getSmurfs()
}, [])

return (
    <div>
        <h2>The Smurfs</h2>
        <div>
        {props.smurfs.map(smurf => {
            return <p key={smurf.id} onClick={event => {
                history.push(`/${smurf.id}`)
            }} style={{border: '1px solid black', backgroundColor: 'pink', color: 'black', width: '10%', margin: '2% auto'}} >{smurf.name}</p>
        })}
        </div>
    </div>
)
}

export default connect(state => {
    return {
        smurfs: state.smurfs
    }
}, {getSmurfs})(Smurfs);