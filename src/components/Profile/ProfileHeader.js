import React, { useState, createContext } from 'react';
import Profile from './Profile';
import profileImg from '../../assets/profile-img.jpg';

export const DataContext = createContext();

const ProfileHeader = () => {
    const [selected, setSelected] = useState('introduction');
    const [active, setActive] = useState(0);
    
    const Menus = [
        { name: "introduction", value: 'Introduction' },
        { name: "skills", value: 'Skills' },
        { name: "career", value: 'Experience' },
        { name: "education", value: 'Education' },
        { name: "contact", value: 'Contact' },
    ];

    const handleMenu = (menu, i) => {
        setActive(i);
        setSelected(menu);
    };

    return (
        <div className="w-full max-w-6xl mx-auto">
            {/* Profile Header */}
            <div className="relative bg-gradient-to-r from-orange-50 to-white rounded-t-xl overflow-hidden">
                {/* Background Banner */}
                <div className="h-32 bg-gradient-to-r from-orange-200 to-blue-300 w-full"></div>
                
                {/* Profile Picture and Basic Info */}
                <div className="flex flex-col items-center px-4 pb-6 relative -mt-16">
                    <img 
                        src={profileImg} 
                        alt="Profile" 
                        className="rounded-full border-4 border-white w-32 h-32 object-cover shadow-lg"
                    />
                    <div className="text-center mt-4">
                        <h1 className="text-3xl font-bold text-gray-900">Indra Shrestha</h1>
                        <h2 className="text-lg text-blue-700 font-medium">Full Stack Developer | Cloud & DevOps Engineer</h2>
                        <p className="text-gray-600 mt-1">Coomera, Gold Coast, Australia </p>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="hidden sm:block px-4 md:px-6" data-testid="desktop-nav">
                <div className="flex overflow-x-auto scrollbar-hide -mb-px">
                    {Menus.map((menu, i) => (
                        <button
                            key={i}
                            onClick={() => handleMenu(menu.name, i)}
                            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-300
                                ${
                                    active === i
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                                }`}
                        >
                            {menu.value}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-b-xl shadow-md overflow-hidden border border-gray-200 mb-6">
                <DataContext.Provider value={selected}>
                    <Profile />
                </DataContext.Provider>
            </div>

            {/* Mobile bottom navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex justify-around py-2" data-testid="mobile-nav">
                {Menus.map((menu, i) => (
                    <button
                        key={i}
                        onClick={() => handleMenu(menu.name, i)}
                        className={`p-2 flex flex-col items-center text-xs ${
                            active === i ? 'text-orange-600' : 'text-gray-600'
                        }`}
                    >
                        <span className="text-lg">
                            {i === 0 && '👋'}
                            {i === 1 && '💻'}
                            {i === 2 && '💼'}
                            {i === 3 && '🎓'}
                            {i === 4 && '📞'}
                        </span>
                        <span>{menu.value}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProfileHeader;