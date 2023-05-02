/**
 * Author: Mitch Allen
 * https://mitchallen.com
 * https://scriptable.com
 */

import { useState, useEffect, useRef } from 'react';
import './App.css';
import './demo.css';

function App() {

  // Define button + dialog reference pairs

  const RefPair = () => ({ button: useRef(), dialog: useRef() })

  const refA = RefPair();
  const refB = RefPair();
  const refC = RefPair();

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

  // Define useEffect to handle click events

  useEffect(() => {

    const handleMouseDown = e => {

      let isOver = (rf) => rf.current && rf.current.contains(e.target);

      let checkOutside = function (flag, rp) {
        if (flag && !isOver(rp.button) && !isOver(rp.dialog)) {
          clearDialogs();
        }
      }

      // important to reference flags below for useEffect
      // if a flag isn't referenced this won't work for that flag
      checkOutside(showDialogA, refA);
      checkOutside(showDialogB, refB);
      checkOutside(showDialogC, refC);
    }

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleMouseDown);
    }

  }, [
    showDialogA,
    refA,
    showDialogB,
    refB,
    showDialogC,
    refC,
  ])

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

  // Layout with refd

  return (
    <div className="App">
      <div className="pair">
        <button className="item" ref={refA.button} onClick={handleClickAlpha}>A</button>
        <div id="childA" className="dialog" ref={refA.dialog} style={styleA}></div>
      </div>
      <div className="pair">
        <button className="item" ref={refB.button} onClick={handleClickBeta}>B</button>
        <div id="childB" className="dialog" ref={refB.dialog} style={styleB}></div>
      </div>
      <div className="pair">
        <button className="item" ref={refC.button} onClick={handleClickGamma}>C</button>
        <div id="childC" className="dialog" ref={refC.dialog} style={styleC}></div>
      </div>
    </div>
  );
}

export default App;
