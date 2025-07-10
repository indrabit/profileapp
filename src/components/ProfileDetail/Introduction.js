import React from 'react';

const Introduction = () => {
  return (
    <div className='max-w-4xl mx-auto px-4 py-8'>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-blue-800 mb-2'>Introduction</h1>
        <div className='w-20 h-1 bg-orange-500 mx-auto'></div>
      </div>

      <div className='space-y-6'>
        <div className='bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500'>
          <p className='text-gray-700'>
            <span className='font-semibold text-blue-700'>I'm a passionate Software Developer</span> with expertise in React Native, React (JavaScript/TypeScript), C#, Django, and PHP Laravel, currently based on the Gold Coast. With experience across the full stack, I specialize in building scalable web and mobile applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500'>
          <p className='text-gray-700'>
            <span className='font-semibold text-orange-600'>What sets me apart</span> is my ability to bridge technical solutions with business needs, honed through diverse roles from Analyst Programmer at AWN Insurance to my current position at Civil Safety. My educational foundation includes a Masters in Information System Technology from USQ and ongoing studies in Cyber Security at TAFE Queensland.
          </p>
        </div>

        <div className='bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500'>
          <p className='text-gray-700'>
            <span className='font-semibold text-blue-700'>I thrive in collaborative environments</span> where I can leverage my problem-solving skills and full-stack capabilities. Currently expanding my expertise with AWS Cloud Practitioner certification, I'm eager to take on new challenges that push the boundaries of application development.
          </p>
        </div>
      </div>      
    </div>
  );
};

export default Introduction;