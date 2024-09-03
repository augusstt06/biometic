import Clouds from '@/app/_components/atoms/icon/clouds/Clouds'
import Pinwheel from '@/app/_components/atoms/icon/pinwheel/Pinwheel'
import Progressbar from '@/app/_components/atoms/progressbar/Progressbar'
import { useWeatherStore } from '@/app/_store/weatherData'
type TdetailData = {
  label: string
  type: 'temperature' | 'humidity'
  value: number | undefined
}
export default function ExtraWeatherInfoForm() {
  const { weather } = useWeatherStore()
  const detailData: TdetailData[] = [
    { label: '체감온도', type: 'temperature', value: weather?.main.feels_like },
    { label: '최고 온도', type: 'temperature', value: weather?.main.temp_max },
    { label: '최저 온도', type: 'temperature', value: weather?.main.temp_min },
    { label: '습도', type: 'humidity', value: weather?.main.humidity },
  ]
  return (
    <div className="bg-white bg-opacity-30 rounded-xl grid grid-cols-2 grid-row-3 h-72">
      {detailData.map((data) => (
        <span className="sort-col-flex justify-around px-5" key={data.label}>
          <p className="text-lg">{data.label}</p>
          <Progressbar type={data.type} value={data.value} />
        </span>
      ))}

      <span className="sort-col-flex justify-around px-5">
        <p className="text-lg">구름 양</p>
        <Clouds cloudiness={weather?.clouds.all} />
      </span>
      <span className="sort-col-flex justify-around px-5">
        <p className="text-lg">바람 속도</p>
        <Pinwheel speed={weather?.wind.speed} />
      </span>
    </div>
  )
}
