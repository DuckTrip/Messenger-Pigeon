import OptionsSidebar from "./components/OptionsSidebar"
import Contacts from "./components/Contacts"
import ChatArea from "./components/ChatArea"
import PigeonDecal from "./components/PigeonDecal"
import IphoneMainScreen from "./components/IphoneMainScreen"

// Using tailwind formating
function App() {
  return (
    // Main full-screen wrapper 
    <div className="relative flex flex-col h-dvh w-dvw overflow-hidden font-sans text-gray-200 antialiased">
      {/* <PigeonDecal />
      <OptionsSidebar />
      <Contacts />
      <ChatArea /> */}
      <IphoneMainScreen />

    </div>
  )
}

export default App
