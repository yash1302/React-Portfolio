import React from 'react'
import ProjectItem from './ProjectItem'
import personal_img from '../assets/personal_img.png'

export default function Project() {
  return (
    <div id = 'project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae autem consequatur, molestiae sapiente voluptatem molestias repellendus ut architecto quaerat accusamus.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img = 'https://images.unsplash.com/photo-1492551557933-34265f7af79e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title = 'ToDo'/>
            <ProjectItem img = 'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?q=80&w=1367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title = 'Web-Scrapper-App'/>
            <ProjectItem img = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title = 'News-Reader-App'/>
            <ProjectItem img = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' title = 'Portfolio'/>
        </div>
    </div>
  )
}
