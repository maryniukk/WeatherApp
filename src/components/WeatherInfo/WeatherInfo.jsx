	import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri'
import weatherIconArray from '/src/components/WeatherInfo/IconArray.js'

const WeatherInfo = ({ weather, fahrenheit,toggleSystem }) => {

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
		<div className='pt-10'>
			{weather && (
				<div className='flex justify-between'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1, ease: 'easeInOut' }}
						delay={500}
						animate={{ y: 0 }}
					>
						<h2 className='text-5xl font-medium pl-10 pb-2 dark:text-[#FEFEFE]'>
							{weather.name}
						</h2>
						<p className='text-2xl pb-2 font-extralight pl-10 flex dark:text-[#FEFEFE]'>
							{weather.weather && weather.weather[0].description}
						</p>
						<div className='flex'>
							<p className='text-6xl font-thin pl-10 pt-1 flex dark:text-[#FEFEFE]'>
								{`${Math.round(weather.main.temp)}`}
								{fahrenheit ? (
									<RiFahrenheitLine className='text-2xl font-thin ' />
								) : (
									<RiCelsiusLine className='text-2xl ' />
								)}
							</p>
						</div>
					</motion.div>
					<div className='pr-8'>
					{foundIcon && (
         	 <img
          	className='w-[60px] h-[60px]'
         	 	src={foundIcon}
         	 	alt='Weather icon'
          />
          )}
					</div>
				</div>
			)}
		</div>
	)
}

export default WeatherInfo


