import React from 'react'

const ForecastCard = ({city, temperature}) => {
  return (
    <div className='flex flex-col gap-2 text-xl w-[150px] h-auto bg-blue-100 rounded-xl px-2.5 py-2.5'>
      <div className='flex flex-col gap-2'>
        <h1>Forecast Card</h1>
        <p>Temperature is: `${temperature}`</p>
        <p>{city}</p>
        <p>Date</p>
      </div>
    </div>
  )
}
export default ForecastCard