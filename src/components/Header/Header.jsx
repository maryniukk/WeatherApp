import { motion } from 'framer-motion'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import { RiCelsiusLine, RiFahrenheitLine } from 'react-icons/ri'
const Header = ({
	city,
	handleCityChange,
	handleGetWeather,
	unitSystemToggle,
}) => {
	return (
		<div className='px-10 pb-0 py-5 flex'>
			<motion.input
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				delay={500}
				animate={{ y: 0 }}
				type='text'
				name='city'
				value={city}
				onChange={handleCityChange}
				placeholder='Please, enter your city.'
				className='input-field border-[0.5px] border-[#d2d2d2] text-[#181818] w-auto outline-none rounded-xl bg-[#fcfcfc] placeholder:text-[#181818] font-extralight text-lg px-5 py-2'
			/>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1, ease: 'easeInOut' }}
				delay={500}
				animate={{ y: 0 }}
				className='ml-3 mt-auto mb-auto'
			>
				<motion.button onClick={handleGetWeather}>
					<IoIosSearch className='text-3xl text-[#181818]' />
				</motion.button>
			</motion.div>
			<div className='ml-auto mt-auto mb-auto'>
				<label className='swap'>
					<input onChange={unitSystemToggle} type='checkbox' />
					<div className='swap-on'>
						<RiFahrenheitLine className='text-xl text-[#181818]' />
					</div>
					<div className='swap-off'>
						<RiCelsiusLine className='text-xl text-[#181818]' />
					</div>
				</label>
			</div>
		</div>
	)
}

export default Header
