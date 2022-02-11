import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  // dispatch is will send info to the store
  const dispatch = useDispatch();

  // selector grabs info we want from the store
  const count = useSelector(store => store.count);
  const user = useSelector(store => store.user);
  console.log('In Counter.js, User:', user);

  return (
    <div className="App">
      <h3>Cool Counter</h3>

      {/* Dispatching an action when a button is clicked*/}
      <button onClick={() => dispatch({ type: 'INCREASE' })}>Increase!</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>Decrease!</button>

      {/* Render the count from our redux store */}
      <p>Count: {count}</p>
      
      <hr />
    </div>
  )
};

export default Counter;
