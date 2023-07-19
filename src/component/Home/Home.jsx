import React from 'react'

const Home = () => {
    return (
        <>
        <div className='w-[100%] h-[80vh] flex phone:flex-col phone:bg-red-500 phone:h-[80vh] items-center justify-center'>
        
        <div className='w-[50%] h-[70vh] phone:w-[70%] phone:h-[50vh]  phone:bg-black flex items-center justify-center'>
        <img className='w-[400px] rounded-3xl border-2 h-[50vh] border-red-900 phone:h-[30vh]  phone:w-[100%]'src="https://vishal-resume.vercel.app/assets/me1.avif" alt="" />
        </div>
        <div className='w-[50%] h-[70vh] phone:bg-pink-600 phone:h-[50vh] flex items-center justify-center flex-col gap-[20px]'>
        <h2 className='text-[20px] phone:text-[18px]'>Hello, I'm</h2>
        <h1 className='text-[50px] phone:text-[30px]'>subahan </h1>
        <h3 className='text-[25px] phone:text-[20px]  '>full Stack Developer</h3>
        <a href="https://github.com/subahan143">  <button className='border-[5px] phone:-[0px] phone:h-[50px] w-[150px] h-[60px] rounded-[33px] border-black hover:bg-red-400 hover:text-white bg bg-red-300'>Download CV</button></a>
        <div className='w-[200px] h-[90px] flex items-center justify-center gap-[50px] text-[40px]'>
        <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/subahan143"><i class="fa-brands fa-github"></i> </a>
        </div>
        </div>
        
        </div>
        <div id='about' className='w-[100%] h-[25vh] phone:h-[15vh] flex phone:bg-lime-600 items-center justify-center flex-col'>
        <h2 className='text-[25px] phone:text-[23px]'>Get To Know More</h2>
        <h1  className='text-[60px] phone:text-[40px]'>About Me</h1>
        </div>
        <div className='w-[100%] h-[80vh] phone:bg-red-500  flex items-center phone:flex-col phone:w-[100%] phone:h-[110vh] '>
        <div className='w-[50%] h-[75vh] flex items-center justify-center'>
        <img className='w-[500px] h-[520px] phone:w-[100%] phone:h-[40vh]' src="https://vishal-resume.vercel.app/assets/me2.avif" alt="" />
        </div>
        <div className='w-[50%] h-[75vh]  phone:w-[100%] phone:mt-2 phone:h-[60vh]  phone:flex phone:items-center phone:justify-center   phone:flex-col '>
        <div className='w-[100%] h-[30vh]  rounded-[30px] border-2 border-black flex items-center justify-center flex-col phone:w-[70%] phone:h-[20vh]'>
        <img className='w-[40px] h-[40px] ' src="https://vishal-resume.vercel.app/assets/experience.png" />
        <h2 className='text-[30px] phone:text-[20px]'>Experience</h2>
        <h2 className='text-[20px]'>2+ years</h2>
        <h1 className='text-[25px] phone:text-[20px]'>MERN Development</h1>
        </div>
        <div className='w-[80%] h-[44vh] flex items-center phone:w-[80%] phone:flex phone:items-center phone:justify-center phone:text-[15px]
        
        justify-center text-[21px]'>
        <p>As a MERN stack developer at the age of 21, you possess an exceptional level of dedication, passion, and ambition within the software development field. Your early immersion in this technology stack showcases your drive to excel and embrace emerging technologies. Your unique position as a young developer allows you to bring fresh perspectives and adaptability to the table.</p>
        </div>
        
        
        </div>
        </div>
        <div id='Experience' className='phone:h-[15vh] phone:w-[100%] phone:bg-orange-400 w-[100%] h-[26vh] flex items-center justify-center flex-col'>
        <h2 className='text-[25px]'>Explore My</h2>
        <h1 className='text-[55px] phone:text-[30px]'>Experience</h1>
        </div>
        
        <div className='w-[100%] h-[70vh] phone: flex items-center phone:bg-purple-500 phone:h-[60vh] justify-center '>
        <div className='w-[80%] h-[70vh] border-2  phone:bg-red-800 phone:w-[100%] phone:h-[90vh] justify-center flex-col gap-1  flex items-center border-black rounded-[30px]'>
        <div className='w-[100%] h-[60px] border-green-600   flex items-center justify-center text-[35px] phone:text-[25px]'>MERN Development</div>
        <div className='w-[100%] h-[130px]  flex justify-center gap-3 phone:w-[80%] phone:flex-col '>
        
        <div className='w-[200px] h-[130px] flex items-center phone:bg-indigo-500 phone:w-[170px] phone:h-[150px] justify-center gap-[10px]'>
        <div className='w-[25%] h-[10vh] phone:w-[20px] '>
        <img src="https://vishal-resume.vercel.app/assets/html.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh] phone:w-[40px]'>
        <h1 className='text-[20px] text-xl font-bold'>HTML</h1>
        <h2 className='text-[20px]'>Experienced</h2>
        </div>
        </div>
        
        
        <div className='w-[200px] h-[130px] flex items-center phone:bg-indigo-400 phone:w-[150px] phone:h-[100px] justify-center gap-[15px]'>
        <div className='w-[25%] h-[10vh] phone:w-[20px]'>
        <img src="https://vishal-resume.vercel.app/assets/css.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh] phone:w-[40px] '>
        <h1 className='text-[20px] text-xl font-bold' >CSS</h1>
        <h2 className='text-[20px]'>Experienced</h2>
        </div>
        </div>
        
        <div className='w-[200px] h-[130px] flex items-center  phone:bg-indigo-400 phone:w-[150px] phone:h-[100px] justify-center gap-[15px]'>
        <div className='w-[20%] h-[10vh]'>
        <img src="https://vishal-resume.vercel.app/assets/js.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh]'>
        <h1 className='text-[20px] text-xl font-bold' >JavaScript</h1>
        <h2 className='text-[20px]'>Expert</h2>
        </div>
        </div>
        <div className='w-[200px] h-[130px] flex items-center justify-center gap-[15px] '>
        <div className='w-[25%] h-[10vh] phone:w-[40%] '>
        <img src="https://vishal-resume.vercel.app/assets/react.jpg" alt="" />
        </div>
        <div className='phone:w-[60%] '>
        <h1 className='text-[20px] text-xl font-bold' >React</h1>
        <h2 className='text-[20px]'>Expert</h2>
        </div>
        </div>
        <div className='w-[200px] h-[130px]  flex items-center phone:flex phone:items-center phone:justify-center phone:w-[150px] phone:h-[100px] justify-center gap-[15px] phone:bg-indigo-400 '>
        <div className='w-[25%] h-[10vh] phone:w-[20px]'>
        <img src="https://vishal-resume.vercel.app/assets/tailwind.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh] phone:3-[40px]'>
        <h1 className='text-[20px] text-xl font-bold' >Tailwind</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        </div>
        <div className='w-[100%] h-[130px] phone:hidden flex justify-center gap-3 phone:flex-col '>
        
        <div className='w-[200px] h-[130px] flex items-center  phone:w-[150px] phone:h-[100px]  justify-center gap-[10px] '>
        <div className='w-[25%] h-[10vh]'>
        <img src="https://vishal-resume.vercel.app/assets/mongo.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh]'>
        <h1 className='text-[20px] text-xl font-bold' >Mongo-DB</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        
        
        <div className='w-[200px] h-[130px] flex items-center phone:w-[150px] phone:h-[100px] justify-center gap-[15px] '>
        <div className='w-[25%] h-[10vh]'>
        <img src="https://vishal-resume.vercel.app/assets/docker.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh]'>
        <h1 className='text-[20px] text-xl font-bold' >Docker</h1>
        <h2 className='text-[20px]'>Intermediate
        
        </h2>
        </div>
        </div>
        
        <div className='w-[200px] h-[130px] flex items-center phone:w-[150px] phone:h-[100px] justify-center gap-[15px]'>
        <div className='w-[20%] h-[10vh]'>
        <img src="https://vishal-resume.vercel.app/assets/ex.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh]'>
        <h1 className='text-[20px] text-xl font-bold' >Express</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        <div className='w-[200px] h-[130px] flex items-center phone:w-[150px] phone:h-[100px] justify-center gap-[15px]'>
        <div className='w-[25%] h-[10vh]'>
        <img src="https://vishal-resume.vercel.app/assets/digi.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh]'>
        <h1 className='text-[20px] text-xl font-bold' >VPS</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        <div className='w-[200px] h-[130px] flex items-center phone:w-[150px] phone:h-[100px] justify-center gap-[15px] '>
        <div className='w-[20%] h-[10vh]'>
        <img src="https://vishal-resume.vercel.app/assets/git.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh]'>
        <h1 className='text-[20px] text-xl font-bold' >Git/GIthub</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        </div>
        <div className='flex justify-center gap-[30px] pb-8 '> 
        <div className='w-[250px] h-[100px] flex items-center justify-center gap-[15px]'>
        <div className='w-[18%] h-[10vh]'>
        <img src="https://vishal-resume.vercel.app/assets/linux.jpg" alt="" />
        </div>
        
        <div className='w-[25%] h-[10vh]'>
        <h1 className='text-[20px] text-xl font-bold' >Linux</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>

        </div>
        <div className='w-[250px] h-[100px] flex items-center  justify-center gap-[15px]'>
        <div className='w-[15%] h-[10vh] '>
        <img src="https://vishal-resume.vercel.app/assets/firebas.png" alt="" />
        </div>
        <div className='w-[25%] h-[10vh] '>
        <h1 className='text-[20px] text-xl font-bold' >Firebase</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        
        </div>
        </div>
        <div className='w-[250px] h-[100px]  flex items-center justify-center gap-[15px]'>
        
        </div>
        
        </div>    
        </div>  
        </div>
        <div id='Contact' className='phone:hidden  w-[100%] h-[20vh] flex items-center justify-center flex-col'>
        <h2 className='text-[25px]'>Get in Touch</h2>
        <h2 className='text-[55px]'>Contact Me</h2>
        </div>
        <div className='w-[100%] h-[30vh] phone:hidden flex items-center justify-center '>
        <div className='w-[65%] h-[18vh] rounded-[50px] text-[25px] border-2  border-black flex items-center gap-[50px] '>
        <span className='flex items-center justify-center'>
        <i class="fa-solid fa-envelope text-3xl bg-white w-12 h-12 rounded-full flex items-center justify-center "></i>
        
        <a  href="https://webmail.au.syrahost.com/">
        <h1 className='text-[25px] hover:border-b-2 hover:border-slate-600  '   >kummithasubahan143@gmal.com</h1>
        </a>
        
        </span>     
        
        <span className='flex'><i class="fa-brands fa-linkedin text-[35px]  bg-white w-12 h-12 rounded-full flex items-center justify-center"></i>
        
        <a href='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'> <h1 className='text-[25px] hover:border-b-2 cursor-pointer  hover:border-slate-600 flex items-center justify-center'>LinkedIn</h1>
        </a></span>
        <span className='flex items-center justify-center gap-2'>
        <i class="fa-brands fa-linkedin text-[35px] hover:border-b-2 hover:border-red-500 bg-white w-12 h-12 flex justify-center items-center rounded-[100%]"></i>
        <a href="https://www.instagram.com/accounts/login/"><h1 className='text-[30px] hover:border-b-2 hover:border-black'> Instagram</h1>
        
        </a>
        </span>
        
        </div>
        </div>
        <div id='Projects' className='phone:hidden w-[100%] h-[15vh] text-[60px] flex items-center justify-center'>
        <h1>Projects</h1>
        </div>
        <div className='w-[100%] h-[200vh] phone:hidden flex items-center gap-10 justify-evenly  flex-wrap pl-[250px] pr-[250px]  '> 
        
        <div className='w-[30%] h-[78vh] phone:hidden rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col '>
        <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/akedu.png" alt="" />
        <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>Aspirings Ak-Product</h1>
        <a href="https://ak-edu.vercel.app/"><button className='w-[130px] h-[60px]  border-2 hover:bg-black hover:text-white border-black rounded-[30px] text-lg font-bold'>Live Demo</button></a>
        </div>
        <div className='w-[30%] h-[78vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col'>
        <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/rentmyprop.png" alt="" />
        <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>Rent my Properties</h1>
        <a href="https://therentmyproperties.com/"><button className='w-[130px] h-[60px]  border-2  hover:bg-black hover:text-white border-black rounded-[30px] text-lg font-bold'>Live Demo</button></a>
        </div>
        
        <div className='w-[30%] h-[78vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col'>
        <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/synerefe.png" alt="" />
        <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>Synerge - website</h1>
        <a href="https://synerge.vercel.app/"><button className='w-[130px] h-[60px]  border-2 border-black rounded-[30px]  hover:bg-black hover:text-white text-lg font-bold'>Live Demo</button></a>
        </div>

        
        <div className='w-[30%] h-[78vh] rounded-[30px] border-4 border-black flex items-center justify-center flex-col gap-[30px]'>
        <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/kiteelle2.png" alt="" />
        <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>Kitelle</h1>
        <a href="https://kitelle.com/"><button className='w-[130px] h-[60px]  border-2 border-black rounded-[30px] text-lg font-bold  hover:bg-black hover:text-white'>Live Demo</button></a>
        </div>
        
        <div className='w-[30%] h-[78vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col'>
        <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/aspironKhuze.png" alt="" />
        <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>AspironKhuze</h1>
        <a href="https://aspironkhuze.com/"><button className='w-[130px] h-[60px]  border-2 border-black rounded-[30px] text-lg font-bold  hover:bg-black hover:text-white'>Live Demo</button></a>
        </div>
        
        <div className='w-[30%] h-[78vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col'>
        <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/aktechs.png" alt="" />
        <h1 className='w-[85%] h-[100px] text-[35px] pl-[100px] '>Ak-</h1>
        <a href="https://aktechs.co.in/"><button className='w-[130px] h-[60px]  border-2 border-black rounded-[30px] text-lg font-bold  hover:bg-black hover:text-white'>Live Demo</button></a>  
    </div> 

        </div>
        
        
        
        </>
        
        )
    }
    
    export default Home
    
    
    
    
    
    
    
    
    
    