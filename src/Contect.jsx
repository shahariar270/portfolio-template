import img from './assets/images.png';
import line from './assets/line.png';

const Contact = () => {
  return (
    <div id='contact' className='w-full md:w-[90%] lg:w-[70%] m-auto grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 px-4'>
      {/* Image Section */}
      <div className="w-full">
        <img className='h-[300px] md:h-[470px] w-full object-cover' src={img} alt="Contact" />
      </div>

      {/* Form Section */}
      <div className="w-full p-4 md:p-8">
        {/* Header */}
        <div className="h-2 text-[#E5745D] flex flex-row items-center mb-4">
          <img src={line} alt="line" className="mr-2" />
          <h4 className="text-lg">Get In Touch</h4>
        </div>
        <h1 className='text-2xl md:text-3xl text-info mt-5 font-medium'>Feel Free to Contact</h1>

        {/* Contact Form */}
        <div className="mt-10">
          <form action="" className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <input type="text" className="p-3 placeholder:text-info placeholder:text-lg border rounded-md" placeholder='Enter Name' />
            <input type="email" className="p-3 placeholder:text-info placeholder:text-lg border rounded-md" placeholder='Enter Email' />
            <input type="number" className="p-3 placeholder:text-info placeholder:text-lg border rounded-md" placeholder='Phone' />
            <input type="text" className="p-3 placeholder:text-info placeholder:text-lg border rounded-md" placeholder='Subject' />
            <textarea className="md:col-span-2 p-3 placeholder:text-info placeholder:text-lg border rounded-md" placeholder='Message' rows="4"></textarea>
          </form>
          <button className="bg-[#E5745D] mt-8 text-white py-4 px-6 rounded border border-white outline outline-[#E5745D] hover:bg-[#D55A4B] transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
