import logo from './logo.svg';
import './App.css';

import Navbar from './Navbar.jsx';
import Navbar from './Navbar.css';
function App() {
  const hi=true;
  const styles={
    "color": "purple",
    "background-color": "orange",
  }
  const styles2={
    "color": "solid black",
    "background-color": "Green",
  }
  return (
    <div>
      <Navbar />
      <center>
      <h1 style={styles}>sdfghjk hello h1</h1>
      <h1 style={styles2}>sdfghjk hello h6</h1>
      </center>
    </div>
     
  );
}

export default App;