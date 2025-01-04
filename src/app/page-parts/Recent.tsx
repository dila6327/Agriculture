import React from 'react'

const Recent : React.FC<{ recent: object[] }> = ({ recent }) => {
  return (
    <section className="flex justify-center flex-col mt-44 ">
    <h2 className="text-2xl text-center text-gray-400">Recent Posts</h2>
    <h3 className="text-green-950 text-xl text-center mt-1 mb-2">Necessitatibus eius consequatur</h3>
    <div className="flex flex-row justify-between flex-wrap h-[440px] w-[1300px] " >
      {recent.map((elem:any,index:number)=>(<div className="w-[420px] h-full border border-gray-200" key={index}>
        <div className=" w-full h-4/6 relative">
          <img src={elem.photo} className="h-full w-full hover:scale-105"/>
          <span className="absolute bottom-0 text-white text-sm bg-green-700 inline-flex w-28 h-6 p-1  justify-center items-center left-[306px] z-10">{elem.date}</span>
        </div>
        <div className="h-1/6 full flex justify-center">
         <p className="twxt-center text-xl text-green-600 p-4">{elem.description}</p> 
        </div>
        <div className="text-gray-500 mt-10 text-left pl-4">
        <i className="fa-regular fa-user"></i> {elem.name} / <i className="fa-regular fa-folder"></i> {elem.field}
        </div>
      </div>))}
    </div>
  </section>
  )
}

export default Recent
