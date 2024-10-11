import group from './assets/Group.png'
import profile from './assets/profile.jpg'

const Home = () => {
  return (
    <div id='home' className="container   bg-[#00413D] h-[570px] m-auto relative
    ">
      <img className=' absolute left-[-220px] opacity-5 ' src={group} alt="" />

      <div className="  flex relative justify-between  ">
      
        <div className=" flex flex-col absolute top-[120px] left-[200px] text-[#fff] z-10 ">
        

          <h1 className='lg:text-6xl font-mono md:text-3xl   '>Hello, <br className=' mt-3 ' /> I am Shahariar Islam </h1>

          <span className='text-sm lg:w-full text-xnxx  md:w-[250px]'>I’am freelance <b className='text-white'>Web Developer</b> based in Bangladesh who loves to craft attractive
            <br />
             Developer experiences for the web</span>
             

<button className='w-2/6 mt-[20px]  bg-[#E5745D] text-[#fff] py-5 px-7 rounded border
md:w-[43%]
border-white outline outline-[#E5745D]' >Contact Me</button>

            
       
        </div>

        <div className=" absolute left-[60%]  ">
          <img className='w-[600px] h-[570px] ' src={profile} alt="" />
        </div>
      </div>


    </div>
  )
}

export default Home