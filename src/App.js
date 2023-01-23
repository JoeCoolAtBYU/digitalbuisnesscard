import './App.css';
import Header from "./components/Header"
import ContactInfo from "./components/ConcatInfo";
import SocialIcons from "./components/SocialIcons";
import {useState, useEffect} from "react";

function App() {
  const [theme, setTheme] = useState('light');
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
      <button onClick={toggleTheme}>ToggleTheme</button>
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
