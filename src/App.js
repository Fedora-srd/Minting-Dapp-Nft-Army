import { useState } from 'react';
import './App.css';
import MainMint from "./MainMint.js";
import NavBar from "./NavBar.js";

function App() {
const[accounts, setAccounts] = useState([]);


  return (
    <div className='overlay' >
      <div className="App">
        <NavBar accounts = {accounts} setAccounts={setAccounts}/>
        <MainMint accounts = {accounts} setAccounts={setAccounts}/>
      </div>
      <div className='background-a' ></div>
      
    </div>
  );
}

export default App;
