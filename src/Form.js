import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Form = () => {

    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [food, setFood] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    console.log('In Form.js, User:', user);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'NEW_USER',
            payload: {
                name: name,
                profession: profession,
                food: food,
            }
        });
        setName('');
        setProfession('');
        setFood('');
    }

    return (
        <div>
            <h3>Fantastic Form</h3>
            <form onSubmit={handleSubmit} >
                <label onClick={() => setName('Karsten')} htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/><br /><br />
                <label onClick={() => setProfession('Consultant')} htmlFor="profession">Profession:</label>
                <input type="text" id="profession" value={profession} onChange={(e) => setProfession(e.target.value)}/><br /><br />
                <label onClick={() => setFood('Tacos')} htmlFor="profession">Favorite Food:</label>
                <input type="text" id="food" value={food} onChange={(e) => setFood(e.target.value)}/><br /><br />
                <button type="submit">Submit</button>
            </form>
           
        </div>
    );
};

export default Form;