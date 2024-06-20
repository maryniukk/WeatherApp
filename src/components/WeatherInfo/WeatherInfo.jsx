import { motion } from 'framer-motion'
import React from 'react'
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri'

import { BsMoonStars } from 'react-icons/bs'
import GoSun from '/src/assets/weatherIcons/GoSun.svg'

const WeatherInfo = ({ weather, fahrenheit }) => {
	const weatherIconArray = [
		{
			id: '01d',
			icon: GoSun,
		},
		{
			id: '01n',
			icon: BsMoonStars,
		},
		{
			id: '02d',
		},
	]

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
						<h2 className='text-5xl font-medium pl-10 pb-2 text-[#181818]'>
							{weather.name}
						</h2>
						<p className='text-2xl pb-2 font-extralight pl-10 flex'>
							{weather.weather && weather.weather[0].description}
						</p>
						<div className='flex'>
							<p className='text-6xl font-thin pl-10 pt-1 flex'>
								{`${Math.round(weather.main.temp)}`}
								{fahrenheit ? (
									<RiFahrenheitLine className='text-2xl font-thin text-[#181818]' />
								) : (
									<RiCelsiusLine className='text-2xl text-[#181818]' />
								)}
							</p>
						</div>
					</motion.div>
					<div className='pr-8'>
						{weather.weather && (
							<img
								className='w-[60px] h-[60px]'
								src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
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
