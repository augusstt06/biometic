import axios from 'axios'

type Props = {
  inputValue: string
}

export const fetchingOpenAi = async ({ inputValue }: Props) => {
  try {
    const { data } = await axios.post('/api/gpt', { inputValue })
    return data
  } catch (err) {
    alert(err)
  }
}
