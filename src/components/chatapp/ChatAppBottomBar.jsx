import React from 'react';
import { Search, MessageCircle, Bell, User } from 'lucide-react';

const BottomBar = ({ activeTab, onNavigate }) => {
  const tabs = [
    { id: 'people', icon: Search, label: 'Search'  },
    { id: 'friends', icon: MessageCircle, label: 'Friends' },
    { id: 'notifications', icon: Bell, label: 'Alerts' },
    { id: 'profile', icon: User, label: 'Profile' }
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-slate-100/50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-50 pb-safe">
      <div className="max-w-sm mx-auto px-6 py-3 flex justify-between items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className="flex flex-col items-center gap-1 p-2 active:scale-95 transition-transform"
            >
              <div className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-[#7FE2E3]/20 to-[#9DCBF7]/20' : 'bg-transparent'}`}>
                <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[#7B8AB0] fill-[#7B8AB0]/20' : 'text-slate-400'}`} />
                {isActive && (
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#7B8AB0]" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomBar;