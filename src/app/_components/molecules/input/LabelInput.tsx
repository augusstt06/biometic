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
        className="absolute rounded-lg text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[rgb(250,250,250)] dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-focus:bg-[rgb(250,250,250)] peer-focus:dark:bg-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {title}
      </label>
    </div>
  )
}
