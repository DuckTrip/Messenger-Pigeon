import Contacts from "./components/message-page/Contacts"
import ChatBox from "./components/message-page/ChatBox"
// Using tailwind formating
function App() {
  return (
    // Main full-screen wrapper 
    <div className="flex h-dvh w-dvw overflow-hidden font-sans text-gray-200 antialiased">

      <Contacts />
      <ChatBox />

    </div>
  )
}

export default App
