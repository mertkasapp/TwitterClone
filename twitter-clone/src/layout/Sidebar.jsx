import React from 'react'
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';
import twitterlogo from "../img/twitter.svg";
const Sidebar = () => {

  return (
    <div className="flex flex-col justify-between w-72 px-2 sticky top-0 h-screen">
      <div>
        <div className='mb-4 flex justify-center w-12 h-12 hover:bg-gray-lightest rounded-full transition duration-500'>
          <img className='w-9 h-9 mt-2' src={twitterlogo} alt="TwittterLogo"></img>
        </div>
        <SideLink />
        <button className='bg-primary-base text-white rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transition duration-500'>Tweet</button>

      </div>

      <UserBox />


    </div>

  )
}

export default Sidebar