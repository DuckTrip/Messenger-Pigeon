import { useState } from "react";
import socket from "../socket";


export default function ChatInputBox() {

  const [text, setText] = useState('');
  const handelSend = async (e) => {
    e.preventDefault();

    socket.emit('sendMessage', {
      text,
    });
    setText('');
  };

  return (
    <div className="p-4 bg-neutral-800">
      {/* Use the form input element to send info to a database */}
      <form onSubmit={handelSend} className="flex grow gap-[2px]">
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
