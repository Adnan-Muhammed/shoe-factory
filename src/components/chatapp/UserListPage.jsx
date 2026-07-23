// "use client"
// import React, { useState } from 'react';
// import {
//   Menu, X, User, MessageCircle, UserPlus, Clock,
//   Check, Home, Users, Settings, LogOut
// } from 'lucide-react';

// // Connection status per user:
// // 'connected'        -> they're already connected            -> "Message"
// // 'none'             -> no request either way                -> "Connect"
// // 'pending_sent'     -> I sent a request, waiting on them     -> disabled "Pending" + "Reject" (withdraw)
// // 'pending_received' -> they sent me a request                -> "Accept" + "Reject"

// const initialUsers = [
//   { id: 1, name: "Aisha Rahman", status: "connected" },
//   { id: 2, name: "Vikram Nair", status: "none" },
//   { id: 3, name: "Sara Thomas", status: "pending_sent" },
//   { id: 4, name: "Rohan Mehta", status: "pending_received" },
//   { id: 5, name: "Priya Iyer", status: "none" },
//   { id: 6, name: "Daniel Fernandez", status: "connected" },
// ];

// const UserListPage = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [users, setUsers] = useState(initialUsers);

//   const updateStatus = (id, status) => {
//     setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status } : u)));
//   };

//   const handleConnect = (id) => updateStatus(id, "pending_sent");
//   const handleWithdraw = (id) => updateStatus(id, "none");
//   const handleAccept = (id) => updateStatus(id, "connected");
//   const handleReject = (id) => updateStatus(id, "none");
//   const handleMessage = (id) => console.log("Open chat with user", id);

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
//         <h1 className="text-lg font-bold text-[#475270]">People</h1>
//         <div className="w-6" /> {/* spacer to keep title centered */}
//       </div>

//       {/* User list card */}
//       <div className="px-4 pb-10">
//         <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] divide-y divide-slate-100 overflow-hidden">
//           {users.map((u) => (
//             <UserRow
//               key={u.id}
//               user={u}
//               onConnect={() => handleConnect(u.id)}
//               onWithdraw={() => handleWithdraw(u.id)}
//               onAccept={() => handleAccept(u.id)}
//               onReject={() => handleReject(u.id)}
//               onMessage={() => handleMessage(u.id)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Sidebar overlay */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-50">
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/30"
//             onClick={() => setMenuOpen(false)}
//           />

//           {/* Panel */}
//           <div className="absolute left-0 top-0 h-full w-72 bg-white shadow-2xl flex flex-col animate-in slide-in-from-left duration-200">

//             {/* Profile header */}
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

//             {/* Nav items */}
//             <nav className="flex-1 px-3 pt-4 space-y-1">
//               <SideMenuItem icon={Home} label="Home" active />
//               <SideMenuItem icon={Users} label="People" />
//               <SideMenuItem icon={MessageCircle} label="Messages" />
//               <SideMenuItem icon={Settings} label="Settings" />
//             </nav>

//             {/* Logout */}
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

// const UserRow = ({ user, onConnect, onWithdraw, onAccept, onReject, onMessage }) => {
//   const { name, status } = user;

//   return (
//     <div className="flex items-center gap-3 px-4 py-3.5">
//       {/* Avatar */}
//       <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center flex-shrink-0">
//         <User className="w-5 h-5 text-white" />
//       </div>

//       {/* Name */}
//       <p className="flex-1 text-[15px] font-medium text-slate-800 truncate">{name}</p>

//       {/* Action buttons per status */}
//       <div className="flex items-center gap-2 flex-shrink-0">
//         {status === "connected" && (
//           <button
//             type="button"
//             onClick={onMessage}
//             className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white active:scale-95 transition-transform"
//           >
//             <MessageCircle className="w-3.5 h-3.5" />
//             Message
//           </button>
//         )}

//         {status === "none" && (
//           <button
//             type="button"
//             onClick={onConnect}
//             className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:scale-95 transition-transform"
//           >
//             <UserPlus className="w-3.5 h-3.5" />
//             Connect
//           </button>
//         )}

//         {status === "pending_sent" && (
//           <>
//             <span className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium bg-slate-100 text-slate-400 cursor-not-allowed">
//               <Clock className="w-3.5 h-3.5" />
//               Pending
//             </span>
//             <button
//               type="button"
//               onClick={onWithdraw}
//               className="px-3 py-2 rounded-full text-xs font-medium bg-white border border-slate-200 text-rose-500 hover:bg-rose-50 active:scale-95 transition-transform"
//             >
//               Reject
//             </button>
//           </>
//         )}

//         {status === "pending_received" && (
//           <>
//             <button
//               type="button"
//               onClick={onAccept}
//               className="flex items-center gap-1 px-3 py-2 rounded-full text-xs font-medium bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white active:scale-95 transition-transform"
//             >
//               <Check className="w-3.5 h-3.5" />
//               Accept
//             </button>
//             <button
//               type="button"
//               onClick={onReject}
//               className="px-3 py-2 rounded-full text-xs font-medium bg-white border border-slate-200 text-rose-500 hover:bg-rose-50 active:scale-95 transition-transform"
//             >
//               Reject
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserListPage;



"use client"
import React, { useState } from 'react';
import { User, MessageCircle, UserPlus, Clock, Check } from 'lucide-react';
import BottomBar from '@/components/chatapp/ChatAppBottomBar';

const initialUsers = [
  { id: 1, name: "Aisha Rahman", status: "connected" },
  { id: 2, name: "Vikram Nair", status: "none" },
  { id: 3, name: "Sara Thomas", status: "pending_sent" },
  { id: 4, name: "Rohan Mehta", status: "pending_received" },
];

const UserListPage = ({ navigateTo }) => {
  const [users, setUsers] = useState(initialUsers);

  const updateStatus = (id, status) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status } : u)));
  };

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] pb-24">

      {/* Top bar (No Menu Button) */}
      <div className="flex items-center justify-center px-5 pt-8 pb-6">
        <h1 className="text-xl font-bold text-[#475270]">Discover People</h1>
      </div>

      {/* User list card */}
      <div className="px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] divide-y divide-slate-100 overflow-hidden">
          {users.map((u) => (
            <UserRow
              key={u.id}
              user={u}
              onConnect={() => updateStatus(u.id, "pending_sent")}
              onWithdraw={() => updateStatus(u.id, "none")}
              onAccept={() => updateStatus(u.id, "connected")}
              onReject={() => updateStatus(u.id, "none")}
            />
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomBar activeTab="people" onNavigate={navigateTo} />
    </div>
  );
};

const UserRow = ({ user, onConnect, onWithdraw, onAccept, onReject }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center flex-shrink-0 border-2 border-white shadow-sm">
        <User className="w-5 h-5 text-white" />
      </div>
      <p className="flex-1 text-[15px] font-medium text-slate-800 truncate">{user.name}</p>

      <div className="flex items-center gap-2 flex-shrink-0">
        {user.status === "connected" && (
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white active:scale-95 transition-transform">
            <MessageCircle className="w-3.5 h-3.5" /> Message
          </button>
        )}
        {user.status === "none" && (
          <button onClick={onConnect} className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 active:scale-95 transition-transform">
            <UserPlus className="w-3.5 h-3.5" /> Connect
          </button>
        )}
        {user.status === "pending_sent" && (
          <button onClick={onWithdraw} className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-rose-100 text-rose-500 hover:bg-rose-50 active:scale-95 transition-transform">
            Cancel
          </button>
        )}
        {user.status === "pending_received" && (
          <button onClick={onAccept} className="px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white active:scale-95 transition-transform">
            Accept
          </button>
        )}
      </div>
    </div>
  );
};

export default UserListPage;