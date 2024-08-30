import { type InputHTMLAttributes } from 'react'

import Select from '@/app/_components/select/Select'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  title: string
  selectArr: string[]
  selectChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
export default function InputWithSelect(props: Props) {
  const { title, value, onChange, selectChangeHandler, className, selectArr } =
    props
  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        id={title}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=""
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={title}
        className="absolute rounded-lg text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[rgb(250,250,250)] dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-focus:bg-[rgb(250,250,250)] peer-focus:dark:bg-gray-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {title}
      </label>
      <Select
        changeHandler={selectChangeHandler}
        selectArr={selectArr}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-2 py-2 rounded-xl bg-[#fff] text-[#2e2e2e] focus:outline-none"
      />
    </div>
  )
}
