import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Header from '../Header/Header.jsx'
import WeatherInfo from '../Information/WeatherInfo.jsx'
import cn from 'classnames'
import WeatherForecast from "../Forecast/WeatherForecast.jsx";
import WelcomePage from '../WelcomePage/WelcomePage.jsx'

const WeatherCard = ({
	getWeatherApi,unitSystemToggle,weather,fahrenheit,city,setCity,getWeatherForecastApi,
}) => {
	const [changeScreen, setChangeScreen] = useState(false) // переключение между экранами
	const [toggleSystem, setToggleSystem] = useState(false) // смена системы F/C
	const [selectedOption, setSelectedOption] = useState('today') // выбор прогноза

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
		//Header
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[1224px] h-[968px] bg-[#fff] rounded-3xl text-[#111] dark:bg-[#111015]">
        {changeScreen && (
          <Header
            handleCityChange={handleCityChange}
            handleGetWeather={handleGetWeather}
            unitSystemToggle={unitSystemToggle}
            toggleSystem={toggleSystem}
            setToggleSystem={setToggleSystem}
						setCity={setCity}
						getWeatherApi={getWeatherApi}
          />
        )}

        {!weather && (
					//Welcome Screen
          <div className="flex flex-col justify-center text-center mt-10">
            <div className="flex flex-col justify-center">
              <WelcomePage weather={weather} changeScreen={changeScreen} setChangeScreen={setChangeScreen}/>
            </div>
          </div>
        )}
		  {weather && (
        <div className='flex gap-5 ml-10 mb-3'>
          <div>
            <button onClick={() => setSelectedOption('today')} className={cn('font-light', 'dark:text-white',{
				'underline font-bold' : selectedOption === 'today', // Активный стиль
				'font-light': selectedOption !== 'today' // Дефолтный стиль
			})}>Today</button>
          </div>
          <div>
            <button onClick={() => setSelectedOption('5 days')} className={cn('font-light', 'dark:text-white',{
				'underline font-bold' : selectedOption === '5 days', // Активный стиль
				'font-light': selectedOption !== '5 days' // Дефолтный стиль
			})}>In 5 days</button>
          </div>
        </div>
        )}
		  {selectedOption === 'today' && weather && (
			  <WeatherInfo
			  getWeatherForecastApi={getWeatherForecastApi}
			  toggleSystem={toggleSystem}
			  weather={weather}
			  fahrenheit={fahrenheit}
		  />)}
		  {selectedOption === '5 days' && (
			  <WeatherForecast city={city}  />
		  )}
      </div>
    </div>
  )
}

export default WeatherCard
