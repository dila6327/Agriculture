import React from 'react'
interface GeneralProps {
    arr: any[]; 
    current: number;
    GoTo1: () => void;
    GoTo2: () => void;
    GoTo3: () => void;
    GoTo4: () => void;
    GoTo5: () => void;
    next: () => void;
    prev: () => void;
  }
const General : React.FC<GeneralProps> = ({
    arr,
    current,
    GoTo1,
    GoTo2,
    GoTo3,
    GoTo4,
    GoTo5,
    next,
    prev,
  })=> {
  return (
    <section className="border  h-[600px] w-full bg-cover bg-center flex flex-row justify-between items-center text-white p-2 "   style={{
        backgroundImage: `url(${arr[current].source})`,
      }}   >
        <div className="text-4xl text-gray-400"><button onClick={()=>prev()}>&#60;</button></div>
    
        <div >
     <h2     key={`heading-${current}`} className="text-4xl text-white font-semibold  text-center mb-4 animate-fadeInDown delay-300">{arr[current].heading}</h2>
     <h3     key={`subheading-${current}`} className="text-xl text-gray-300 animate-fadeInDown delay-300">{arr[current].subheading}</h3>
     <div className=" flex flex-row justify-center">
      <button className={`ml-2 text-6xl ${
            current === 0 ? "text-white" : "text-gray-400"
          }`} onClick={()=>GoTo1()}>-</button>
      <button  className={`ml-2 text-6xl ${
            current === 1 ? "text-white" : "text-gray-400"
          }`} onClick={()=>GoTo2()}>-</button>
      <button  className={`ml-2 text-6xl ${
            current === 2 ? "text-white" : "text-gray-400"
          }`} onClick={()=>GoTo3()}>-</button>
      <button  className={`ml-2 text-6xl ${
            current === 3 ? "text-white" : "text-gray-400"
          }`} onClick={()=>GoTo4()}>-</button>
      <button  className={`ml-2 text-6xl ${
            current === 4 ? "text-white" : "text-gray-400"
          }`} >-</button>
      
     </div>
     </div>
     <div className="text-4xl text-gray-400"><button onClick={()=>next()}>&gt;</button></div>
            </section>
  )
}

export default General
