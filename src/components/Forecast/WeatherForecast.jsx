 import React from 'react'
 import {motion} from "framer-motion";
 import ForecastCard from './ForecastCard.jsx'

const WeatherForecast = () => {
    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className='pl-10 pr-10'>
              <div className='flex gap-5'>
                <ForecastCard/>
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