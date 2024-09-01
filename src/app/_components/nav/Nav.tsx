import Button from '@/app/_components/button/Button'
import Input from '@/app/_components/input/Input'
import { useCacheStore } from '@/app/_store/cachingData'

export default function Nav() {
  const { isCachingDataExist } = useCacheStore()
  return (
    <nav
      className={`h-20 grid grid-cols-5 fixed w-full fade-in ${isCachingDataExist ? 'opacity-100' : 'opacity-0'}`}
    >
      <section className=" place-content-center text-center">
        Weather AI
      </section>
      <section className=" col-start-2 col-span-3 place-content-center sort-row-flex gap-4">
        <Input className="w-2/3" title="location" />
        <Button
          title="Search"
          className={`px-4 py-2 rounded-lg border-[#588ac0] bg-[#588ac0] simple-transition hover:bg-[#476e99]`}
        />
      </section>
      <section className=""></section>
    </nav>
  )
}
