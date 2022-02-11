import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Counter from './Counter';
import Header from './Header';
import Form from './Form';
import Another from './AnotherComponent';


function App() {

  const user = useSelector(store => store.user);
  console.log('In App.js, User:', user);


  return (
    <div className="App">
      < Header />
      < Counter />
      < Form />
      < Another />
    </div>
  );
}

export default App;

