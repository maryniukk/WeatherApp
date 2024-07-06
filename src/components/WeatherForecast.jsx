 import React from 'react'
 import {motion} from "framer-motion";
const WeatherForecast = () => {
    return (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
            <div className='pl-10'>
            <p className='dark:text-white'>Weather forecast for 5 days</p>
            </div>
        </motion.div>
    )
}
export default WeatherForecast