import React from 'react';
import workExperience from './work.json'; 

const WorkItem = ({ date, title, location, skills, description }) => {
  return (
    <div className='pb-10 border-b-2 border-zinc-300 mt-8'>
      <h5>{date}</h5>
      <h1 className='text-xl'>
        {title} <span>({location})</span>
      </h1>
      <p>{skills}</p>
      <p className='text-sm'>{description}</p>
    </div>
  );
};

function Work() {


  return (
    <div className='w-full flex flex-col items-center text-white'>
      <div className='mt-8 w-1/2 h-auto'>
        {workExperience.map((work, index) => (
          <WorkItem
            key={index}
            date={work.date}
            title={work.title}
            location={work.location}
            skills={work.skills}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;