import React, { useState } from 'react';

function App() {
  // const stateArray = useState('hello')
  // const value = stateArray[0] // 'hello'
  // const setValue = stateArray[1] // function () { // changes the value }

  const [value, setValue] = useState('hello')

  function sayClick () {
    console.log('click')

    if (value === 'hello') {
      setValue('goodbye')
    } else {
      setValue('hello')
    }
  }

  return <main>
    {value}

    <button onClick={sayClick}>
      Click me
    </button>

    <button
      onClick={
        () => console.log('inline arrow')
      }
    >
      <img width='400px' height='200px' src='https://miro.medium.com/max/4000/1*qSe6kCCaR4HVBrwNOEjH0Q.jpeg' />
    </button>
  </main>
}

export default App;
