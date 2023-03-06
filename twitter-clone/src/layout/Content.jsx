import React from 'react'
import Divider from '../components/Divider'
import Feedİtems from '../components/Feedİtems'
import TweetBox from '../components/TweetBox'
const Content = () => {
  return (
    <main className="flex-1 flex-col border-r border-l border-gray-extralight">
      <header className='sticky top-0 flex justify-between items-center p-4 border-b border-gray-extralight bg-white'>
        <span className='font-bold text-xl text-gray'>Home</span>
      </header>
      <div className='flex px-4 py-3 space-x-2'>
        <img className='rounded-full w-12 h-12' src='https://media.licdn.com/dms/image/C4E03AQGKBfrCrb8uZg/profile-displayphoto-shrink_800_800/0/1648334332242?e=2147483647&v=beta&t=LQ52I3JeXCS8Ng3GVMMVLyhmC_omxWxHMau7qJwN3VE' alt='Profile'></img>
   
   <TweetBox/>
  </div>
  <Divider/>
  <Feedİtems/>
  <Feedİtems/>
  <Feedİtems/>
  <Feedİtems/>
  <Feedİtems/>
    </main>
  )
}

export default Content