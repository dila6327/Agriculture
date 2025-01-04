import React from 'react'
interface ServicessProps {
  shown: any[]; 
  Set0: () => void;
  Set1: () => void;
  Set2: () => void;
  Set3: () => void;
  Set4: () => void;
  initial: number;
  before:() => void;
  after: () => void;
}
const Servicess: React.FC<ServicessProps> = ({
  shown,
  Set0,
  Set1,
  Set2,
  Set3,
  Set4,
  initial,
  before,
  after,
})=> {
  return (
    <section className="h-[500px] w-full  bg-black flex justify-center p-3">
    <div className="w-11/12 pt-4 ">
              <h3 className="text-gray-400 text-xl mt-8">Services</h3>
              <h2 className="text-white text-3xl mt-4">Necessitatibus eius consequatur</h2>
              <div className="flex flex-row w-full items-center relative">
              <button className="text-black text-2xl absolute top-[260px] z-10 left-5 h-12 w-12 bg-white hover:bg-green-500 hover:text-white font-bold" onClick={before}>&#8592;</button>
              <div  className="flex flex-row justify-between mt-28 w-full">
              {shown.map((elem:any, index:any) => (
      <div className="relative group hover:brightness-50" key={index}>
       
        <img 
          src={elem.src} 
          alt="our services images" 
          className="w-[420px] h-80 transform hover:scale-110 transition duration-300"
        />
        <div 
          className="text-red-600 z-10 absolute bottom-1 p-3 hidden group-hover:block animate-fadeInDown delay-300"
        >
          <button className="font-semibold text-green-600 mt-1 tetx-xl" >We do</button>
          <h3 className="text-3xl text-white ">{elem.text}</h3>
        </div>
      </div>
    ))}
    </div>
        <button className="text-black text-2xl absolute top-[260px] z-10 right-5 h-12 w-12 bg-white  hover:bg-green-500 hover:text-white font-bold" onClick={after}>&#8594;</button>
    
    
            
              </div>
              <div className="flex flex-row justify-between pl-[550px] pr-[550px] mt-9 ">
              <button
      className={`border-gray-500 border border-solid inline-block h-1 w-6 ${
        initial === 0 ? "bg-white" : "bg-gray-500"
      }`}
      onClick={Set0}
    />
    <button
      className={`border-gray-500 border border-solid inline-block h-1 w-6 ${
        initial === 1 ? "bg-white" : "bg-gray-500"
      }`}
      onClick={Set1}
    />
    <button
      className={`border-gray-500 border border-solid inline-block h-1 w-6 ${
        initial === 2 ? "bg-white" : "bg-gray-500"
      }`}
      onClick={Set2}
    />
    <button
      className={`border-gray-500 border border-solid inline-block h-1 w-6 ${
        initial === 3 ? "bg-white" : "bg-gray-500"
      }`}
      onClick={Set3}
    />
    
    <button
      className={`border-gray-500 border border-solid inline-block h-1 w-6 ${
        initial === 4 ? "bg-white" : "bg-gray-500"
      }`}
      onClick={Set4}
    />
    
    
    
              
              </div>
              </div>
             
            </section>
  )
}

export default Servicess
