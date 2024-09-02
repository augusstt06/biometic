import Button from '@/app/_components/atoms/button/Button'
import SelectInput from '@/app/_components/molecules/input/SelectInput'
import { cityMap } from '@/app/_constant/cities'
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
    <article className="col-span-5 col-start-1 row-span-1 space-y-5 sort-col-flex">
      <div className=" min-w-60 w-1/3">
        <SelectInput
          selectChangeHandler={selectChangeHandler}
          value={value}
          className={`left-1/2 -translate-x-1/2 fade-in ${
            isBlinkComplete ? 'opacity-100' : 'opacity-0'
          }`}
          onChange={inputChangeHandler}
          title="Location"
          width="w-full"
          selectArr={selectArr}
        />
      </div>
      <Button
        title="검색"
        className={`relative px-4 py-2 rounded-lg border-[#2d7ecc] bg-[#2d7ecc] simple-transition hover:bg-[#476e99] ${locationInputValidator(value) ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => {
          void buttonClickHandler()
        }}
      />
      <div className="text-center bg-white bg-opacity-60 w-1/3 rounded-xl px-2 py-3 space-y-4 text-gray-500">
        <p className="text-xl">📌 공지</p>
        <p>
          현재 사용중인 API에서 전체 한국 도시들을 지원하지 않아 일부 도시들만
          검색이 가능합니다.
        </p>
        <p>아래 버튼을 누르면 현재 지원중인 도시가 표시됩니다.</p>
        <details>
          <summary className="cursor-pointer hover:text-red-700 simple-transition">
            도시 확인하기
          </summary>
          <ul className="flex flex-wrap list-none p-0 gap-3 pt-5 px-2 text-center justify-center">
            {Object.keys(cityMap).map((data) => (
              <li key={data} className="w-1/6 ">
                {data}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </article>
  )
}
