export default function OptionsSidebar() {
  return (
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

  )

}
