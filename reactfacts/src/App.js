// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './styles.css'
import { useState } from 'react';
function App() {
  const [darkMode, setDarkMode]= useState(true)

  function toggleDarkMode()  {
    setDarkMode(prevMode => !prevMode)
  }

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
