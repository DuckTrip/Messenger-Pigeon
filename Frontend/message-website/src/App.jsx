import Contacts from "./components/message-page/Contacts"
import ChatBox from "./components/message-page/ChatBox"
import socket from "./socket"
import { useState, useEffect } from "react"

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

    // Main full-screen wrapper 
    <div className="flex h-dvh w-dvw overflow-hidden font-sans text-gray-200 antialiased">

      <Contacts />
      <ChatBox />

    </div>
  )
}

export default App
