import Button from '@/app/_components/atoms/button/Button'
import LabelInput from '@/app/_components/molecules/input/LabelInput'
import { useCacheStore } from '@/app/_store/cachingData'

export default function Nav() {
  const { isCachingDataExist } = useCacheStore()
  return (
    <nav
      className={`h-20 grid grid-cols-5 fixed w-full fade-in bg-white ${isCachingDataExist ? 'opacity-100' : 'opacity-0'} bg-opacity-30`}
    >
      <section className=" place-content-center text-center">
        Weather AI
      </section>
      <section className=" col-start-2 col-span-3 place-content-center sort-row-flex gap-4">
        <LabelInput className="w-2/3" title="New Location" />
        <Button
          title="Search"
          className={`px-4 py-2 rounded-lg border-[#588ac0] bg-[#588ac0] simple-transition hover:bg-[#476e99]`}
        />
      </section>
      <section className=""></section>
    </nav>
  )
}
