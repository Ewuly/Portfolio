import { useState } from 'react'
import './App.css'
import {ethers} from 'ethers'

function App() {
  const [connectionStatus, setConnectionStatus] = useState('Disconnected');

  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await ethereum.request({ method: "eth_requestAccounts" })
        setConnectionStatus('Connected');
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        console.log(accounts)
      }
      catch(err) {
        console.error(err);
      }
    } else { 
      setConnectionStatus('Please install MetaMask!');
    }
  }

  return (
    <>
      <div>
        <h1>My Porfolio</h1>
      </div>
      <div>
        <button onClick={connect}>Connect</button>
        <p>Connection Status: {connectionStatus}</p>
      </div>
    </>
  )
}

export default App
