import React, { useState } from 'react'
import { HiBars2 } from "react-icons/hi2";
import Social from '../components/Social.jsx'

const Navbar = () => {

    const [toggle,setToggle] = useState(false)

  return (
    <nav className='containerr z-10  fixed w-full h-[80px] backdrop-blur flex justify-between items-center '>
        <div className='text-[30px] font-bold'>
            Sukhrob
        </div>

            <ul className={`flex md:flex-row flex-col gap-6 text-[#6b7688] font-[600] uppercase md:static bg-[white] md:bg-transparent md:w-auto w-[80%] ${toggle ? `right-0` : `right-[-100%]`} top-[80px] md:h-auto h-[100vh] absolute transition-[0.5s] md:p-0 p-10`}  >
                <li><a href="#" className='links'>Home</a></li>
                <li><a href="Skills" className='links'>Skills</a></li>
                <li><a href="My works" className='links'>My works</a></li>
                <li><a href="Contact" className='links'>Contact</a></li>
            </ul>

        <div className='flex gap-1 md:gap-5 text-[12px]'>
           <div>RU</div>
           <div>ENG</div>
        </div>

           {/*bars*/}
        <div className='p-1 bg-[#313bac] text-[white] rounded-full text-[20px] md:hidden block ' onClick={() =>setToggle(!toggle)}>
        <HiBars2 />
        </div>

    </nav>
  )
}

export default Navbar