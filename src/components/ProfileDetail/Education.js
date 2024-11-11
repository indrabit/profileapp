import React from 'react';

const Education = () => {
    const coruselist=[
    {course:'Masters of Information System Technology ',complete:'2013',campus:'University of Southern Queensland (USQ), Australia'},
    {course:'Bachelor In Information Technology ',complete:'2005',campus:'Purwanchal University, Nepal'},    
    {course:'Advanced Diploma In Web Development & Multimedia',complete:'2010',campus:'Central College, Australia'},
    {course:'Diploma In Software Development',complete:'2022',campus:'TAFE Queensland, Coomera'}
    ]
  return (
    <div className=' flex items-center justify-center pt-10 flex-col'>                
        <h1 className='font-semibold text-xl mt-5'>Education Background</h1>
        <div className="w-full md:flex justify-center">  

         {coruselist.map((list) => (
            <div className='bg-slate-200 p-4'>
                <div className='font-thin text-xl mb-2'>{list.course}</div>
                    <p class="text-gray-600">Completed: {list.complete}</p>
                    <p className='text-gray-700 text-base'>{list.campus}</p>
                </div>  
                    ))}      

        
           
                       
        </div>                                
    </div>
  )
}

export default Education;