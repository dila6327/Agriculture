import React from 'react'

const WhyUs = () => {
  return (
    <section className="w-full h-[700px] bg-green-700 mt-28 flex justify-center">
    <div className=" w-11/12  h-full relative flex flex-row justify-between">
    <div className="h-full w-2/6 relative animate-fadeInDown delay-300 ">
    <img src='https://thumbs.dreamstime.com/b/senior-vegetables-diet-old-mature-man-eating-healthy-food-dieting-hold-broccoli-studio-vegan-salad-aged-weight-loss-330915699.jpg' className=" h-full w-full absolute bottom-14"/>
    </div>
    
    <div className=" w-1/2 ">
    <h4 className="text-gray-300 mt-28 text-2xl animate-fadeInDown delay-300">Why Choose Us</h4>
    <h3 className="text-white text-4xl mt-3 animate-fadeInDown delay-300">More than 50 year experience in agriculture industry</h3>
    <p className="text-gray-300 mt-6 animate-fadeInDown delay-300">Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi illum minima nostrum perspiciatis error consequatur sit nulla.</p>
    <div className="mt-3">
    <div className="flex flex-row justify-between w-1/2 " >
      <div  className="w-16 h-24">
    <img src='https://as1.ftcdn.net/v2/jpg/05/88/80/46/1000_F_588804613_dei0Ssu5jnfm9eOiz2qSh4TxWrnXzasZ.jpg' alt='Cloud photo'/>
      </div>
      <div>
        <h5 className="text-white">Plants needs rain</h5>
        <h6 className="mt-1 text-gray-400">Lorem ipsum dolor sit amet.</h6>
      </div>
    </div>
    
    <div  className="flex flex-row justify-between w-1/2 animate-fadeInDown delay-300">
      <div className="w-16 h-24">
    <img src='https://clipart-library.com/images/rijR8L8iR.gif' alt='Heart photo'/>
      </div>
      <div>
        <h5 className="text-white"> Love organic foods</h5>
        <h6 className="mt-1 text-gray-400">Lorem ipsum dolor sit amet.</h6>
      </div>
    </div>
    
    
    <div  className="flex flex-row justify-between w-1/2 animate-fadeInDown delay-300">
      <div className="w-16 h-24">
    <img src='data:image/png;base64,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' alt='Home photo'/>
      </div>
      <div>
        <h5  className="text-white">Sell vegies</h5>
        <h6 className="mt-1 text-gray-400">Lorem ipsum dolor sit amet.</h6>
      </div>
    </div>
    </div>
    </div>
    
    </div>
            </section>
  )
}

export default WhyUs
