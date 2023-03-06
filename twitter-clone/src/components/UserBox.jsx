import React from 'react'

const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition duration-200'>
        <img className='rounded-full w-11 h-11' src='https://media.licdn.com/dms/image/C4E03AQGKBfrCrb8uZg/profile-displayphoto-shrink_800_800/0/1648334332242?e=2147483647&v=beta&t=LQ52I3JeXCS8Ng3GVMMVLyhmC_omxWxHMau7qJwN3VE' alt='Profile'></img>
        <div className='flex flex-col'>
            <span className='font-bold'>Mert Nafiz Kasap</span>
            <span className='text-sm text-gray-dark'>@Mertkasappp1</span>
        </div>
        <div className='flex text-2xl'>   
            <div>.</div>
            <div>.</div>
            <div>.</div>
        </div>
    </div>
  )
}

export default UserBox