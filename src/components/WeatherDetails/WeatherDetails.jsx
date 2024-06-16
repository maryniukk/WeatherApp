import { motion } from 'framer-motion'
import React from 'react'
import { FaWind } from 'react-icons/fa'
import { TiWeatherWindy } from 'react-icons/ti'
import { WiHumidity } from 'react-icons/wi'
const WeatherDetails = ({ weather, unitSystemToggle }) => {
	return (
		<div>
			{weather && (
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, ease: 'easeInOut' }}
					delay={500}
					animate={{ y: 0 }}
					className='pl-10 pt-5'
				>
					<p className='font-extralight text-xl'>
						{`Humidity: ${weather.main.humidity}%`}
						<WiHumidity className='inline-block' />
					</p>
					<p className='font-extralight text-xl'>
						{`Wind: ${weather.wind.speed} ${unitSystemToggle ? 'm/s' : 'mph'}`}
						<FaWind className='inline-block' />
					</p>
					<p className='font-extralight text-xl'>
						{`Pressure: ${weather.main.pressure} hPa`}
						<TiWeatherWindy className='inline-block' />
					</p>
				</motion.div>
			)}
		</div>
	)
}

export default WeatherDetails
