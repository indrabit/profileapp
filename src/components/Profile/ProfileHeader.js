import React,{useState,createContext} from 'react';
import Profile from './Profile';
import profileImg from '../../assets/profile-img.jpg'
export const DataContext=createContext();
const ProfileHeader = () => {
    const [selected, setSelected] = useState('introduction'); 
    const [active, setActive]=useState(0);
    const Menus=[
        { name: "introduction",value:'Introduction' },
        { name: "skills",value:'Skills' },
        { name: "career",value:'Career History' },
        { name: "education",value:'Education Background' },                
        { name: "contact", value:'Contact' },
    ] 
    const handleMenu=(menu,i)=>{
        setActive(i);
        setSelected(menu);
    }  
  return (
    <>
    <div>
        <div className='w-full'>
            <div className='justify-center'>
                <div className="w-full md:w-11/12 lg:w-4/6 h-48 mx-auto  flex justify-center bg-gray-100 rounded-bl-lg  bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400 ">                                       
                    <img src={profileImg} alt='Profile' className='rounded-full  border-4 border-white w-40 h-40 top-14 md:absolute' />                   
                </div>                
            </div>        
        </div>
        {/* info */}
        <div className='justify-center -mt-8  md:mt-5 md:mb-3.5'>    
            <h1 className="text-center font-bold text-3xl">Indra Shrestha</h1>            
            <h4 className="text-center font-bold text-slate-600 text-opacity-70">Full Stack Developer</h4>            
        </div>              
        <div className="w-full md:flex justify-center">            
            <div className=" md:flex  mb-8">
                <ul className='flex relative decoration-slice'>
                      {Menus.map((menu, i) => (
                        <li key={i} className="min-w-48 px-1 rounded-lg">
                            <h4 className="flex flex-col text-center pt-4 px-0" onClick={()=>handleMenu(menu.name,i)}>
                                <span className={`text-2xl cursor-pointer duration-500 ${i === active && "-mt-2 text-slate-400"}`}></span>
                                <span className={` ${active === i? "translate-y-10 duration-700 bg-slate-500":"bg-slate-400 translate-y-10"} `}>
                                    {menu.value}
                                </span>
                            </h4>
                        </li>
                    ))}              
                </ul>                
            </div>                    
        </div>               
    </div>
    <div className='w-full flex justify-center'>
        <div className='bg-white border rounded-lg shadow-md w-full md:w-11/12 lg:w-4/6 h-48 mx-auto '>
            <DataContext.Provider value={selected}>                    
                <Profile/>        
            </DataContext.Provider>
        </div>
    </div>
    
    
    </>
  )
}

export default ProfileHeader;