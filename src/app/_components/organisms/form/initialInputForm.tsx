import Button from '@/app/_components/atoms/button/Button'
import SelectInput from '@/app/_components/molecules/input/SelectInput'
import { locationInputValidator } from '@/app/_modules/utils/inputValidate'

type Props = {
  inputProps: {
    selectChangeHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void
    inputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    selectArr: string[]
    value: string
    isBlinkComplete: boolean
  }
  buttonProps: {
    buttonClickHandler: () => Promise<void>
  }
}
export default function InitialInputForm(props: Props) {
  const {
    selectChangeHandler,
    inputChangeHandler,
    selectArr,
    value,
    isBlinkComplete,
  } = props.inputProps
  const { buttonClickHandler } = props.buttonProps
  return (
    <article className="col-span-5 col-start-1 row-span-1 space-y-5">
      <div>
        <SelectInput
          selectChangeHandler={selectChangeHandler}
          value={value}
          className={`left-1/2 min-w-60 w-1/3 -translate-x-1/2 fade-in ${
            isBlinkComplete ? 'opacity-100' : 'opacity-0'
          }`}
          onChange={inputChangeHandler}
          title="Location"
          width="w-full"
          selectArr={selectArr}
        />
      </div>
      <Button
        title="Apply"
        className={`relative px-4 py-2 left-1/2 -translate-x-1/2 rounded-lg border-[#588ac0] bg-[#588ac0] simple-transition hover:bg-[#476e99] ${locationInputValidator(value) ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => {
          void buttonClickHandler()
        }}
      />
    </article>
  )
}
