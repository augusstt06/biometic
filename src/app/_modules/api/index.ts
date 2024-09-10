import axios from 'axios'

export const fetchWeather = async (location: string) => {
  try {
    const { data } = await axios.get('/api/weather', {
      params: { location },
    })
    return data
  } catch (err) {
    alert(err)
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
