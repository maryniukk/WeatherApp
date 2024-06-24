import { motion } from 'framer-motion'
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri'

import Sunny from '/src/assets/weatherIcons/Sunny.svg'
import cloudlyDay from '/src/assets/weatherIcons/cloudlyDay.svg'
import cloudlyMostlyNight from '/src/assets/weatherIcons/cloudlyMostlyNight.svg'
import cloudlyWithLittleSun from '/src/assets/weatherIcons/cloudlyWithLittleSun.svg'
import BrightNight from '/src/assets/weatherIcons/moon.svg'
import partlyCloudyNight from '/src/assets/weatherIcons/pcloudy-n.svg'
import partlyCloudlyDay from '/src/assets/weatherIcons/pcloudy.svg'

const WeatherInfo = ({ weather, fahrenheit }) => {

	const weatherIconArray = [
    {
        id: '01d',
				icon: Sunny,
        description: 'Ясное небо (днем)',
    },
    {
        id: '01n',
				icon: BrightNight,
        description: 'Ясное небо (ночью)',
    },
    {
        id: '02d',
				icon: partlyCloudlyDay,
        description: 'Малооблачно (днем)',
    },
    {
        id: '02n',
				icon: partlyCloudyNight,
        description: 'Малооблачно (ночью)',
    },
    {
        id: '03d',
				icon: cloudlyWithLittleSun,
        description: 'Облачно с прояснениями (днем)',

    },
		{
			id: '03n',
			icon: cloudlyMostlyNight,
			description: 'Облачно с прояснениями (ночью)',
		}
	,
	{
		id: '04d',
		icon: cloudlyDay,
		description: 'Пасмурно (днем)',
	}
	]


	const weatherIcon = () => {
		weatherIconArray.find(item => item.id === weather.weather[0].icon) 
	} 



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
								src={`http://openweathermap.org/img/wn/${weatherIcon.id}@2x.png`}
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


