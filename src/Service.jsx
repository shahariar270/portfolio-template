import { useEffect, useState } from 'react';
import line from './assets/Line.png';
import { FaArrowRight } from "react-icons/fa";

const Service = () => {
  const [data, setData] = useState([]);
  const [openStates, setOpenStates] = useState({});

  useEffect(() => {
    fetch('Service.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const para = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: 'hidden',
    display: '-webkit-box',
  };

  const toggleOpen = (id) => {
    setOpenStates(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div id='service' className="mt-20 w-[70%] m-auto">
      <div className="m-auto h-2 text-[#E5745D] flex flex-row text-center justify-center">
        <img src={line} alt="" />
        <h4 className="text-lg">MY SERVICES</h4>
      </div>

      <div className="text-center text-5xl font-bold font-mono mt-5">
        <h1>Provide Wide Range of <br /> Digital Services</h1>

        <div className='flex flex-wrap mt-5'>
          {data.map(item => (
            <div key={item.id} className="w-[30%] h-[60`0px] grid p-7 hover:shadow-lg hover:shadow-zinc-800">
              <img className="w-16 h-16" src={item.img} alt={item.title} />
              <p className='text-lg font-bold text-[#00413D]'>{item.title}</p>
              <p style={openStates[item.id] ? null : para} className='text-sm text-primary'>
                {item.description}
              </p>
              <button
                className='grid text-hots mt-2'
                onClick={() => toggleOpen(item.id)}
              >
                {openStates[item.id] ? '' : ''}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;