import React from 'react'
import Video from '../common/video'
import Services from '../common/Services'
import Subscribe from '../common/Subscribe'
const Page = () => {
  const Team=[{photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOJJqqXyD0087ULGmsBx1N4PiJiMzDFZqSA&s",name:'Joshua Stefan',field:'Farmer'},
    {photo:'https://static.vecteezy.com/system/resources/thumbnails/029/090/151/small/african-black-woman-portrait-cute-girl-stock-background-generative-ai-photo.jpg',name:'Sheena Anderson',field:'Marketing'},
    {photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4cNcvHbKXJxfmX0_XUtOuyRdNbAMwpNmLg&s',name:'Evan Smith',field:'Content'},
    {photo:'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlNV9waG90b19vZl9iZWF1dGlmdWxfd29tYW5fc21pbGluZ19oYXZlX2JsdWVfZXllX19lZThiYzE1Ni03MDhkLTQ4NjgtOWMyOS00MmVkZWRmMzRhMTZfMS5qcGc.jpg',name:'Kaylie Jones',field:'Accountant'}
  ]
  return (
    <main className='flex flex-col'>
      <section style={{
    backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/029/503/934/non_2x/green-forest-aerial-view-photo.jpeg')`,
  }} className='h-96 w-full pt-24 '>
        <h1 className='text-5xl text-white text-center font-bold'>About</h1>
        <p className='text-white text-center font-semibold text-xl'>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
       
        <p className='text-white text-center'> <span className='text-green-400'>Home</span>/About</p>
      </section>
      <Video/>
      <section className='w-11/12 self-center'>
        <h4 className='text-center mt-5 mb-4 text-green-700 text-4xl'>Team</h4>
        <h3 className='text-center text-xl mb-5 text-gray-500'>Necessitatibus eius consequatur</h3>
        <div className='flex flex-row flex-wrap justify-between'>
        {Team.map((elem,index)=>(<div key={index} className='h-[480px] w-80  flex flex-col'>
        <div className='w-full h-2/3 relative'>
          <img src={elem.photo} className='w-full h-full hover:scale-105'/>
          <div className='flex flex-col absolute bottom-5 left-3 z-20'>
            <a href="#" className='p-1 w-10 h-10 bg-white text-green-800 flex justify-center items-center mb-2 hover:bg-green-800 hover:text-white'><i className="fa-brands fa-square-facebook"></i></a>
            <a href="#" className='p-1 w-10 h-10 bg-white text-green-800 flex justify-center items-center mb-2  hover:bg-green-800 hover:text-white'><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className='p-1 w-10 h-10 bg-white text-green-800 flex justify-center items-center mb-2  hover:bg-green-800 hover:text-white'><i className="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
        <h2 className='text-center mt-2 mb-2 text-blue-900 text-xl' >{elem.name}</h2>
        <p className='text-center text-green-900'>{elem.field}</p>
        </div>))}
        </div>
      </section>
      <Services/>
<Subscribe/>
    </main>
  )
}

export default Page
