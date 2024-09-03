type Props = {
  speed: number | undefined
}

const getRotationSpeed = (speed: number | undefined) => {
  if (speed === undefined) return 0

  const calculatedSpeed = speed / 2
  return 1 / Math.min(calculatedSpeed, 60)
}

export default function WindSpeedPinwheel(props: Props) {
  const { speed } = props
  const rotationSpeed = getRotationSpeed(speed)

  return (
    <div className="relative sort-col-flex justify-center w-24 h-24 ">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animation: `spin ${rotationSpeed}s linear infinite` }}
      >
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M21 4V21H11L21 4Z"
          fill="#2F88FF"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M27 44V27H37L27 44Z"
          fill="#2F88FF"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M27 11L44 21H27L27 11Z"
          fill="#2F88FF"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M21 37L4 27H21L21 37Z"
          fill="#2F88FF"
          stroke="black"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>
      <span className="mt-3 text-xl">{speed}m/s</span>
    </div>
  )
}
