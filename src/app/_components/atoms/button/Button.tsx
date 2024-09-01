import { type ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string
}

export default function Button(props: Props) {
  const { title, className, onClick } = props
  return (
    <button className={className} onClick={onClick}>
      {title}
    </button>
  )
}
