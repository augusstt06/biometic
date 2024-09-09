type Props = {
  type: 'req' | 'res'
  text: string
}

export default function Bubble(props: Props) {
  const { type, text } = props
  return (
    <div className="relative max-w-xs p-4 bg-blue-500 text-white rounded-lg">
      <p>{text}</p>
      {type === 'req' ? (
        <div className="absolute top-0 left-0 w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 rotate-45"></div>
      ) : (
        <div className="absolute bottom-0 right-0 w-3 h-3 transform translate-x-1/2 translate-y-1/2 bg-blue-500 rotate-45"></div>
      )}
    </div>
  )
}
