    import line from './assets/line.png'
    import Slider from "react-slick";
    import mask from './assets/Avatar.png'
    import star from './assets/Star.png'

const Client = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="mt-[150px] mb-[150px] w-[70%] m-auto   ">
         <div className="m-auto h-2 text-[#E5745D] flex flex-row justify-center items-center">
        <img src={line} alt="line" className="mr-2" />
        <h4 className="text-lg">Client Testimonial</h4>
      </div>
      <h1 className="text-2xl  md:text-5xl text-center font-ff font-semibold mt-5 text-info  ">Feedback From Client</h1>
    <div className="text-center mt-7">
    <Slider  {...settings}>
        {/* start */}
        <div>
          <div className="h-1 w-[500px] bg-hots "></div>
            <p className='px-10 py-7 text-sm md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry.</p>
          
         <br />
         <div className="pt-5 pl-14 flex   ">
            <img className='md:h-full h-[90px]' src={mask} alt="" />
            <div className="pl-7 pt-3 items-start ">
                <h4 className=" text-sm md:text-xl font-ff font-semibold text-info ">Michale Doie</h4>
                <h5 className="text-[10px] md:text-sm ">Product Designer</h5>
                <img src={star} alt="" />
            </div>
         </div>
        </div>
        {/* end */}


           {/* start */}
           <div>
          <div className="h-1 w-[500px] bg-hots "></div>
            <p className='px-10 py-7 text-sm md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry.</p>
          
         <br />
         <div className="pt-5 pl-14 flex   ">
            <img className='md:h-full h-[90px]' src={mask} alt="" />
            <div className="pl-7 pt-3 items-start ">
                <h4 className=" text-sm md:text-xl font-ff font-semibold text-info ">Michale Doie</h4>
                <h5 className="text-[10px] md:text-sm ">Product Designer</h5>
                <img src={star} alt="" />
            </div>
         </div>
        </div>
        {/* end */}

           {/* start */}
           <div>
          <div className="h-1 w-[500px] bg-hots "></div>
            <p className='px-10 py-7 text-sm md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry.</p>
          
         <br />
         <div className="pt-5 pl-14 flex   ">
            <img className='md:h-full h-[90px]' src={mask} alt="" />
            <div className="pl-7 pt-3 items-start ">
                <h4 className=" text-sm md:text-xl font-ff font-semibold text-info ">Michale Doie</h4>
                <h5 className="text-[10px] md:text-sm ">Product Designer</h5>
                <img src={star} alt="" />
            </div>
         </div>
        </div>
        {/* end */}

           {/* start */}
           <div>
          <div className="h-1 w-[500px] bg-hots "></div>
            <p className='px-10 py-7 text-sm md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry.</p>
          
         <br />
         <div className="pt-5 pl-14 flex   ">
            <img className='md:h-full h-[90px]' src={mask} alt="" />
            <div className="pl-7 pt-3 items-start ">
                <h4 className=" text-sm md:text-xl font-ff font-semibold text-info ">Michale Doie</h4>
                <h5 className="text-[10px] md:text-sm ">Product Designer</h5>
                <img src={star} alt="" />
            </div>
         </div>
        </div>
        {/* end */}


           {/* start */}
           <div>
          <div className="h-1 w-[500px] bg-hots "></div>
            <p className='px-10 py-7 text-sm md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry.</p>
          
         <br />
         <div className="pt-5 pl-14 flex   ">
            <img className='md:h-full h-[90px]' src={mask} alt="" />
            <div className="pl-7 pt-3 items-start ">
                <h4 className=" text-sm md:text-xl font-ff font-semibold text-info ">Michale Doie</h4>
                <h5 className="text-[10px] md:text-sm ">Product Designer</h5>
                <img src={star} alt="" />
            </div>
         </div>
        </div>
        {/* end */}

           {/* start */}
           <div>
          <div className="h-1 w-[500px] bg-hots "></div>
            <p className='px-10 py-7 text-sm md:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and this
            typesetting industry.</p>
          
         <br />
         <div className="pt-5 pl-14 flex   ">
            <img className='md:h-full h-[90px]' src={mask} alt="" />
            <div className="pl-7 pt-3 items-start ">
                <h4 className=" text-sm md:text-xl font-ff font-semibold text-info ">Michale Doie</h4>
                <h5 className="text-[10px] md:text-sm ">Product Designer</h5>
                <img src={star} alt="" />
            </div>
         </div>
        </div>
        {/* end */}
        
      </Slider>
    </div>

    </div>
  )
}

export default Client