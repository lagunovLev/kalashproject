'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import burgerImage from '../images&svg/2023-10-28_19-48-16.png'
import BurgerMenuIcon from '@/reusable/BurgerMenuLogo'
import CrossMenu from '@/reusable/Cross'
import Menu from '@/reusable/Menu'
import useKeenSlider from 'keen-slider'
import Carousel from 'embla-carousel'
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { useEffect } from 'react'
import axios from 'axios'
import Carousels from '@/reusable/PerSlide'
interface IUser {
  userId: number,
  id:number,
  title: string,
  body:string
}
export default function Home() {
  const [animate, setanimate] = useState(false)
  const [slides, setSlides] = useState<any[]>([]) 
  const [dataSearched, setdataSearched] = useState<IUser>()
  const [search, setsearch] = useState('')
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setSlides(response.data.slice(-80));
        console.log(response.data.slice(-90))
      });
  }, []);
  const searchIt= () =>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/${search}`)
    .then((response) => {
     setdataSearched(response.data)
     console.log(response.data)
    });
  }
//завтра реализвать https://jsonplaceholder.typicode.com/posts
  return (
    <>
<header className=' bg-white w-full  h-24 flex justify-start   border-b-4 border-blue-600'>
<Image
alt= ' '
width= {90}
height={40}
 src='https://i.pinimg.com/originals/7b/07/62/7b0762f25df8d3cf66c8c1c21b0c712c.png'
 className=' pl-1 pt-1 select-none'>

</Image>
<h1  className=' text-xl text-blue-600 pt-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-900 font-sans'>академия <br/> калашников </h1>
<button onClick={()=>{setanimate(!animate)}} className= ' pl-pl-35 sm:pl-pl-40  lg:pl-pl-60  xl:pl-pl-70  md:pl-pl-70   '>{animate===true ? <CrossMenu/>  : <BurgerMenuIcon/>}</button>
</header>
<section className=' w-3/4'>
<motion.div
    className=" w-1/3 h-auto  rounded-lg  ml- mt-20 bg-gradient-to-r from-cyan-500 to-white ml-ml-70  items-center border-r-4 border-blue-900 absolute z-50"
    initial={{ scale: 0 }}
    animate={animate===true ?{  scale: 1 } : ''}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  >
    <Menu/>
  </motion.div>
  <Carousels loop>
              {/* use object-cover + fill since we don't know the height and width of the parent */}
              {slides.map((slide) => (
  <div key={slide.id}  className=" w-full h-64 border-4 bg-gradient-to-r from-blue-500 to-blue-900  rounded-lg ">
    <Image src= {slide.url} alt='' width={100} height={20}   />
    <h1  className=" text-red-950  w-32 ">{slide.title} </h1>
    </div>
        ))}
        </Carousels>
</section>
<section className='w-full h-96 bg-gradient-to-r from-blue-500 to-blue-900 to-white items-center '>
<h1 className=' text-center  font-extrabold text-black text-xl	'> Найди конкретный проект нужный именно тебе </h1>
<input  className=' w-64 rounded-lg  h-8 bg- text-center ml-ml-40 mt-3' placeholder='Введите название проекта' value={search}  onChange={(e)=>{setsearch(e.target.value)}}/>
<button type="submit" onClick={searchIt}>Поиск</button>
{
dataSearched == null ? <h1 className=' text-center  font-extrabold text-black text-xl'>Пока ничего не найдено</h1> :
  <div key={dataSearched.id}  className="  w-2/3 rounded-lg h-64 border-4 bg-gradient-to-r from-blue-500 to-blue-900 ">
    <h1>{dataSearched.userId}</h1>
    <h1  className=" text-red-950  w-32 ">{dataSearched.title} </h1>
    <p >{dataSearched.body}</p>
    </div>
}
</section>
</>
  )
}
