import React from 'react'
import Subscribe from '../common/Subscribe'
const Blog=[{photo:'https://media.istockphoto.com/id/1388913352/photo/lovely-business-man-attending-a-meeting-online-writing-stuff-down.jpg?s=612x612&w=0&k=20&c=xkrlDeFMcPOoelyiWd_FwuFOuGi23Fd-t18CxR15okE=',date:'12 December',name:'John Doe',field:'Politics',caption:'Dolorum ipsut maname istiqma'},
  {photo:'https://images.unsplash.com/photo-1603969409447-ba86143a03f6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwbGFwdG9wfGVufDB8fDB8fHww',date:'19 March',name:'Julia Parker',field:'Economics',caption:'Nisi Magni Oset consequaltor'},
  {photo:'https://cdn6.dissolve.com/p/D145_288_590/D145_288_590_1200.jpg',date:'24 June',name:'Marie Doe',field:'Sports',caption:' Lorem ipsum dolor sit amet sitatum'},
  {photo:'https://www.shutterstock.com/image-photo/two-busy-professional-business-people-260nw-2424450083.jpg',date:'05 Augost',name:'Marie Doe',field:'SPorts',caption:'Esse dolorum voluptatum ullam est sint '},
  {photo:'https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',date:'17 September',name:'John Parker',field:'Politics',caption:'Accasamus quarate lorem dolr ipsum'},
  {photo:'https://static4.depositphotos.com/1017573/432/i/450/depositphotos_4320604-stock-photo-businessman-holding-an-open-laptop.jpg',date:'07 December',name:'Julia White',field:'Politics',caption:'atum ullam est sint nemo et est ipsa porro '}

]
const Page = () => {
  return (
    <main className='flex flex-col'>
        <section style={{
    backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/029/503/934/non_2x/green-forest-aerial-view-photo.jpeg')`,
  }} className='h-96 w-full pt-24 '>
        <h1 className='text-5xl text-white text-center font-bold'>Blog</h1>
        <p className='text-white text-center font-semibold text-xl'>Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.</p>
       
        <p className='text-white text-center'> <span className='text-green-400'>Home</span>/Blog</p>
      </section>
      <section className='w-11/12 self-center flex flex-col justify-center items-center'>
        <div className='flex justify-between flex-wrap'>
        {Blog.map((elem,index)=>(<div key={index} className='h-[500px] w-[420px] border mt-10 rounded'>
          <div className='h-2/3 w-full'>
            <img src={elem.photo} className='h-full w-full hover:scale-105 rounded'/>
          </div>
          <div className='flex relative justify-between'>
            <span className='flex flex-col justify-center items-center absolute bottom-1 left-3 text-white bg-green-800 w-20 h-16 rounded'>{elem.date}</span>
            <div className='text-gray-400'><i className="fa-regular fa-user ml-28 mt-2"></i> {elem.name} / <i className="fa-regular fa-folder"></i> {elem.field}</div>
          </div>
          <p className='text-center mt-3 text-blue-800 text-xl font-semibold'>{elem.caption}</p>
          <button className='text-gray-500 ml-9 mt-7'>Read More <i className="fa-solid fa-arrow-right"></i></button>
        </div>))}
        </div>
       <div className='mt-8 flex flex-row justify-between w-1/3 text-green-800 mb-4'>
    <button><i className="fa-solid fa-less-than"></i></button>
    <button>1</button>
    <button className='p-2 bg-green-800 text-white'>2</button>
    <button>3</button>
    <button>4</button>
    <span>....</span>
    <button>10</button>
    <button><i className="fa-solid fa-greater-than"></i></button>
       </div>
      </section>
      <Subscribe/>
    </main>
  )
}

export default Page
