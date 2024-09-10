import { type ChangeEvent } from 'react'

import Button from '@/app/_components/atoms/button/Button'
import LabelInput from '@/app/_components/molecules/input/LabelInput'

type Props = {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
  clickHandler: () => void
  value: string
}
export default function AiInputForm(props: Props) {
  const { changeHandler, clickHandler, value } = props
  return (
    <div className="sort-row-flex justify-center w-2/3 space-x-3 fixed top-56 left-1/2 -translate-x-1/2">
      <LabelInput
        title="search"
        className="w-2/3"
        onChange={changeHandler}
        value={value}
      />
      <Button
        title="검색"
        className="bg-[#588ac0] px-4 py-3 rounded-lg hover:bg-[#476e99] simple-transition"
        onClick={clickHandler}
      />
    </div>
  )
}
