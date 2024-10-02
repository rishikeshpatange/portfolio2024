import { useState } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Preloader from './Components/Preloader';
import Fotter from './Components/Fotter';

function App() {


  const [theme, setTheme] = useState('light'); // Default theme is light
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : prevTheme === 'dark' ? 'blue': 'light'));
  };

  console.log('Theme in Header:', theme); // Before passing to Home

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Preloader/>
      <Home theme={theme}/>
      <Fotter/>

    </div>
  );
}

export default App;
