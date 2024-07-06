import {motion} from "framer-motion";
import React, {useState} from "react";

const WelcomePage = () => {
    const [changeScreen, setChangeScreen] = useState(false)
    return (
        <div className='text-center justify-center flex flex-col mt-20'>
            <div className='flex flex-col justify-center'>
                {!changeScreen && (
                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{duration: 1.5, ease: 'easeInOut'}}
                    >
                        <motion.h1
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            transition={{duration: 1, ease: 'easeInOut'}}
                            className='text-4xl font-extralight text-center justify-center text-[#111] dark:text-[#fff]'
                            animate={{y: 80}}
                        >
                            Hi👋🏻, and welcome to the Weather App🌦️!
                        </motion.h1>
                        <div>
                            <div className='mt-[40px]'>
                                <motion.button
                                    onClick={() => setChangeScreen(true)}
                                    initial={{opacity: 0}}
                                    whileInView={{opacity: 1}}
                                    transition={{duration: 1, ease: 'easeInOut'}}
                                    animate={{y: 60}}
                                    className='btn font-extralight text-xl bg-[#fff]
												text-[#111] hover:bg-[#f0f0f0] dark:bg-[#1B1B1D] dark:text-[#fff] dark:hover:bg-[#323232]'
                                >
                                    Get Started
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
export default WelcomePage