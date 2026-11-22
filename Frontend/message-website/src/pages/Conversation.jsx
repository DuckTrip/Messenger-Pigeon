import ChatBox from "../components/ChatBox";
import Contacts from "../components/Contacts";

export function Converstation() {

  return (
    // Main full-screen wrapper 
    <div className="flex h-dvh w-dvw overflow-hidden font-sans text-gray-200 antialiased">

      <Contacts />
      <ChatBox />

    </div>

  )
}
