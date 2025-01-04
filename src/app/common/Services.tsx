import React from 'react'
const services=[{elIndex:1,img:'https://thumbs.dreamstime.com/b/cutout-ivy-lush-green-foliage-climbing-plant-summer-isolated-white-background-plants-garden-design-landscaping-223341291.jpg',main:'Planting',helper:'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie'},
  {elIndex:2,img:'https://gardenerspath.com/wp-content/uploads/2020/05/How-to-Use-Mulch-for-Low-Maintenance-Gardening-Featured.jpg',main:'Mulching',helper:'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie'},
  {elIndex:3,img:'https://wol.jw.org/en/wol/mp/r1/lp-e/nwtsty/2024/641',main:'Plowing',helper:'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie'},
  {elIndex:4,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4qnJSZM1KGIzPXXORlwy9hHdER8jtaVpamA&s',main:'Mowing',helper:'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie'},
  {elIndex:5,img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqWEBtOfDkm8ttfJ2G8vRNOaHglZ_Z_sS3yw&s',main:'Seeding',helper:'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie'},
  {elIndex:6,img:'https://www.myfamilyfirstchiro.com/wp-content/uploads/2016/06/Fresh-Vegetables.jpg',main:'Fresh Vegetables',helper:'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie'},
  {elIndex:7,img:'https://img.hobbyfarms.com/wp-content/uploads/2016/01/18191205/watering-can_624.jpg',main:'Watering',helper:'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie'},
  {elIndex:8,img:'https://www.creativehatti.com/wp-content/uploads/edd/2024/01/Indian-vendor-character-selling-fruits-and-vegetables-Large.jpg',main:'Vegetable selling',helper:'Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie'}]
const Services = () => {
  return (
    <section className="w-11/12 self-center ">
    <h3 className="text-3xl mt-4 mb-4 text-center">Services</h3>
    <h2 className=" text-xl mb-16 text-center">Providing Fresh Produce Every Single Day</h2>
    <div className="flex flex-row flex-wrap ">
      {services.map((elem: { img: string | undefined; main: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; elIndex: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; helper: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined },index: React.Key | null | undefined)=>(<div className="w-1/4 border h-52 p-3" key={index}> 
        <div className="flex flex-row justify-between   " >
        <img src={elem.img} className="w-32 h-24"  />
        <span className="text-gray-400">0{elem.elIndex}</span>
        </div>
        <div className="text-xl text-amber-800">
          {elem.main}
        </div>
        <div className="text-sm text-amber-600">
          {elem.helper}
        </div>
      </div>))}
    </div>

  </section>
  )
}

export default Services
