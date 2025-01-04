import React from 'react'

const Video = () => {
  return (
    <section className=" h-[750px] w-11/12 self-center ">
    <div className="w-full h-full flex flex-row justify-between ">
      <div  className="w-5/12 h-full">
<h2 className="mt-44 text-2xl text-green-800 mb-5">Plants make life better</h2>
<p className="text-amber-950 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus placeat, atque qui voluptatem velit explicabo vitae repellendus architecto provident nisi ullam minus asperiores commodi! Tenetur, repellat aliquam nihil illo.</p>
<ul className="flex flex-col ">
<li className="mb-2"><span className="text-green-700"><i className="fa-solid fa-check"></i></span> Lorem ipsum dolor sit amet</li>
<li  className="mb-2"><span className="text-green-700"><i className="fa-solid fa-check"></i></span> Velit explicabo vitae repellendu</li>
<li  className="mb-2"><span className="text-green-700"><i className="fa-solid fa-check"></i></span> Repellat aliquam nihil illo</li>
</ul>
<button className="block bg-green-700 h-10 w-28 rounded mt-10">Get in Touch</button>
      </div>
      <div className="w-5/12 h-full flex justify-center items-center">
   

  <video
  style={{  borderRadius: "10px", objectFit: "cover", width:"600px", height:"600px" }}
 
  controls


  poster="https://thumbs.dreamstime.com/b/senior-vegetables-diet-old-mature-man-eating-healthy-food-dieting-hold-broccoli-studio-vegan-salad-aged-weight-loss-330915699.jpg"
>
  <source src="https://v.ftcdn.net/07/22/93/91/700_F_722939147_oNrNJgTEi7nOVzXJAmlTW4qi0gaatV22_ST.mp4"/>
  Your browser does not support the video tag.
</video>
      
      </div>
    </div>
  </section>
  )
}

export default Video
