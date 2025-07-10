import React from 'react';

const Education = () => {
    const educationList = [
        { 
            course: 'Graduate Certificate in Cyber Security', 
            complete: 'Currently Enrolled', 
            campus: 'TAFE Queensland, Coomera',
            highlight: true
        },
        { 
            course: 'AWS Cloud Practitioner Certification', 
            complete: 'In Progress', 
            campus: 'Amazon Web Services',
            highlight: true
        },
        {
            course: 'Masters of Information System Technology', 
            complete: '2013', 
            campus: 'University of Southern Queensland (USQ), Australia'
        },
        {
            course: 'Bachelor of Information Technology', 
            complete: '2005', 
            campus: 'Purwanchal University, Nepal'
        },    
        {
            course: 'Advanced Diploma in Web Development & Multimedia',
            complete: '2010', 
            campus: 'Central College, Australia'
        },
        {
            course: 'Diploma in Software Development',
            complete: '2022', 
            campus: 'TAFE Queensland, Coomera'
        }
    ];

    return (
        <div className='flex items-center justify-center pt-10 flex-col'>                
            <h1 className='font-semibold text-xl mt-5 mb-6'>Education Background</h1>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">  
                {educationList.map((item, index) => (
                    <div 
                        key={index} 
                        className={`p-4 rounded-lg shadow-md ${item.highlight ? 'bg-blue-50 border-l-4 border-blue-500' : 'bg-slate-100'}`}
                    >
                        <div className='font-medium text-lg mb-2 text-gray-800'>{item.course}</div>
                        <p className={`text-sm mb-1 ${item.highlight ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>
                            Status: {item.complete}
                        </p>
                        <p className='text-gray-700 text-sm'>{item.campus}</p>
                    </div>  
                ))}      
            </div>                                
        </div>
    );
}

export default Education;