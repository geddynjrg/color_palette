import React from 'react';
import './App.css'; // Import your CSS file
import ColorContrastChecker from './components/colorContrastChecker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Contrast Checker</h1>
      </header>
      <main>
        <ColorContrastChecker />
      </main>
    </div>
  );
}

export default App;
