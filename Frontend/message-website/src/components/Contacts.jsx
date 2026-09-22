export default function Contacts() {
  return (
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

  )
}
