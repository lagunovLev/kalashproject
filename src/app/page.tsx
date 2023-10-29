'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import burgerImage from '../images&svg/2023-10-28_19-48-16.png'
import BurgerMenuIcon from '@/reusable/BurgerMenuLogo'
export default function Home() {
  const [animate, setanimate] = useState(false)
  return (
<header className=' bg-white w-full  h-24 flex justify-start '>
<Image
alt= ' '
width= {90}
height={40}
 src='https://i.pinimg.com/originals/7b/07/62/7b0762f25df8d3cf66c8c1c21b0c712c.png'
 className=' pl-1 pt-1 select-none'>

</Image>
<h1  className=' text-xl text-blue-600 pt-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-900 font-sans'>академия <br/> калашников </h1>
<button onClick={()=>{setanimate(!animate)}} className=' pl-60 ml-96'><BurgerMenuIcon/></button>
<motion.div
    className=" w-16 h-6 bg-red-800 rounded-lg"
    initial={{ scale: 0 }}
    animate={animate===true ?{  scale: 1 } : ''}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 20
    }}
  >
    <h1>hello</h1>
  </motion.div>
</header>
  )
}
