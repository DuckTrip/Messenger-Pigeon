import { useRef, useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

export default function ChatInputBox() {
  
  const [text, setText] = useState(''); // text value starts as blank
  const [isConnected, setIsConnected] = useState(false); // Our processing socket does not auto connect
  const clientRef = useRef(null);

  // UseEffect is called when the webpage is loaded
  useEffect(() => {
    const client = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      reconnectDelay: 5000,

      onConnect: () => {
        setIsConnected(true);
      },
      onDisconnect: () => {
        setIsConnected(false);
      },
    });

    client.activate();
    clientRef.current = client;
    
    return () => {
      client.deactivate();
    }
  });
  const handleSend = async (e) => {
    e.preventDefault();

    clientRef.current.publish({
      destination: null, // where does this go to in the controller
      body: JSON.stringify(text), // If we're sending as a JSON file
    });
    setText('');
  };

  return (
    <div className="p-4 bg-neutral-800">
      {/* Use the form input element to send info to a database */}
      <form onSubmit={handleSend} className="flex grow gap-[2px]">
        {/* One-line textbox */}
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Message"
          className="w-full rounded-lg bg-neutral-700 px-4 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
        />
        {/* file attachent */}
        <label className="relative inline-flex items-center justify-center w-10 h-10 px-4 py-2 rounded-full bg-neutral-700 cursor-pointer hover:bg-neutral-800">
          +
          <input
            type="file"
            id="fileSelect"
            name="fileSelect"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </label>
      </form>
    </div>
  )
}
