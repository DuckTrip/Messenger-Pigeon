
// Using tailwind formating
function App() {
  return (
    // Main full-screen wrapper 
    <div className="flex h-dvh w-dvw overflow-hidden font-sans text-gray-200 antialiased">

      {/* Rectangle box to have clickable icons */}
      <div className="flex w-18 flex-col items-center gap-2 bg-neutral-950 py-3">

        {/* Clickable circle with "Home" inside it*/}
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-indigo-500 text-white font-bold transition-all duration-200 hover:rounded-2xl">
          Home
        </div>

        {/* Small line to separate home button from others */}
        <div className="h-[2px] w-8 bg-neutral-800 rounded my-1">
        </div>

        {/* Clickable circle with "DM" inside it */}
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-neutral-800 text-gray-400 font-bold transition-all duration-200 hover:bg-indigo-500 hover:rounded-2xl">
          DM
        </div>
      </div>

      {/* Rectangle column holding options */}
      <div className="flex w-60 flex-col bg-neutral-900">

        {/* Header */}
        <div className="flex h-12 items-center border-b border-neutral-950 px-4 font-bold text-white shadow-sm">
          Direct Message
        </div>

        {/* Options */}
        <div className="flex-1 overflow-y-auto px-2 py-3 flex flex-col gap-[2px]">
          <div className="rounded px-2 py-1 text-sm font-medium text-gray-400 cursor-pointer bg-neutral-800 text-white">
            Person 1
          </div>
          <div className="rounded px-2 py-1 text-sm font-medium text-gray-400 cursor-pointer hover:bg-neutral-800/50 hover:text-gray-200">
            Person 2
          </div>
        </div>

      </div>

      {/* Chat area */}
      <div className="flex flex-1 flex-col bg-neutral-800">

        {/* Header for chatbox */}
        <div className="flex h-12 items-center border-b border-neutral-950 px-4 font-bold text-white shadow-sm">
          Person 1 chat
        </div>
      </div>
    </div>
  )
}

export default App
