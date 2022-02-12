import React from 'react'
import './App.css';
import F1 from './F1';

function App() {
  const [x, setX] = React.useState(9)
  return (
    <div>
      <F1 name="first"/>
      {F1({name: "second"})}
      <F1 name="third" />
      {F1({name: "forth"})}

    </div>
  );
}

export default App;
