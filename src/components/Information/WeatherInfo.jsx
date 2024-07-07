	import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri'
import weatherIconArray from '/src/components/Information/IconArray.js'

const WeatherInfo = ({ weather, fahrenheit,toggleSystem, getWeatherForecastApi }) => {
	const [foundIcon, setFoundIcon] = useState(null)
const weatherIcon = () => {
	const found = weatherIconArray.find(element => element.id === weather.weather[0].icon)
		setFoundIcon(found ? found.icon : null)
	}
	useEffect(() => {
		if (weather && weatherIconArray) {
				weatherIcon();
		}
		}, [weather]);

	const handleGetWeather = (city) => { // проверка на пустое поле
		if (city.trim() === '') {
			return
		}
		getWeatherForecastApi(city)
	}
return (
  <div className="pt-1 pl-10 pr-10">
    {weather && (
      <div className="flex justify-between">

		  <motion.div
			  initial={{opacity: 0}}
			  whileInView={{opacity: 1}}
			  transition={{duration: 1, ease: 'easeInOut'}}
			  delay={500}
			  animate={{y: 0}}
		  >

			  <h2 className="text-5xl font-medium pb-2 dark:text-[#FEFEFE]">{weather.name}</h2>
			  <p className="text-2xl pb-2 font-extralight flex dark:text-[#FEFEFE]">
				  {weather.weather && weather.weather[0].description}
			  </p>
			  <div className="flex">
				  <p className="text-6xl font-thin pt-1 flex dark:text-[#FEFEFE]">
					  {`${Math.round(weather.main.temp)}`}
					  {fahrenheit ? (
						  <RiFahrenheitLine className="text-2xl font-thin "/>
					  ) : (
						  <RiCelsiusLine className="text-2xl font-thin "/>
					  )}
				  </p>
			  </div>
		  </motion.div>
		  <div className="pr-8">
			  {foundIcon && <img className="w-[100px] h-[160px]" src={foundIcon} alt="Weather icon"/>}
		  </div>
	  </div>
	)}
  </div>
)
}

	export default WeatherInfo


