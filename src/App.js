import './App.css';
import React, { useEffect, useState, useCallback, useMemo } from 'react';
import ResourceData from './ResourceData';
import List from './List';

export default function App() {
  const [resourceType, setresourceType] = useState('posts')
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)
  var doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyle = useMemo(() => {
    return({
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    })
  }, [dark])

  useEffect(() => {
    console.log('Theme changed')
  }, [themeStyle])

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])
  return (
    <div style={themeStyle}>
      <button onClick={() => setresourceType('posts')}>Posts</button>
      <button onClick={() => setresourceType('comments')}>Comments</button>
      <button onClick={() => setresourceType('albums')}>Albums</button>
      <h1>{resourceType}</h1>
      <h1><ResourceData resourceType={resourceType} /></h1>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div>{ doubleNumber }</div>
      <List getItems={getItems} />
    </div>
  );
}


function slowFunction(num){
  for(var i = 0; i < 1000000000; i++){}
  return num*2;
}


 