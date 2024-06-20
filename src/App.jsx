import React, { useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

const App = ({ darkMode }) => {
	const [fahrenheitToggle, setFahrenheitToggle] = useState(false)
	const [units, setUnits] = useState('metric')
	const [weather, setWeather] = useState(null)
	const [weatherValue, setWeatherValue] = useState(false)

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

			setWeather(result)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div>
			<div className={`${`bg-[#eeeeee] dark:bg-slate-900`} h-screen`}>
				<div className='h-screen flex items-center justify-center'>
					<WeatherCard
						getWeatherApi={getWeatherApi}
						unitSystemToggle={unitSystemToggle}
						weather={weather}
						fahrenheit={fahrenheitToggle}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
