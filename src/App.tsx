import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [number, setNumber] = useState<number | string>(5);
  const [people, setPeople] = useState<IState["people"]>([])

  const changeNumber = () => {
    setNumber("10")
  }

  return (
    <div className="App">
      <h1> People Invited to my Party</h1>
    </div>
  );
}

export default App;
