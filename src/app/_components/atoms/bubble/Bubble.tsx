type Props = {
  type: 'chat' | 'user'
  children: React.ReactNode
}

export default function Bubble(props: Props) {
  const { type, children } = props
  return (
    <div
      className={`text-sm relative max-w-xs max-h-64 overflow-auto px-4 py-2 rounded-lg text-white break-words ${
        type === 'chat' ? 'bg-blue-500 self-start' : 'bg-gray-500 self-end'
      }`}
    >
      <p>{children}</p>
    </div>
  )
}
