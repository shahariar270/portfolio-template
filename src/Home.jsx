import group from './assets/Group.png'
import profile from './assets/profile.jpg'



const HeroSection = () => {
  return (
    <div id='home' className=" relative w-[90%] m-auto h-[550px] bg-teal-900 ">
      <img src={group} className=' opacity-5  absolute left-[-190px]' alt="" />

      <div className="grid grid-cols-1 md:grid-cols-2 absolute top-[0px] m-auto justify-between w-[100%] ">

      <div className="flex flex-col w-[100%] h-full justify-center p-10 ">
        <h1 className=" text-3xl  md:text-7xl font-bold text-white">Hello! <br />
        I Am Shahariar </h1>
        <span className=' mt-7 text-sm lg:w-full text-[#fff]  md:w-[250px]'>I’am freelance <b className='text-white'>Web Developer</b> based in Bangladesh who loves   to craft attractive
        
             Developer experiences for the web</span>

             <button className='w-[150px] mt-[20px]  bg-[#E5745D] text-[#fff] py-5 px-7 rounded border
md:w-[43%]
border-white outline outline-[#E5745D]' >Contact Me</button>
      </div>

      <div className="w-[100%] flex justify-end">
        <img src={profile} alt="" className="md:h-[550px] md:w-[90%] h-[100%] w-[100%] " />
      </div>
      
</div>
      </div>
  );
}

export default HeroSection;
