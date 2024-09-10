import { type InputHTMLAttributes } from 'react'

import Input from '@/app/_components/atoms/input/Input'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  title: string
}
export default function LabelInput(props: Props) {
  const { title, value, onChange, className } = props
  return (
    <div className={`relative ${className}`}>
      <Input value={value} onChange={onChange} title={title} />
      <label
        htmlFor={title}
        className="absolute rounded-lg text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-opacity-30 px-2 peer-focus:px-2 peer-focus:text-[#588ac0] peer-focus:bg-white peer-focus:bg-opacity-30 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {title}
      </label>
    </div>
  )
}
