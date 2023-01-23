import './App.css';
import Header from "./components/Header"
import ContactInfo from "./components/ConcatInfo";
import SocialIcons from "./components/SocialIcons";
import {useState, useEffect} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <div className="togg" >
        <DarkModeToggle
          onChange={()=>toggleTheme()}
          checked={theme==='dark'}
          size={80}
        />
      </div>
      <Header theme={theme}/>
      <ContactInfo theme={theme}/>
      <SocialIcons theme={theme}/>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css';
// function App() {
//   const [theme, setTheme] = useState('light');
//   const toggleTheme = () => {
//     if (theme === 'light') {
//       setTheme('dark');
//     } else {
//       setTheme('light');
//     }
//   };
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);
//   return (
//     <div className={`App ${theme}`}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <h1>Hello, world!</h1>
//     </div>
//   );
// }
// export default App;
