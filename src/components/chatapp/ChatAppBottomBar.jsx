// import React from 'react';
// import { Search, MessageCircle, Bell, User } from 'lucide-react';

// const BottomBar = ({ activeTab, onNavigate }) => {
//   const tabs = [
//     { id: 'people', icon: Search, label: 'Search'  },
//     { id: 'friends', icon: MessageCircle, label: 'Friends' },
//     { id: 'notifications', icon: Bell, label: 'Alerts' },
//     { id: 'profile', icon: User, label: 'Profile' }
//   ];

//   return (
//     <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-100/50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50 pb-safe">
//       <div className="max-w-sm mx-auto px-6 py-3 flex justify-between items-center">
//         {tabs.map((tab) => {
//           const Icon = tab.icon;
//           const isActive = activeTab === tab.id;
//           return (
//             <button
//               key={tab.id}
//               onClick={() => onNavigate(tab.id)}
//               className="flex flex-col items-center gap-1 p-2 active:scale-95 transition-transform"
//             >
//               <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-[#7FE2E3]/20 to-[#9DCBF7]/20' : 'bg-transparent'}`}>
//                 <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#7B8AB0] fill-[#7B8AB0]/20' : 'text-slate-400'}`} />
//                 {isActive && (
//                   <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#7B8AB0]" />
//                 )}
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BottomBar;



"use client"
import React from 'react';
import { Search, MessageCircle, Bell, User } from 'lucide-react';

const BottomBar = ({ activeTab, onNavigate }) => {
  const tabs = [
    { id: 'people', icon: Search, label: 'Search' },
    { id: 'friends', icon: MessageCircle, label: 'Friends' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    // Floating dock layout: positioned above the bottom edge with rounded-full styling
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[340px] bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.12)] rounded-full z-50">
      
      <div className="flex justify-between items-center px-4 py-2.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className="relative flex flex-col items-center justify-center w-12 h-12 rounded-full active:scale-95 transition-all duration-300"
              aria-label={tab.label}
            >
              {/* Active state background pill */}
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isActive ? 'bg-gradient-to-br from-[#7FE2E3]/25 to-[#9DCBF7]/25 scale-100' : 'scale-0 opacity-0'
                }`} 
              />

              {/* Icon styling: Darker and slightly larger when active */}
              <Icon 
                className={`relative z-10 transition-all duration-300 ${
                  isActive 
                    ? 'w-[22px] h-[22px] text-[#475270] fill-[#475270]/20' 
                    : 'w-5 h-5 text-slate-400 hover:text-slate-500'
                }`} 
              />

              {/* Small dot indicator for active tab */}
              <div 
                className={`absolute bottom-1.5 w-1 h-1 rounded-full bg-[#475270] transition-all duration-300 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`} 
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;
