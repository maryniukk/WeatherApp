 import { motion } from "framer-motion"
import React from 'react'
import ForecastCard from './ForecastCard.jsx'

const WeatherForecast = ({city}) => {
    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className='pl-10 pr-10'>
              <div className='flex justify-center gap-5'>
                <ForecastCard city={city} />
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
                <ForecastCard/>
              </div>
            </div>
        </motion.div>
    )
}
export default WeatherForecast