import React,{useState,createContext} from 'react';
import Profile from './Profile';
import profileImg from '../../assets/profile-img.jpg'
export const DataContext=createContext();
const ProfileHeader = () => {
    const [selected, setSelected] = useState('introduction'); 
    const [active, setActive]=useState(0);
    const Menus=[
        { name: "introduction",value:'Introduction' },
        { name: "education",value:'Education Background' },
        { name: "career",value:'Career History' },
        { name: "skills",value:'Skills' },
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
            <div className='justify-center' >
                <div className="lg:w-4/5 h-48 mx-auto  flex justify-center bg-gray-100 rounded-bl-lg  bg-gradient-to-b from-gray-100 via-gray-100 to-gray-400 ">                                       
                    <img src={profileImg} alt='Profile' className='rounded-full  border-4 border-white w-40 h-40 top-14 md:absolute' />                   
                </div>                
            </div>        
        </div>
        {/* info */}
        <div className='flex justify-center flex-col mt-5 mb-3.5'>    
            <h1 className="text-center font-bold text-3xl">Indra Shrestha</h1>            
        </div>              
        <div className="w-full md:flex justify-center">            
            <div className=" md:flex  mb-10">
                <ul className='flex relative'>
                      {Menus.map((menu, i) => (
                        <li key={i} className="w-40">
                        <h4 className="flex flex-col text-center pt-4" onClick={()=>handleMenu(menu.name,i)}>
                                <span className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6 text-slate-400"}`}></span>
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
        <div className='bg-white border rounded-lg shadow-md' style={{ width: '940px', height: 'auto' }}>
            <DataContext.Provider value={selected}>                    
                <Profile/>        
            </DataContext.Provider>
        </div>
    </div>
    
    
    </>
  )
}

export default ProfileHeader;