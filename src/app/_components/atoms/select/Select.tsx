import { type SelectHTMLAttributes } from 'react'

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  selectArr: string[]
  changeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Select(props: Props) {
  const { selectArr, changeHandler, className } = props
  return (
    <select className={className} onChange={changeHandler}>
      {selectArr.map((data: string) => (
        <option key={data} value={data}>
          {data}
        </option>
      ))}
    </select>
  )
}
