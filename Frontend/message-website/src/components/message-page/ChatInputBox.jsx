export default function ChatInputBox() {

  return (
    <div className="p-4 bg-neutral-800">
      {/* Use the input element to send info to a database */}
      <input
        type="text"
        placeholder="Message"
        className="w-full rounded-lg bg-neutral-700 px-4 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none"
      />
    </div>
  )
}
