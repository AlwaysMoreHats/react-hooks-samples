import React, { useState } from 'react';
import SimpleSamplePage from './base/SamplePage'
import HooksSamplePage from './upgrade_hooks/SamplePage'
import NormalSamplePage from './upgrade_traditional/SamplePage'
import './App.css';

const pages = {
  Simple: SimpleSamplePage,
  Normal: NormalSamplePage,
  Hooks: HooksSamplePage
}

function App() {
  const [pageType, setPageType] = useState('Simple')
  const SamplePage = pages[pageType];

  const buttons = Object.keys(pages).map(type => (
    <button 
      className={`app-type-button${type === pageType ? ' selected' : ''}`}
      key={type}
      onClick={() => setPageType(type)}
    >
      {type}
    </button>
  ))

  return (
    <div>
      <header className="header">
        <div className="button-container">
          {buttons}
        </div>
      </header>
      <div className="App">
        <SamplePage />
      </div>
    </div>
  );
}

export default App;
