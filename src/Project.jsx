import { useEffect, useState } from 'react';
import line from './assets/line.png';
import { FaArrowRight } from "react-icons/fa";

const Project = () => {
  const [data, setData] = useState([]);
  const [openStates, setOpenStates] = useState({});
  const [visible, setVisible] = useState(3);

  const buttonHandle = () => {
    setVisible((value) => value + 3);
  };

  useEffect(() => {
    fetch('Project.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  const para = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  };

  const toggleOpen = (id) => {
    setOpenStates(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div id="project" className="mt-[120px] w-[90%] md:w-[80%] lg:w-[70%] m-auto">
      {/* Heading */}
      <div className="flex flex-row items-center text-[#E5745D] my-4">
        <img src={line} alt="line" />
        <h4 className="text-lg ml-2">Recent Projects</h4>
      </div>
      <h1 className="text-3xl md:text-5xl text-info font-semibold mt-4">My Recent Projects</h1>

      {/* Projects Grid */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.slice(0, visible).map((project) => (
            <div key={project.id} className="h-auto">
              <img className="h-[250px] w-full object-cover" src={project.img} alt={project.title} />
              <h4 className="mt-4 p-2 text-[16px] text-hots">{project.len}</h4>
              <h1 className="text-xl md:text-2xl p-2 h-[75px] text-info font-semibold">{project.title}</h1>
              <p
                style={openStates[project.id] ? null : para}
                className="text-sm text-primary p-2"
              >
                {project.des}
              </p>
              <button
                className="text-hots mt-2 p-3 flex items-center"
                onClick={() => toggleOpen(project.id)}
              >
                {openStates[project.id] ? 'Close Case Studies' : 'View Case Studies'}
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#E5745D] text-white py-3 px-6 rounded border border-white outline outline-[#E5745D] hover:bg-[#D55A4B] transition"
            onClick={buttonHandle}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
