import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Header from './Header/Header'
import WeatherDetails from './WeatherDetails/WeatherDetails'
import WeatherInfo from './WeatherInfo/WeatherInfo'

const WeatherCard = ({
	getWeatherApi,
	unitSystemToggle,
	weather,
	fahrenheit,
	city,
	setCity,
}) => {
	const [changeScreen, setChangeScreen] = useState(false)
	const [toggleSystem, setToggleSystem] = useState(false) // смена системы F/C

	const handleCityChange = e => {
		setCity(e.target.value)
	}

	const handleGetWeather = () => { // проверка на пустое поле
		if (city.trim() === '') {
			return
		}
		getWeatherApi(city)
	}

	return (
	<div className='flex items-center justify-center min-h-screen'>
		<div className='w-[900px] h-[700px] bg-[#fff] rounded-3xl text-[#111] dark:bg-[#111015]'>
			{changeScreen && (
				<Header
						handleCityChange={handleCityChange}
						handleGetWeather={handleGetWeather}
						unitSystemToggle={unitSystemToggle}
						toggleSystem={toggleSystem}
						setToggleSystem={setToggleSystem}
				/>
				)}
				{!weather && (
					<div className='text-center justify-center flex flex-col mt-20'>
						<div className='flex flex-col justify-center'>
							{!changeScreen && (
								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 1.5, ease: 'easeInOut' }}
								>
									<motion.h1
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, ease: 'easeInOut' }}
										className='text-4xl font-extralight text-center justify-center text-[#111] dark:text-[#fff]'
										animate={{ y: 80 }}
									>
										Hi👋🏻, and welcome to the Weather App🌦️!
									</motion.h1>
									<div>
										<div className='mt-[40px]'>
											<motion.button
												onClick={() => setChangeScreen(true)}
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{ duration: 1, ease: 'easeInOut' }}
												animate={{ y: 60 }}
												className='btn font-extralight text-xl bg-[#fff]
												text-[#111] hover:bg-[#f0f0f0] dark:bg-[#1B1B1D] dark:text-[#fff] dark:hover:bg-[#323232]'
											>
												Get Started
											</motion.button>
										</div>
									</div>
								</motion.div>
							)}
						</div>
					</div>
				)}
				<WeatherInfo toggleSystem={toggleSystem} weather={weather} fahrenheit={fahrenheit} />
				<WeatherDetails weather={weather} unitSystemToggle={unitSystemToggle} />
			</div>
		</div>
	)
}

export default WeatherCard
