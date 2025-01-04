'use client'
import Servicess from "./page-parts/Services";
import Services from "./common/Services";
import Video from "./common/video";
import Recent from "./page-parts/Recent";
import Testimonials from "./common/Testimonials";
import Subscribe from "./common/Subscribe";
import WhyUs from "./common/WhyUs";
import General from "./page-parts/General";
import { useEffect, useState } from "react";
export default function Home() {
  const arr=[{heading:'Farming is the best solution of worlds starvation',subheading:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',source:'https://foodtank.com/wp-content/uploads/2016/01/woman_agri_final.jpg'},
    {heading:'Providing Fresh Produce Every Single Day',subheading:'Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',source:'https://www.shutterstock.com/image-photo/hipster-young-man-watering-plants-260nw-1432264814.jpg'},
    {heading:'Organic vegetables is good for health',subheading:'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',source:'https://img.freepik.com/premium-photo/tattooed-young-hipster-woman-holding-raddish-garden_643825-4175.jpg'},
    {heading:'Farming as a Passione',subheading:'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius.',source:'https://media.istockphoto.com/id/1131453124/photo/female-hands-picking-fresh-tomatoes-to-wooden-crate-with-vegetables.jpg?s=612x612&w=0&k=20&c=vf0nf4MSn9Z0ma3mqZ6BqFTVUADdY8jtvPoMa5MxsC0='},
    {heading:'Good Food For All',subheading:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',source:'https://i.ytimg.com/vi/G7kF7W3p0cY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgu82rkUWnFzp4tNI0dvvUMuDsRQ'}
  ]
const [current,setCurrent]=useState(0)
const [initial,setInitial]=useState(0)
const images=[{src:"https://thumbs.dreamstime.com/b/senior-vegetables-diet-old-mature-man-eating-healthy-food-dieting-hold-broccoli-studio-vegan-salad-aged-weight-loss-330915699.jpg",text:"Planting"},{src:"https://gardenary-data.s3.amazonaws.com/section-image/wbbZg4PeFjVjxicx7R84oBgfRFyu12iBcVbEECYd.jpg",text:"Mulching"},
  {src:"https://thumbs.dreamstime.com/z/man-watering-flowers-garden-woman-taking-pictures-handsome-men-watering-flowers-garden-women-taking-pictures-155311075.jpg",text:"Watering"},{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gO8ixnFg45K_tJsZagrO-Fs1NUfO64OrmA&s",text:"Fertilizing"},
  {src:"https://ohmyfacts.com/wp-content/uploads/2024/10/25-facts-about-harvesting-1728446059.jpg",text:"Harvesting"},{src:"https://media.angi.com/s3fs-public/woman-cutting-grass-spring.jpeg",text:"Mowing"},
  {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqQlUCBCyQTvJO4tmhL6kx2W-eTVqNZfQzw&s",text:"Seeding plants"}
]
const recent=[{photo:'https://media.istockphoto.com/id/1435220822/photo/african-american-software-developer.jpg?s=612x612&w=0&k=20&c=JESGRQ2xqRH9ZcJzvZBHZIZKVY8MDejBSOfxeM-i5e4=',description:'Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia',date:'December 12',name:'Julia Parker',field:'Politics'},
{photo:'https://media.istockphoto.com/id/1316372316/photo/shot-of-a-young-businessman-using-a-laptop-during-a-late-night-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=Xb5GLJ9Eh1Y68m6I0eV6IWsx8PnJbTFfRS9lfghqPYY=',description:'Similique neque nam consequuntur ad non maxime aliquam quas. ',date:'July 17',name:'Mario Douglas',field:'Sports'},
{photo:'https://d3hk6w1rfu80ox.cloudfront.net/media/uploads/blogs/encouraging-teen-girls-in-computer-science/iStock-542111792.jpg',description:'Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium',date:'September 7',name:'Lisa Hunter',field:'Economics'}
]
 useEffect(() => {
  const interval = setInterval(()=> {
    setCurrent((prev) => {
      const newValue = prev + 1;

      if(newValue<5){
      return newValue;}
      else{return 0}
    });
   
    setInitial((prev)=>{
      if(prev<4){
      return  prev+1
   }
    else {return 0}
    })
   


  }, 5000);
 
  return () => clearInterval(interval); 
}, []);
const shown=images.slice(initial,initial+3)

const next=()=>{
if(current<4)
{
  setCurrent((prev)=>prev+1)
}
else{
  setCurrent(0)
}
}
 const prev=()=>{
  if(current>0)
    {
      setCurrent((prev)=>prev-1)
    }
    else{
setCurrent(4)
    }
}
const GoTo1=()=>{
  setCurrent(0)
}
const GoTo2=()=>{
  setCurrent(1)
}

const GoTo3=()=>{
  setCurrent(2)
}
const GoTo4=()=>{
  setCurrent(3)
}
const GoTo5=()=>{
  setCurrent(4)
}

  const before=()=>{
setInitial((prev)=>{
  if(prev>0){
    return prev-1;
  }
  else
   return images.length-3;
})

  }
  const after = () => {
    setInitial((prev) => {
     
      if (prev + 3 >= images.length) {
        return 0; 
      } else {
        return prev + 1; 
      }
    });

  };
  const Set0=()=>{
    setInitial(0)
  }
  const Set1=()=>{
    setInitial(1)
  }
  const Set2=()=>{
    setInitial(2)
  }
  const Set3=()=>{
    setInitial(3)
  }
  const Set4=()=>{
    setInitial(4)
  }

  console.log('initial : ',initial)
  return (
    <div className="flex flex-col">
  
      <main className="border flex justify-between items-center w-full self-center mt-2 flex-col">     
<General GoTo1={GoTo1} GoTo2={GoTo2} GoTo3={GoTo3} GoTo4={GoTo4} GoTo5={GoTo5} arr={arr} current={current} prev={prev} next={next}/>
 <Services />
<WhyUs/>
  <Video/>   
<Testimonials />
<Servicess Set0={Set0} Set1={Set1} Set2={Set2} Set3={Set3} Set4={Set4} initial={initial} shown={shown} before={before} after={after}/>
<Recent recent={recent}/>
<Subscribe/>
     </main>
    </div>
  );
}
