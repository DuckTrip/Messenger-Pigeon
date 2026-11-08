export default function Contacts() {
  return (
    <div className="flex w-60 flex-col shrink-0 bg-neutral-900"> {/* Big rectangle to hold contacts and header */}
      <div className="flex h-12 items-center border-b border-neutral-950 px-4"> {/* Header box */}
        <div className="grow font-bold text-white text-center"> {/* Text style */}
          Chats
        </div>
        <div className="flex-initial" >
          <img src="./Pigeon.drawio.svg" alt="Pigeon" className="w-12 h-12" />
        </div>
      </div>
      <div className="flex flex-col grow overflow-y-auto px-2 py-3 gap-1"> {/* Contact rectangles */}
        <button className="rounded flex-initial border-b border-neutral-950 bg-neutral-800 px-2 py-1 font-medium cursor-pointer text-white">
          Person 1
        </button>
        <button className="rounded flex-initial border-b border-neutral-950 bg-neutral-800 px-2 py-1 font-medium text-gray-400 cursor-pointer hover:bg-neutral-800/50 hover:tex-gray-200">
          Person 2
        </button>
      </div>
    </div>
  )
}
