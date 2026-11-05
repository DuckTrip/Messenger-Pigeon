export default function Contacts() {
  return (
    <div className="flex w-60 flex-col bg-neutral-900">
      <div className="flex h-12 items-center border-b border-neutral-950 px-2">
        <div className="flex-auto font-bold text-white text-center">
          Chats
        </div>
        <div className="flex-initial" >
          <img src="./Pigeon.drawio.svg" alt="Pigeon" className="w-12 h-12" />
        </div>
      </div>
      <div className="flex flex-col flex-auto bg-neutral-850">
        <div className="flex-initial border-b border-neutral-950 bg-neutral-800 px-2 py-3">
          Person 1
        </div>
        <div className="flex-initial border-b border-neutral-950 bg-neutral-800 px-2 py-3">
          Person 2
        </div>
      </div>
    </div>
  )
}
