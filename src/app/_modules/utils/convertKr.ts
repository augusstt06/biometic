import { cityMap } from '@/app/_constant/cities'

export const convertEngToKr = (city: string) => {
  if (cityMap[city] === undefined) {
    return city
  }
  return cityMap[city]
}
