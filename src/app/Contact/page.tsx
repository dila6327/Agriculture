import React from 'react'
import Subscribe from '../common/Subscribe'
const Contact = () => {
  return (
    <main className='flex flex-col'>
       <section style={{
    backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/029/503/934/non_2x/green-forest-aerial-view-photo.jpeg')`,
  }} className='h-96 w-full pt-24 '>
        <h1 className='text-5xl text-white text-center font-bold'>Contact</h1>
        <p className='text-white text-center font-semibold text-xl'>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
       
        <p className='text-white text-center'> <span className='text-green-400'>Home</span>/Contact</p>
      </section>
      <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.450212303306!2d-74.00594138459243!3d40.710450479331325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316d1c30fd%3A0x312d7c4f163e0332!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1681506787000!5m2!1sen!2sus"
        className='w-full mt-4'
        height="500"
        allowFullScreen={true}
        loading="lazy"
       >
    </iframe>
      </section>
      <section className='flex flex-row justify-between w-10/12 self-center mt-5 mb-5 '>
        <div className='w-96 h-96 border p-10 rounded'>
          <h3 className='text-blue-900 mb-2 text-xl font-semibold'>Get in Touch</h3>
          <p className='text-gray-500'>Et id eius voluptates atque nihil voluptatem enim in tempore minima sit ad mollitia commodi minus.</p>
          <div className='flex '>
            <div><span><i className="fa-solid fa-location-dot"></i></span></div>
         <div className='flex flex-col'>
          <span className='text-blue-900 text-xl ml-2'>Location:</span>
          <span className='text-gray-400 text-sm'>A108 Adam Street, New York, NY 535022</span>
         </div>
</div>
         
<div className='flex mt-2'>
            <div><span><i className="fa-regular fa-envelope"></i></span></div>
         <div className='flex flex-col '>
          <span className='text-blue-900 text-xl ml-2'>Email:</span>
          <span  className='text-gray-400 text-sm'>info@gmail.com</span>
         </div>
</div>

<div  className='flex mt-2'>
            <div><span><i className="fa-solid fa-phone"></i></span></div>
         <div className='flex flex-col'>
          <span className='text-blue-900 text-xl ml-2'>Call:</span>
          <span  className='text-gray-400 text-sm'>+1 5589 55488 55</span>
         </div>
</div>
</div>
        <div className='w-[800px]'>
          <form action="" className='flex flex-col'>
            <div className='w-full justify-between flex mb-5'>
              <input type="text" placeholder="Your name" className='inline-block w-96 border p-2 rounded text-xl'/>
              <input type="email" placeholder="Your email" className='inline-block w-96 border p-2 rounded text-xl'/>
            </div>
            <div className='mb-2' >
              <input type="text" placeholder='subject' className='w-full p-2 border rounded text-xl'/>
            </div>
            <textarea placeholder='Message' className='text-xl mb-2 p-2 w-full h-[270px] border rounded resize-none border-gray-500 border-solid '></textarea>
          <input type="submit" value="Send Massage" className='bg-green-700 text-white  flex items-center justify-center w-40 rounded self-center h-8   text-center '/>
          
          </form>
        </div>
      </section>
      <Subscribe/>
    </main>
  )
}

export default Contact
