import React from 'react'

const Container = ({children}) => {
  return (
   <div className='flex max-w-6xl mx-auto min-h-screen border'>
    
    {children}
   </div>
  )
}

export default Container