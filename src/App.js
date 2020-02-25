import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  // const stateArray = useState('hello')
  // const value = stateArray[0] // 'hello'
  // const setValue = stateArray[1] // function () { // changes the value }

  const [src, setSrc] = useState('')

  async function getDog () {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log('response test:', response)
    console.log('response.data test:', response.data)
    console.log('response.data.message test:', response.data.message)

    setSrc(response.data.message)
  }

  const effect = () => getDog()

  useEffect(effect, [])

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
      onClick={getDog}
    >
      <img width='300px' height='200px' src={src} />
    </button>
  </main>
}

export default App;
