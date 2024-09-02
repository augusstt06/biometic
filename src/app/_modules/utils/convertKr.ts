import { cityMap } from '@/app/_constant/cities'

export const convertEngToKr = (city: string) => {
  return cityMap[city]
}
