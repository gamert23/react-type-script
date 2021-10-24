import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
  const [number, setNumber] = useState<number | string>(5);
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: 'Mason Mount',
      age: 22,
      url: 'https://ga.lnwfile.com/aviu3j.jpg',
      note: 'Hatrick Hero'
    }
  ])

  const changeNumber = () => {
    setNumber("10")
  }

  return (
    <div className="App">
      <h1> People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
