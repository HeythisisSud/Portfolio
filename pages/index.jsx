import React from 'react'
import Navbar from './components/Navbar'
const index = () => {
  return (
    <div className='grid gap-24	'>
      <Navbar/>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 '>
          <div className=' lg:px-36 xl:px-48 md:px-16 sm:px-12 px-10 col-span-2'>
            <div className='grid grid-rows-1 gap-6'>
            <div className=' md:text-2xl text-left sm:text-xl text-2xl lg:text-4xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, nihil?<h1 className=' text-blue-400'>Voluptate</h1></div>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste neque vero dolorum quo quibusdam optio magnam iusto tenetur</p>
            <button class="bg-blue-500 w-24  hover:bg-blue-700 text-white shadow-lg font-bold py-2 px-4 border border-blue-700 rounded">
              Button
            </button>
            </div>
        </div>
        <div className='shadow-2xl'>
        </div>
        </div>
      </div>
  )
}

export default index