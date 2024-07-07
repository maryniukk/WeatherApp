import { motion } from 'framer-motion'
import React from 'react'
import { FaWind } from 'react-icons/fa'
import { TiWeatherWindy } from 'react-icons/ti'
import { WiHumidity } from 'react-icons/wi'
import {GoSearch} from "react-icons/go";
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
					<p className='font-extralight text-xl dark:text-[#FEFEFE]'>
						{`Humidity: ${weather.main.humidity}%`}
						<WiHumidity className='inline-block' />
					</p>
					<p className='font-extralight text-xl dark:text-[#FEFEFE]'>
						{`Wind: ${weather.wind.speed} ${unitSystemToggle ? 'm/s' : 'mph'}`}
						<FaWind className='inline-block' />
					</p>
					<p className='font-extralight text-xl dark:text-[#FEFEFE]'>
						{`Pressure: ${weather.main.pressure} hPa`}
						<TiWeatherWindy className='inline-block' />
					</p>
				</motion.div>
			)}
		</div>
	)
}

export default WeatherDetails
