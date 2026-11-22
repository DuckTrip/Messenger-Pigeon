import { HashRouter as Router, Routes, Route } from "react-router-dom";
import socket from "./socket"
import { useState, useEffect } from "react"
import { Conversation } from "./pages/Conversation";

// Using tailwind formating
function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  });


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Conversation />} />
      </Routes>
    </Router >
  )
}

export default App
