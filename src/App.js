import './App.css';
import Header from "./components/Header"
import ContactInfo from "./components/ConcatInfo";
import AboutInterests from "./components/AboutInterest";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <div className="App">
      <Header/>
      <ContactInfo/>
      <AboutInterests/>
      <SocialIcons/>
    </div>
  );
}

export default App;
