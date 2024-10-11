import { useEffect, useState } from 'react';
import line from './assets/line.png';

const Protfolio = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    fetch('Photos.json')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Divide data into chunks of 4
  const itemsPerPage = 4;
  const chunkedData = [];
  for (let i = 0; i < data.length; i += itemsPerPage) {
    chunkedData.push(data.slice(i, i + itemsPerPage));
  }

  return (
    <div id='portfolio' className='w-[70%] m-auto grid justify-center mt-[50px] font-ff'>
      <div className="m-auto h-2 text-[#E5745D] flex flex-row items-center">
        <img src={line} alt="line" className="mr-2" />
        <h4 className="text-lg">Recent Projects</h4>
      </div>
      <h1 className='text-center text-5xl text-info font-medium mt-12'>My Work Example</h1>

      {/* Tabs */}
      <div className="flex justify-center mt-8 space-x-4">
        {chunkedData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index + 1)}
            className={`px-4 py-2 text-sm font-medium border-b-2 rounded-t-lg ${
              activeTab === index + 1
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent hover:border-gray-300 hover:text-gray-600'
            }`}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {chunkedData[activeTab - 1] &&
          chunkedData[activeTab - 1].map((item) => (
            <div className="w-[470px] h-[520px] m-auto" key={item.id}>
              <img className='w-[470px] h-[420px]' src={item.url} alt={item.title} />
             <div className="text-center  h-[100px] 
               bg-info flex items-center justify-start text-[#fff] 
              "> 
               <h2 className="font-medium  text-2xl font p-2   ">{item.title}</h2>
          
               </div>
               
            </div>
          ))}
      </div>
    </div>
  );
};

export default Protfolio;
