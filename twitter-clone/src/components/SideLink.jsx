import React from 'react'

const SideLink = () => {
  return (
    <div className='display inline-block text-lg'>
 <nav className='mb-4 '>
    <ul className='flex-1 '>
      <li className='hover:bg-primary-light hover:rounded-full hover:text-primary-base p-2'><i className="fa-solid fa-house fa-lg mr-2"></i> <a href='Home'>Home</a></li>
      <li  className='hover:bg-primary-light hover:rounded-full hover:text-primary-base p-2'><i className="fa-solid fa-hashtag fa-lg mr-3"></i> Explore</li>
      <li  className='hover:bg-primary-light hover:rounded-full hover:text-primary-base p-2'><i className="fa-solid fa-bell fa-lg mr-3"></i> Notification</li>
      <li  className='hover:bg-primary-light hover:rounded-full hover:text-primary-base p-2'><i className="fa-regular fa-message fa-lg mr-2"></i> Message</li>
      <li  className='hover:bg-primary-light hover:rounded-full hover:text-primary-base p-2'><i className="fa-regular fa-bookmark fa-lg mr-3"></i> Bookmarks</li>
      <li  className='hover:bg-primary-light hover:rounded-full hover:text-primary-base p-2'><i className="fa-solid fa-list-ul fa-lg mr-2"></i> Lists</li>
      <li className='hover:bg-primary-light hover:rounded-full hover:text-primary-base p-2'><i className="fa-solid fa-user fa-lg mr-3"></i> Profile</li>
      <li  className='hover:bg-primary-light hover:rounded-full hover:text-primary-base p-2'><i className="fa-sharp fa-solid fa-square-caret-down fa-lg mr-3"></i> More</li>
    </ul>
  </nav>
    </div>
  )
}

export default SideLink