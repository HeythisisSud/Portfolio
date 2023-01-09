import React from 'react'

const Carding = (props) => {
  return (
    <div>
      <div className="flex items-center">
  <div className="group lg:w-80  2xl:w-96 xl:w-80 md:w-64 relative shadow-xl hover:shadow-sm overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 w-96">
    <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
    <div className="relative rounded-[15px]  bg-white p-6">
      <div className="space-y-4">
        <img src={props.image} className=' h-24 lg:w-48' alt="" />
        <p className="text-lg font-semibold text-slate-800 w-18">{props.title}</p>
        <p className="font-md text-slate-500">{props.paragraph}</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carding