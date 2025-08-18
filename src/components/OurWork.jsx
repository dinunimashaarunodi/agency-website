import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurWork = () => {


  const workData =[
    {
      title:'Mobile app marketing',
      description:'we turn bold ideasinto powerful digital solutions tht connct,engage..',
      image:assets.work_mobile_app
    },
     {
      title:'Dashboard management',
      description:'we help you execute your plan anddeliver results.',
      image:assets.work_dashboard_management
    },
     {
      title:'Fitness app promotin',
      description:'we help you create a marketing statergy that drives results',
      image:assets.work_fitness_app
    }
  ]
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Our latest work' desc='From strategy to excution,we craft digital solutions that move your business forword.'/>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
          workData.map((work,index)=>(
            <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
              <img src={work.image} alt='' className='w-full rounded-xl'/>
              <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
              <p className='text-sm opasity-60 w-5/6'>{work.description}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default OurWork