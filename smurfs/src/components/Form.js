import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postSmurf} from '../actions/smurfActions';
import {v4 as uuidv4} from 'uuid';

const initialForm = {
    name: '',
    age: '',
    height: '',
    id: uuidv4()
}

const Form = props => {
const [formValue, setFormValue] = useState(initialForm);

const onChange = event => {
const name = event.currentTarget.name;
const value = event.currentTarget.value;
setFormValue({
    ...formValue,
    [name]: value
})
}

const handleSubmit = event => {
    event.preventDefault();
    props.postSmurf(formValue)
}

return (
    <div style={{display: 'flex', flexDirection: 'column', width: '20%', margin: 'auto'}}>
        <h3>Add a Smurf</h3>
        <form>
        <input
            type='text'
            placeholder='name'
            name='name'
            value={formValue.name}
            onChange={onChange}
        ></input>

        <input
            type='number'
            placeholder='age'
            name='age'
            value={formValue.age}
            onChange={onChange}
        ></input>

        <input
            type='text'
            placeholder='height'
            name='height'
            value={formValue.height}
            onChange={onChange}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
)
}


export default connect((store) => {
    return {}
}, {postSmurf})(Form)