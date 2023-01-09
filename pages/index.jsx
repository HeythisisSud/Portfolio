import React from 'react'
import Navbar from './components/Navbar'
import Carding from './components/Carding'
const index = () => {
  return (
    <div className='grid gap-24	'>
      <Navbar/>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-3 2xl:grid-cols-3 '>
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
        <div className='w-auto mx-14 rounded-[16px] bg-white'>
          <h1 className='mx-auto text-4xl my-10 text-center'>My Skills</h1>
          <div className='items-center gap-10 px-24 my-10 grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2'>

          <Carding image='./next.png'  paragraph=' Lorem ipsum dolor sit amet consectetur adipisicing elit.  ' title='Next JS'/>

          <Carding  image='./tailwind.png' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. ' title='Tailwind'/>

          <Carding image='./react.png' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. ' title='React JS'/>

          <Carding image='./bootstrap.png' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit.' title='Bootstrap'/>

          <Carding image='sass.png' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit.' title='SASS'/>

          <Carding image='jquery.png' paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit.' title='JQuery'/>




          </div>

        </div>
      </div>
  )
}

export default index