import myphotos from './assets/myphotos.jpg'
import ai from './assets/ai.jpeg'
import ex from './assets/ex.png'
import line from './assets/line.png'
import Progress from './Progress'



const About = () => {
  

  return (
    <div id="about" className="mt-10 w-[70%] m-auto  ">
 
 <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 ">

  <div className="grid grid-cols-2 gap-4 ">
    <div>
      <img className='w-[350px] h-[350px] md:h-[491px] ' src={myphotos} alt="" />
    </div>
    <div className=" grid grid-rows-2 gap-4 ">
      <img className=' w-[170px] h-[150px] md:h-[246px] ' src={ai} alt="" />
      <img src={ex} alt="" />
    </div>

  </div>

  <div className="  ">
  <div className="m-auto h-2 text-[#E5745D] flex flex-row text-start justify-start">
        <img src={line} alt="" />
        <h4 className="text-lg">About ME</h4>
      </div>

<div className="">
  <h3 className='text-2xl md:text-4xl  mt-10 text-info font-ff font-bold '>I Enjoy Solving Problems <br />
  With Scalable Solutions</h3>

  <span className=" mt-10 font-ff text-info text-sm md:text-[16px]  ">
    I am a software engineer with a passion for building scalable and efficient solutions. I have a strong
    foundation in computer science and a keen eye for detail. 
    <br /> <br />
    I am always looking for ways to improve
    processes and systems, and I am excited to bring my skills and experience to a new challenge.
  

  </span>
  <br />
  <button className="mt-10 bg-[#E5745D] text-[#fff] py-5 px-7 rounded border border-white outline outline-[#E5745D] hover:bg-[#D55A4B] transition">Download CV</button>

</div>

  </div>



 </div>

 <div className="m-auto mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
    <Progress percentage='90' value='HTML5 & CSS3' />
    <Progress percentage='80' value='Javascript' />
    <Progress percentage='75'  value='React js'/>
    <Progress percentage='90' value='Bootstrap & Tailwind' />
    

    </div>
  </div>
  )
}

export default About