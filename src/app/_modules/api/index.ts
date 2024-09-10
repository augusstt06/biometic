import axios from 'axios'

export const fetchWeather = async (location: string) => {
  try {
    const { data } = await axios.get('/api/weather', {
      params: { location },
    })
    return data
  } catch (err) {
    throw new Error('도시를 찾을수 없습니다!')
  }
}

export const fetchOpenAi = async (inputValue: string) => {
  try {
    const { data } = await axios.post('/api/gpt', { inputValue })

    return data.choices
  } catch (err) {
    alert(err)
  }
}
