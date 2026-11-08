import ChatInputBox from "./ChatInputBox"
export default function ChatBox() {

  return (
    <div className="flex grow flex-col bg-neutral-800"> {/* Entire Chat Stream Wrapper */}
      <div className="flex items-center h-12 border-b border-neutral-950 px-4 bg-neutral-900"> {/* Header Box */}
        <div className="flex-auto font-bold text-white text-center">
          Person 1 Chat Room
        </div>
      </div>
      <div className="flex flex-col grow overflow-y-auto p-4 justify-end gap-4"> {/* Chat Stream Wrapper starting at the bottom */}
        {/* Two chats with a small circle to the left of each chat text */}
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-indigo-400 flex-shrink-0" />
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold tex-white hover:underline cursor-pointer">Person 2</span>
              <span className="text-xs text-gray-400">Today at 12:00 PM</span>
            </div>
            <p className="text-sm text-gray-300 text-left">Hi Janice</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-violet-500 flex-shrink-0" />
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold tex-white hover:underline cursor-pointer">Person 1</span>
              <span className="text-xs text-gray-400">Today at 12:34 PM</span>
            </div>
            <p className="text-sm text-gray-300 text-left">I don't forgive you</p>
          </div>
        </div>
      </div>
      <ChatInputBox />
    </div>
  )
}
