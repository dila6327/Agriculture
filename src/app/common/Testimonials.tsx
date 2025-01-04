import React from 'react'
const clients=[{photo:'https://thumbs.dreamstime.com/b/one-caucasian-man-mature-handsome-man-laughing-portrait-studio-white-background-30173917.jpg',info:'“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?”',name:'James Smith'},
  {photo:'https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=1024,height=1536,quality=85/https://r2-us-west.photoai.com/1725212674-ac0cfaae7c6bd3df15c5e59c0d360bbf-3.png',info:'“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?”',name:'Kate Smith'},
  {photo:'https://media.istockphoto.com/id/521013856/photo/african-american-business-woman-wearing-glasses.jpg?s=612x612&w=0&k=20&c=OQIQD6ZkEh8i2WkZxOmByjUD7F6F10NyPAIspJLmNoQ=',info:'“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?”',name:'Claire Anderson'},
  {photo:'https://thumbs.dreamstime.com/z/happy-teen-male-teenager-boy-young-man-smiling-white-background-studio-photograph-adult-233086813.jpg',info:'“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti iusto molestias, dolore vel fugiat ab placeat ea?”',name:'Dan Smith'}
]
const Testimonials = () => {
  return (
    <section className="mt-28">
    <h2 className=" mt-10 text-green-800 text-center text-4xl mb-8">Testimonials</h2>
    <h3 className="text-center text-2xl mb-11">Necessitatibus eius consequatur</h3>
    <div className="flex flex-row flex-wrap justify-around">
    {clients.map((elem:any,index:any)=>(<div className="flex flex-col w-[550px] h-56" key={index}>
      <div className="w-full h-1/2">
        <img src={elem.photo} className="w-1/6 h-full rounded-full"/>
      </div>
      <div className="h-1/4 w-full text-lg">
      <p className="h-full w-full">{elem.info}</p>
      </div>
      <div className="h-1/4 w-full ">
        <span className="text-gray-500 text-2xl">{elem.name}</span>
      </div>
    </div>))}
    </div>
            </section>
    
  )
}

export default Testimonials
