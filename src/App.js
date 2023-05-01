import { useState } from 'react';
import './App.css';
import './demo.css';

function App() {

    // Define dialog display flags

  const [showDialogA, setShowDialogA] = useState(false);
  const [showDialogB, setShowDialogB] = useState(false);
  const [showDialogC, setShowDialogC] = useState(false);

    // Define function to clear all dialogs

  const clearDialogs = () => {
    setShowDialogA(false)
    setShowDialogB(false)
    setShowDialogC(false)
  }

    // Define handler for clicking the first button

  const handleClickAlpha = (event) => {
    clearDialogs()
    setShowDialogA(!showDialogA)
  };

  // Define handler for clicking the second button

  const handleClickBeta = (event) => {
    clearDialogs()
    setShowDialogB(!showDialogB)
  };

  // Define handler for clicking the third button

  const handleClickGamma = (event) => {
    clearDialogs()
    setShowDialogC(!showDialogC)
  };

    // Define a style to control the display of the first dialog

  let styleA = {
    display: showDialogA ? 'block' : 'none',
  }

  // Define a style to control the display of the second dialog

  let styleB = {
    display: showDialogB ? 'block' : 'none',
  }

  // Define a style to control the display of the third dialog

  let styleC = {
    display: showDialogC ? 'block' : 'none',
  }


  return (
    <div className="App">
      <div class="pair">
        <button class="item" onClick={handleClickAlpha}>A</button>
        <div id="childA" class="dialog" style={styleA}></div>
      </div>
      <div class="pair">
        <button class="item" onClick={handleClickBeta}>B</button>
        <div id="childB" class="dialog" style={styleB}></div>
      </div>
      <div class="pair">
        <button class="item" onClick={handleClickGamma}>C</button>
        <div id="childC" class="dialog" style={styleC}></div>
      </div>
    </div>
  );
}

export default App;
