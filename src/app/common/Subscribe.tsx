import React from 'react'

const Subscribe = () => {
  return (
    <section className="bg-gray-200 w-full mt-6">
    <div className=" w-[1300px] flex flex-row justify-between  mt-10 p-28">
    <div>
      <h2 className="text-2xl text-green-900">Subscribe To Our Newsletter</h2>
      <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, reprehenderit!</p>
    </div>
    <div>
      <form action="" className=" border-green-800 border-solid border ">
        <input type="email"  className="bg-gray-200 p-3 inline-block w-80"/>
        <input type="submit"  value="Subscribe" className="bg-green-800 text-white p-3 hover:bg-white"/>
      </form>
    </div>
    </div>
  </section>
  )
}

export default Subscribe
