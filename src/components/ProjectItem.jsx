import React from 'react'

export default function ProjectItem(props) {
  return (
    <div className='relative flex justify-center w-full h-auto items-center shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] '>
        <img src={props.img} className='w-[300px] h-[300px] group-hover:opacity-10' alt="/" />
        <div className='hidden group-hover:block absolute top-[50%] left-[30%] translate-x-[50%] translate-y-[50%]'>
            <h3 className='text-md tracking-wider font-bold text-white text-center'>
                {props.title}
            </h3>
        </div>
    </div>
  )
}
