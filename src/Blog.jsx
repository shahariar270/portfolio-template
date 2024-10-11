import { useEffect, useState } from 'react';
import line from './assets/Line.png';
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [openStates, setOpenStates] = useState({});
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    fetch('Blog.json')
      .then(response => response.json())
      .then(data => setData(data));

    setTimeout(function () {
      setLoad(false);
    }, 2000);
  }, []);

  const btnHandle = () => {
    setVisible((value) => value + 3);
  };

  const para = {
    WebkitLineClamp: 2,
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
    <div id='blog' className="font-ff w-full md:w-[90%] lg:w-[70%] m-auto mt-12 px-4">
      {/* Header Section */}
      <div className="m-auto h-2 text-[#E5745D] flex flex-row justify-center items-center">
        <img src={line} alt="" />
        <h4 className="text-lg">Latest Blogs</h4>
      </div>
      <h1 className='text-3xl md:text-5xl text-info text-center py-5'>Blog & Articles</h1>

      {/* Blog Content Section */}
      <div>
        {load ? (
          <div className="border-primary h-20 w-20 animate-spin rounded-full border-8 border-t-hots m-auto"></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.slice(0, visible).map(data => (
              <div className="h-auto max-w-sm mx-auto" key={data.id}>
                <img className='w-full h-[200px] md:h-[270px] object-cover' src={data.img} alt="" />
                <div className="p-4 grid grid-cols-2 justify-between">
                  <h3 className='text-sm text-hots'>By {data.writer}</h3>
                  <h4 className='text-sm text-info'>{data.date}</h4>
                </div>
                <div>
                  <h2 className='text-xl md:text-2xl p-3 text-primary'>{data.title}</h2>
                  <p style={openStates[data.id] ? null : para} className='text-sm p-3 text-primary'>
                    {data.description}
                  </p>
                </div>
                <button className="flex items-center p-5 text-info" onClick={() => toggleOpen(data.id)}>
                  {openStates[data.id] ? 'Read Less' : 'Read More'}
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-[#E5745D] text-white py-4 px-6 rounded border border-white hover:bg-[#D55A4B] transition duration-300"
          onClick={btnHandle}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Blog;
