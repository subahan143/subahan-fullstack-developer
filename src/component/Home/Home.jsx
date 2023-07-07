import React from 'react'

const Home = () => {
    return (
        <>
        <div className='w-[100%] h-[80vh] flex items-center justify-center'>
        
        <div className='w-[50%] h-[70vh] flex items-center justify-center'>
        <img className='w-[400px] rounded-3xl border-2 border-red-900'src="https://vishal-resume.vercel.app/assets/me1.avif" alt="" />
        </div>
        <div className='w-[50%] h-[70vh] pr-[200px] flex items-center justify-center flex-col gap-[20px]'>
        <h2 className='text-[20px]'>Hello, I'm</h2>
        <h1 className='text-[50px]'>subahan gehlot</h1>
        <h3 className='text-[25px]'>full Stack Developer</h3>
        <button className='border-[5px] w-[150px] h-[60px] rounded-[30px] border-black hover:bg-red-400 hover:text-white bg bg-red-300'>Download CV</button>
        <div className='w-[200px] h-[90px] flex items-center justify-center gap-[50px] text-[40px]'>
        <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/subahan143"><i class="fa-brands fa-github"></i> </a>
        </div>
        </div>
        
        </div>
        <div id='about' className='w-[100%] h-[25vh] flex items-center justify-center flex-col'>
        <h2 className='text-[25px]'>Get To Know More</h2>
        <h1  className='text-[60px]'>About Me</h1>
        </div>
        <div className='w-[100%] h-[80vh] flex items-center '>
        <div className='w-[50%] h-[75vh] flex items-center justify-center'>
        <img className='w-[500px] h-[520px]' src="https://vishal-resume.vercel.app/assets/me2.avif" alt="" />
        </div>
        <div className='w-[50%] h-[75vh] '>
        <div className='w-[100%] h-[30vh]  rounded-[30px] border-2 border-black flex items-center justify-center flex-col'>
        <img className='w-[40px] h-[40px]' src="https://vishal-resume.vercel.app/assets/experience.png" />
        <h2 className='text-[30px]'>Experience</h2>
        <h2 className='text-[20px]'>2+ years</h2>
        <h1 className='text-[25px]'>MERN Development</h1>
        </div>
        <div className='w-[80%] h-[44vh] flex items-center justify-center text-[21px]'>
        <p>As a MERN stack developer at the age of 21, you possess an exceptional level of dedication, passion, and ambition within the software development field. Your early immersion in this technology stack showcases your drive to excel and embrace emerging technologies. Your unique position as a young developer allows you to bring fresh perspectives and adaptability to the table.</p>
        </div>
        
        
        </div>
        </div>
        <div id='Experience' className='w-[100%] h-[26vh] flex items-center justify-center flex-col'>
        <h2 className='text-[25px]'>Explore My</h2>
        <h1 className='text-[55px]'>Experience</h1>
        </div>
        
        <div className='w-[100%] h-[70vh] flex items-center justify-center bo'>
        <div className='w-[80%] h-[60vh] border-2 border-black rounded-[30px]'>
        <div className='w-[100%] h-[60px] border-green-600 flex items-center justify-center text-[35px]'>MERN Development</div>
        <div className='w-[100%] h-[130px] flex justify-center gap-3 '>
        
        <div className='w-[200px] h-[130px] flex items-center justify-center gap-[10px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/html.png" alt="" />
        </div>
        <div>
        <h1 className='text-[20px] text-xl font-bold' >HTML</h1>
        <h2 className='text-[20px]'>Experienced</h2>
        </div>
        </div>
        
        
        <div className='w-[200px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/css.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >CSS</h1>
        <h2 className='text-[20px]'>Experienced</h2>
        </div>
        </div>
        
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[20%] h-[20px]'>
        <img src="https://vishal-resume.vercel.app/assets/js.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >JavaScript</h1>
        <h2 className='text-[20px]'>Expert</h2>
        </div>
        </div>
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/react.jpg" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >React</h1>
        <h2 className='text-[20px]'>Expert</h2>
        </div>
        </div>
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/tailwind.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >Tailwind</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        </div>
        <div className='w-[100%] h-[130px] flex justify-center gap-3 '>
        
        <div className='w-[200px] h-[130px] flex items-center justify-center gap-[10px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/mongo.png" alt="" />
        </div>
        <div>
        <h1 className='text-[20px] text-xl font-bold' >Mongo-DB</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        
        
        <div className='w-[200px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/docker.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >Docker</h1>
        <h2 className='text-[20px]'>Intermediate
        
        </h2>
        </div>
        </div>
        
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/ex.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >Express</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/digi.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >VPS</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[25%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/git.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >Git/GIthub</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        </div>
        <div className='flex justify-center gap-[30px] pb-8'> 
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[15%] h-[18.vh] bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/linux.jpg" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >Linux</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        </div>
        </div>
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[15%]  bg-red-600'>
        <img src="https://vishal-resume.vercel.app/assets/firebas.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >Firebase</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        
        </div>
        </div>
        <div className='w-[250px] h-[130px] flex items-center justify-center gap-[15px]'>
        <div className='w-[26%] h-[40px]'>
        <img src="https://vishal-resume.vercel.app/assets/ndoe.png" alt="" />
        </div>
        <div className=''>
        <h1 className='text-[20px] text-xl font-bold' >Node -js</h1>
        <h2 className='text-[20px]'>Intermediate</h2>
        
        </div>  
        </div>
        
        </div>    
        </div>  
        </div>
        <div id='Contact' className='w-[100%] h-[20vh] flex items-center justify-center flex-col'>
        <h2 className='text-[25px]'>Get in Touch</h2>
        <h2 className='text-[55px]'>Contact Me</h2>
        </div>
        <div className='w-[100%] h-[30vh] flex items-center justify-center '>
            <div className='w-[65%] h-[18vh] rounded-[50px] text-[25px] border-2  border-black flex items-center gap-[50px] '>
           <span className='flex items-center justify-center'>
           <i class="fa-solid fa-envelope text-3xl bg-white w-12 h-12 rounded-full flex items-center justify-center "></i>
                <a  href="https://webmail.au.syrahost.com/">
                    <h1 className='text-[25px] hover:border-b-2 hover:border-slate-600  '>kummithasubahan143@gmal.com</h1>
                </a>

            </span>     
            
            <span className='flex '>   <i class="fa-brands fa-linkedin text-[35px]  bg-white w-12 h-12 rounded-full flex items-center justify-center"></i>

<a href='https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2F'> <h1 className='text-[25px] hover:border-b-2 cursor-pointer  hover:border-slate-600   '>LinkedIn</h1>
</a></span>
<span className='flex items-center justify-center gap-2'>
<i class="fa-brands fa-linkedin text-[35px] hover:border-b-2 hover:border-red-500 bg-white w-12 h-12 flex justify-center items-center rounded-[100%]"></i>
    <a href="https://www.instagram.com/accounts/login/"><h1 className='text-[30px] hover:border-b-2 hover:border-y-red-950'> Instagram</h1>

</a>
</span>
                
            </div>
        </div>
        <div id='Projects' className='w-[100%] h-[15vh] text-[60px] flex items-center justify-center'>
       <h1>Projects</h1>
        </div>
        <div className='w-[100%] h-[200vh] flex items-center gap-10 justify-evenly  flex-wrap pl-[250px] pr-[250px]  '> 

                <div className='w-[30%] h-[75vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col '>
                    <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/akedu.png" alt="" />
                    <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>Aspirings Ak-Product</h1>
                    <a href="https://ak-edu.vercel.app/"><button className='w-[130px] h-[60px]  border-2 hover:bg-black hover:text-white border-black rounded-[30px] text-lg font-bold'>Live Demo</button></a>
                </div>


                <div className='w-[30%] h-[75vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col'>
                <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/rentmyprop.png" alt="" />
                    <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>Rent my Properties</h1>
                    <a href="https://therentmyproperties.com/"><button className='w-[130px] h-[60px]  border-2  hover:bg-black hover:text-white border-black rounded-[30px] text-lg font-bold'>Live Demo</button></a>
                </div>

                <div className='w-[30%] h-[75vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col'>
                <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/synerefe.png" alt="" />
                    <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>Synerge - website</h1>
                    <a href="https://synerge.vercel.app/"><button className='w-[130px] h-[60px]  border-2 border-black rounded-[30px]  hover:bg-black hover:text-white text-lg font-bold'>Live Demo</button></a>
                </div>
                
                <div className='w-[30%] h-[75vh] rounded-[30px] border-4 border-black flex items-center justify-center flex-col gap-[30px]'>
                <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/kiteelle2.png" alt="" />
                    <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>Kitelle</h1>
                    <a href="https://kitelle.com/"><button className='w-[130px] h-[60px]  border-2 border-black rounded-[30px] text-lg font-bold  hover:bg-black hover:text-white'>Live Demo</button></a>
                </div>

                <div className='w-[30%] h-[75vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col'>
                <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/aspironKhuze.png" alt="" />
                    <h1 className='w-[85%] h-[100px] text-[35px] pl-[20px]'>AspironKhuze</h1>
                    <a href="https://aspironkhuze.com/"><button className='w-[130px] h-[60px]  border-2 border-black rounded-[30px] text-lg font-bold  hover:bg-black hover:text-white'>Live Demo</button></a>
                </div>

                <div className='w-[30%] h-[75vh] rounded-[30px] border-4 border-black flex items-center justify-center gap-[30px] flex-col'>
                <img className='w-[85%] h-[40vh] rounded-[20px]' src="https://vishal-resume.vercel.app/assets/aktechs.png" alt="" />
                    <h1 className='w-[85%] h-[100px] text-[35px] pl-[100px] '>Ak-</h1>
                    <a href="https://aktechs.co.in/"><button className='w-[130px] h-[60px]  border-2 border-black rounded-[30px] text-lg font-bold  hover:bg-black hover:text-white'>Live Demo</button></a>  
                </div>


                

        </div>

        
        
        </>
        
        )
    }
    
    export default Home
    