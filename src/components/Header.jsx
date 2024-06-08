import React from 'react'
import Gif from "../assets/dev.gif"
import ReduxImg from "../assets/redux.png"
import RacteImg from "../assets/react.png"
import SassImg from "../assets/sass.png"
import Social from './Social'


// animation
import { Fade, Flip, Zoom  } from "react-reveal";
import Translate from '../utils/Translate'

const Header = () => {
  return (
    <div className='pt-[200px] lg:pt-0 flex lg:flex-row flex-col items-center bg-[#EDF2F8]  lg:h-[100vh] justify-center gap-20 ' id='home'>
          {/*Download CD*/}
           <Flip right> 
       <div className='flex flex-col gap-6 md:gap-10 items-center md:items-end w-full max-w-[400px]'> 
           <div className='flex justify-center items-center bg-[white] gap-3 md:gap-10 w-full max-w-[350px] p-3 text-center rounded-[10px] shadow-lg'>
              <p className=' text-[35px] lg:text-[40px]'>👋</p>
              <p className='flex flex-col'>
                <span className='text-slate-400 text-[18px] lg:text-[20px]' ><Translate dictionary={{ru:'Привет,',en:'Hello, I am'}}/></span>
                <span className='font-bold text-[30px]'><Translate dictionary={{ru:'Я Сухроб',en:'Sukhrob'}}/></span>
              </p>
           </div>
           <div className='bg-[white] w-full max-w-[300px] p-3  rounded-[15px]  text-slate-400 text-[12px] lg:text-[14px] shadow-lg'><Translate dictionary={{ru:'ФРОНТЕНД/REACT РАЗРАБОТЧИК',en:'FRONTEND/REACT DEVELOPER'}}/>
           </div>

        <div className='font-bold flex gap-2 text-[35px] md:text-[50px] my-5 mt-5 md:my-12 justify-center'> </div>
          <a type="button" class="text-white bg-[#313bac] from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"><Translate dictionary={{ru:'Скачать резюме',en:'Downlaod CV'}}/></a>
       </div>
        </Flip> 
          {/* // gif for developer */}
          <Zoom up duration={1000} delay={200}> 
       <div className='text-center  '>
          <img className='w-[350px] h-[350px]' src={Gif} alt="Gif"/>
       </div>
        </Zoom> 
         <Fade right>
       <div className='flex lg:flex-col gap-6 lg:gap-8 left-5'>
          <div className='w-[75px] h-[75px] lg:w-[130px] lg:h-[130px] rounded-full bg-white shadow-2xl flex justify-center items-center'>
            <img src={ReduxImg} className='w-[70%]' alt="img"/>
          </div>
          <div className='w-[90px] h-[90px] lg:w-[180px] lg:h-[180px] rounded-full bg-white shadow-2xl flex justify-center items-center'>
          <img src={RacteImg} className='w-[200%]' alt="img"/>
          </div>
          <div className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] rounded-full bg-white shadow-2xl flex justify-center items-center'>
          <img src={SassImg} className='w-[90%]' alt="img"/>
          </div>
       </div>
        </Fade> 
      
      <Social/>
    </div>
  )
}

export default Header