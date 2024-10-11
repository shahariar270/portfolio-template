import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = ({ percentage, value }) => {
  return (
    <div className='w-[100%] hover:shadow-2xl hover:shadow-info'>

      <div style={{ width: 150, height: 150 }} className='m-auto'>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={3}
          styles={buildStyles({
            // Customize the path color
            pathColor: `rgba(229, 116, 93, ${percentage / 100})`,
            // Customize the trail color
            trailColor: '#d6d6d6',
            // Customize the text color
            textColor: '#f88',
            // Customize the background color
            backgroundColor: '#3e98c7',
          })}
        />
      </div>
      <br />
      <h3 className='text-center text-info text-2xl font-semibold font-ff'>{value}</h3>

    </div>
  );
};

export default Progress;