import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri'
import weatherIconArray from '/src/components/Information/IconArray.js'

const WeatherInfo = ({ weather, fahrenheit, humidity }) => {
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

return (
  <div className="pt-1 pl-10 pr-10">
    {weather && (
      <div className="flex justify-center ">

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					delay={500}
					animate={{ y: 0 }}
				>


					<div className='flex justify-center'>
						{foundIcon && <img className="w-[100px] h-[160px]" src={foundIcon} alt="Weather icon" />}
					</div>
					<h2 className="text-7xl font-medium pb-2 dark:text-[#FEFEFE]">{weather.name}</h2>
					<p className="text-2xl pb-2 font-extralight flex justify-center dark:text-[#FEFEFE]">
						{weather.weather && weather.weather[0].description}
					</p>
					<div className="flex justify-center">
						<p className="text-6xl font-thin pt-1 flex dark:text-[#FEFEFE]">
							{`${Math.round(weather.main.temp)}`}
							{fahrenheit ? (
								<RiFahrenheitLine className="text-2xl font-thin " />
							) : (
								<RiCelsiusLine className="text-2xl font-thin " />
							)}
						</p>
					</div>
					<p>
						Humidity: ${weather.main.humidity}%
					</p>
					<p>
						{weather.wind.speed} {fahrenheit ? 'mph' : 'km/h'}
					</p>
				</motion.div>
			</div>
		)}
	</div>
)
}

export default WeatherInfo


