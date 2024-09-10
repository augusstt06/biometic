type Props = {
  type: 'temperature' | 'humidity'
  value: number | undefined
}

export default function Progressbar(props: Props) {
  const { type, value } = props
  let barColor: string
  if (type === 'temperature' && value !== undefined) {
    const maxTemperature = 40

    if (value < 0) {
      barColor = 'bg-blue-500'
    } else if (value < 15) {
      barColor = 'bg-light-blue-500'
    } else if (value < 25) {
      barColor = 'bg-green-500'
    } else {
      barColor = 'bg-red-500'
    }
    return (
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`${barColor} text-lg text-blue-100 text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${(value / maxTemperature) * 100}%` }}
        >
          {value}&#8451;
        </div>
      </div>
    )
  }
  if (type === 'humidity' && value !== undefined) {
    if (value < 10) {
      barColor = 'bg-blue-500'
    } else if (value < 20) {
      barColor = 'bg-light-blue-500'
    } else if (value < 60) {
      barColor = 'bg-green-500'
    } else {
      barColor = 'bg-red-500'
    }
    return (
      <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className={`${barColor} text-lg text-blue-100 text-center p-0.5 leading-none rounded-full`}
          style={{ width: `${value}%` }}
        >
          {value} %
        </div>
      </div>
    )
  }
}
