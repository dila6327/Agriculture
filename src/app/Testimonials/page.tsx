import React from 'react'
import Testimonials from '../common/Testimonials'
import Subscribe from '../common/Subscribe'
const Page = () => {
  return (
    <main className='flex flex-col'>
        <section style={{
    backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/029/503/934/non_2x/green-forest-aerial-view-photo.jpeg')`,
  }} className='h-96 w-full pt-24 '>
        <h1 className='text-5xl text-white text-center font-bold'>Testimonials</h1>
        <p className='text-white text-center font-semibold text-xl'>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
       
        <p className='text-white text-center'> <span className='text-green-400'>Home</span>/Testimonials</p>
      </section>
      <Testimonials/>
      <Subscribe/>
    </main>
  )
}

export default Page