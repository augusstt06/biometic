import { type InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  title: string
}
export default function Input(props: Props) {
  const { title, value, onChange, className } = props
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
    </div>
  )
}
