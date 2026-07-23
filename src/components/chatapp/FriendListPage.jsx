// "use client"
// import React, { useState } from 'react';
// import { Menu, X, User, Search, MessageCircle, Home, Users, Settings, LogOut } from 'lucide-react';

// // Only users you're already connected with — this is the "message-ready" list.
// const initialFriends = [
//   { id: 1, name: "Aisha Rahman", lastMessage: "Sounds good, see you then!", time: "2m", unread: 2 },
//   { id: 2, name: "Daniel Fernandez", lastMessage: "Sent the files over.", time: "1h", unread: 0 },
//   { id: 3, name: "Meera Krishnan", lastMessage: "Haha true", time: "3h", unread: 0 },
//   { id: 4, name: "Arjun Nambiar", lastMessage: "Let's catch up this weekend", time: "1d", unread: 1 },
//   { id: 5, name: "Fatima Sheikh", lastMessage: "Thanks for the help!", time: "2d", unread: 0 },
// ];

// const FriendListPage = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [query, setQuery] = useState("");

//   const filteredFriends = initialFriends.filter((f) =>
//     f.name.toLowerCase().includes(query.toLowerCase())
//   );

//   const handleOpenChat = (id) => console.log("Open chat with friend", id);

//   return (
//     <div className="min-h-[100dvh] w-full bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7]">

//       {/* Top bar */}
//       <div className="flex items-center justify-between px-5 pt-6 pb-4">
//         <button
//           type="button"
//           onClick={() => setMenuOpen(true)}
//           className="p-2 -ml-2 rounded-full active:scale-95 transition-transform"
//           aria-label="Open menu"
//         >
//           <Menu className="w-6 h-6 text-[#475270]" />
//         </button>
//         <h1 className="text-lg font-bold text-[#475270]">Friends</h1>
//         <div className="w-6" />
//       </div>

//       {/* Search */}
//       <div className="px-4 pb-3">
//         <div className="relative">
//           <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//             <Search className="w-4 h-4 text-slate-400" />
//           </div>
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Search friends"
//             className="w-full pl-11 pr-4 py-3 bg-white/90 border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-white/60 transition-all text-slate-800 placeholder:text-slate-400 text-sm"
//           />
//         </div>
//       </div>

//       {/* Friend list card */}
//       <div className="px-4 pb-10">
//         <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] divide-y divide-slate-100 overflow-hidden">
//           {filteredFriends.length > 0 ? (
//             filteredFriends.map((f) => (
//               <FriendRow key={f.id} friend={f} onOpenChat={() => handleOpenChat(f.id)} />
//             ))
//           ) : (
//             <div className="px-4 py-10 text-center">
//               <p className="text-sm text-slate-400">No friends match "{query}"</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Sidebar overlay */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50">
//           <div
//             className="absolute inset-0 bg-black/30"
//             onClick={() => setMenuOpen(false)}
//           />
//           <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-200">

//             <div className="bg-gradient-to-br from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] px-5 pt-7 pb-6 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
//                   <User className="w-6 h-6 text-[#7B8AB0]" />
//                 </div>
//                 <div>
//                   <p className="font-semibold text-white text-[15px]">John Doe</p>
//                   <p className="text-white/80 text-xs">View profile</p>
//                 </div>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setMenuOpen(false)}
//                 className="p-1 rounded-full active:scale-95"
//                 aria-label="Close menu"
//               >
//                 <X className="w-5 h-5 text-white" />
//               </button>
//             </div>

//             <nav className="flex-1 px-3 pt-4 space-y-1">
//               <SideMenuItem icon={Home} label="Home" />
//               <SideMenuItem icon={Users} label="People" />
//               <SideMenuItem icon={MessageCircle} label="Friends" active />
//               <SideMenuItem icon={Settings} label="Settings" />
//             </nav>

//             <div className="px-3 pb-6">
//               <SideMenuItem icon={LogOut} label="Log out" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const SideMenuItem = ({ icon: Icon, label, active }) => (
//   <button
//     type="button"
//     className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-colors ${
//       active ? 'bg-[#EAF3FE] text-[#475270]' : 'text-slate-600 hover:bg-slate-50'
//     }`}
//   >
//     <Icon className="w-[18px] h-[18px]" />
//     {label}
//   </button>
// );

// const FriendRow = ({ friend, onOpenChat }) => {
//   const { name, lastMessage, time, unread } = friend;

//   return (
//     <button
//       type="button"
//       onClick={onOpenChat}
//       className="w-full flex items-center gap-3 px-4 py-3.5 text-left hover:bg-slate-50 active:bg-slate-100 transition-colors"
//     >
//       {/* Avatar */}
//       <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center flex-shrink-0">
//         <User className="w-5 h-5 text-white" />
//       </div>

//       {/* Name + last message */}
//       <div className="flex-1 min-w-0">
//         <p className="text-[15px] font-medium text-slate-800 truncate">{name}</p>
//         <p className={`text-xs truncate mt-0.5 ${unread > 0 ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
//           {lastMessage}
//         </p>
//       </div>

//       {/* Time + unread badge, or a message icon if nothing unread */}
//       <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
//         <span className="text-[11px] text-slate-400">{time}</span>
//         {unread > 0 ? (
//           <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white text-[10px] font-semibold flex items-center justify-center">
//             {unread}
//           </span>
//         ) : (
//           <MessageCircle className="w-4 h-4 text-slate-300" />
//         )}
//       </div>
//     </button>
//   );
// };

// export default FriendListPage;





"use client"
import React, { useState } from 'react';
import { Search, User, MessageCircle } from 'lucide-react';
import BottomBar from '@/components/chatapp/ChatAppBottomBar';

const initialFriends = [
  { id: 1, name: "Aisha Rahman", lastMessage: "Sounds good, see you then!", time: "2m", unread: 2 },
  { id: 2, name: "Daniel Fernandez", lastMessage: "Sent the files over.", time: "1h", unread: 0 },
  { id: 3, name: "Meera Krishnan", lastMessage: "Haha true", time: "3h", unread: 0 },
];

const FriendListPage = ({ navigateTo }) => {
  const [query, setQuery] = useState("");

  const filteredFriends = initialFriends.filter((f) =>
    f.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] pb-24">

      {/* Top bar */}
      <div className="flex items-center justify-center px-5 pt-8 pb-4">
        <h1 className="text-xl font-bold text-[#475270]">Messages</h1>
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search friends"
            className="w-full pl-11 pr-4 py-3.5 bg-white/90 backdrop-blur-sm border border-white/40 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60 transition-all text-slate-800 placeholder:text-slate-500 text-[15px]"
          />
        </div>
      </div>

      {/* Friend list card */}
      <div className="px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] divide-y divide-slate-100 overflow-hidden">
          {filteredFriends.map((f) => (
            <button key={f.id} className="w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-slate-50 active:bg-slate-100 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center flex-shrink-0 border-2 border-white shadow-sm">
                <User className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-slate-800 truncate">{f.name}</p>
                <p className={`text-[13px] truncate mt-0.5 ${f.unread > 0 ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>
                  {f.lastMessage}
                </p>
              </div>

              <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                <span className="text-[11px] font-medium text-slate-400">{f.time}</span>
                {f.unread > 0 ? (
                  <span className="min-w-[20px] h-[20px] px-1.5 rounded-full bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {f.unread}
                  </span>
                ) : (
                  <MessageCircle className="w-4 h-4 text-slate-300" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      <BottomBar activeTab="friends" onNavigate={navigateTo} />
    </div>
  );
};

export default FriendListPage;