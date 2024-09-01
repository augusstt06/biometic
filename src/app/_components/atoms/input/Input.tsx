import { type InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  title: string
}

export default function Input(props: Props) {
  const { title, value, onChange } = props
  return (
    <input
      type="text"
      id={title}
      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=""
      value={value}
      onChange={onChange}
    />
  )
}
