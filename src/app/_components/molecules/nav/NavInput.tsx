import Button from '../../atoms/button/Button'
import LabelInput from '../input/LabelInput'

type Props = {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
  clickHandler: () => Promise<void>
}

export default function NavInput(props: Props) {
  const { changeHandler, clickHandler } = props
  return (
    <section className=" col-start-2 col-span-3 place-content-center sort-row-flex gap-4">
      <LabelInput
        className="w-2/3"
        title="New Location"
        onChange={changeHandler}
      />
      <Button
        title="Search"
        className={`px-4 py-2 rounded-lg border-[#588ac0] bg-[#588ac0] simple-transition hover:bg-[#476e99]`}
        onClick={() => {
          void clickHandler()
        }}
      />
    </section>
  )
}
