import React, { useState } from 'react'
import WeatherCard from './components/WeatherCard'

import './App.css'
const App = () => {
	const [fahrenheitToggle, setFahrenheitToggle] = useState(false)
	const [units, setUnits] = useState('metric')
	const [weather, setWeather] = useState(null)

	const unitSystemToggle = () => {
		setFahrenheitToggle(!fahrenheitToggle)
		setUnits(fahrenheitToggle ? 'metric' : 'imperial')
	}

	const API_KEY = 'b7ec4e74a337a34d102c47eb43de2ed5'
	const api = {
		base: 'https://api.openweathermap.org/data/2.5/',
	}

	const getWeatherApi = async city => {
		try {
			const response = await fetch(
				`${api.base}weather?q=${city}&units=${units}&APPID=${API_KEY}`
			)
			const result = await response.json()
			console.log(result)
			setWeather(result)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className={`${'bg-[#eeeeee]'} h-screen`}>
			<div className='h-screen flex items-center justify-center'>
				<WeatherCard
					getWeatherApi={getWeatherApi}
					unitSystemToggle={unitSystemToggle}
					weather={weather}
					fahrenheit={fahrenheitToggle}
				/>
			</div>
		</div>
	)
}

export default App
