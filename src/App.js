
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [text, setText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "#3b4045"

    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    <Router basename={process.env.PUBLIC_URL}>

      <div className='container'>
        <Navbar
          title="UtilText"
          home="HOME"
          about={"About"}
          searchText={text}
          setSearchQuery={setSearchQuery}
          mode={mode}
          toggleMode={toggleMode}
        />


      </div>
      <Routes>
        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/"

          element={
            <Textform
              heading="TEXT BOX"
              text={text}
              setText={setText}
              searchQuery={searchQuery}
              mode={mode}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
