import React from 'react'
import {Timeline} from "react-twitter-widgets";

const Widgets = () => {
  return (
    <aside className="w-80 sticky top-0 h-screen">
      <div className='flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base'>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className='placeholder-gray-dark bg-transparent outline-none w-full text-sm focus:outline-none ' type="text" placeholder="Search Twitter"/>
      </div>
      <div className='mt-5'>
      <Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'umitozdag'
  }}
  options={{
    height: '1000'
  }}
/>
      </div>
    </aside>
  )
}

export default Widgets