import React from 'react'

const TweetBox = () => {

  return (
    <div className='flex flex-col flex-1 mt-2 px-2'>
        <textarea className='w-full text-lg placeholder:gray-dark outline-none overflow-hidden resize-none bg-transparent'placeholder="What's happening "/>
    <div className='flex items-center justify-between'>
      <div className='flex space-x-4 -ml-9 text-primary-base'>
      <i className="fa-sharp fa-solid fa-photo-film hover:text-primary-dark"></i>
      <i className="fa-solid fa-gift hover:text-primary-dark"></i>
      <i className="fa-sharp fa-solid fa-bars hover:text-primary-dark"></i>
      <i className="fa-regular fa-face-smile hover:text-primary-dark"></i>
      <i className="fa-solid fa-calendar-days hover:text-primary-dark"></i>
      </div>
        <button className='bg-primary-base text-white rounded-full px-4 py-2 font-medium'>Tweet</button>
    </div>
    </div>
  )
}

export default TweetBox 