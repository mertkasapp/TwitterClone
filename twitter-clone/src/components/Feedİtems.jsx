import React from 'react'

const Feedİtems = () => {
    return (
        <article className='flex space-x-3 border-gray-extralight px-4 py-3 cursor-pointer'>
            <img className='w-11 h-11 rounded-full' src='https://media.licdn.com/dms/image/C4E03AQGKBfrCrb8uZg/profile-displayphoto-shrink_800_800/0/1648334332242?e=2147483647&v=beta&t=LQ52I3JeXCS8Ng3GVMMVLyhmC_omxWxHMau7qJwN3VE' alt='Profile'></img>
            <div className='flex-1'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'>Mert Nafiz Kasap</h4>
                    <span className='text-gray-dark ml-2'>MertKasappp1</span>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full'></div>
                    <span className='text-gray-dark '>1m</span>
                </div>
                <p className='mt-2 text-gray-900 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique placeat facilis nemo eligendi optio quae consequuntur. Repellendus aliquam vitae inventore tempore quod numquam totam officia facilis fugit, odio, officiis omnis.</p>
                 <img className='my-2 rounded-xl' src='https://i4.hurimg.com/i/hurriyet/75/1110x740/5dc453677152d800c88b12d0.jpg' alt='post'></img>
               <ul className='flex space-x-28'>
                <li><i class="fa-regular fa-message"></i></li>
                <li><i class="fa-sharp fa-solid fa-retweet"></i></li>
                <li><i class="fa-regular fa-heart"></i></li>
                <li><i class="fa-solid fa-upload"></i></li>
               
               </ul>
            </div>
        </article>
    )
}

export default Feedİtems