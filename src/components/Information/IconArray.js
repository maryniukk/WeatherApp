
import Sunny from '/src/assets/weatherIcons/Sunny.svg'
import cloudlyDay from '/src/assets/weatherIcons/cloudlyDay.svg'
import cloudlyMostlyNight from '/src/assets/weatherIcons/cloudlyMostlyNight.svg'
import cloudlyWithLittleSun from '/src/assets/weatherIcons/cloudlyWithLittleSun.svg'
import BrightNight from '/src/assets/weatherIcons/moon.svg'
import partlyCloudyNight from '/src/assets/weatherIcons/pcloudy-n.svg'
import partlyCloudlyDay from '/src/assets/weatherIcons/pcloudy.svg'

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

export default weatherIconArray