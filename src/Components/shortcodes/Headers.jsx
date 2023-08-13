import React from 'react'

function Headers({children, className}){
  return (
    <div>
      <h2 className={`text-[48px] my-10 font-bold leading-7 text-primary dark:text-darkprimary ${className}`}>
        {children}
      </h2>
      <hr className='mb-10'/>
    </div>
  )
}

export default Headers