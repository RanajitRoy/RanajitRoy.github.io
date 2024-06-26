import React, { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Body from './body/Body';
import { type GlobalState } from './lib/types';

function App() {
  const [globalState, setGlobalState] = useState<GlobalState>(
    {
      headerActivated:false
    }
  );

  return (
    <div className="App" style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/bg-img.png'})`
    }}>
      <Header globalState={globalState} setGlobalState={setGlobalState} />
      <Body globalState={globalState} setGlobalState={setGlobalState} />
    </div>
  );
}

export default App;
