// "use client"
// import React, { useState } from 'react';
// import { ArrowLeft, UserPlus, Check, MessageCircle, Heart, User } from 'lucide-react';

// // Notification types:
// // 'request'  -> someone sent a connect request      -> Accept / Reject inline
// // 'accepted' -> someone accepted your request        -> informational
// // 'message'  -> new message preview
// // 'like'     -> lightweight social signal (extend as needed)

// const initialNotifications = [
//   { id: 1, type: "request", name: "Rohan Mehta", detail: "wants to connect with you", time: "5m", read: false, group: "Today" },
//   { id: 2, type: "message", name: "Aisha Rahman", detail: "Sounds good, see you then!", time: "12m", read: false, group: "Today" },
//   { id: 3, type: "accepted", name: "Sara Thomas", detail: "accepted your connection request", time: "1h", read: false, group: "Today" },
//   { id: 4, type: "like", name: "Daniel Fernandez", detail: "liked your update", time: "3h", read: true, group: "Today" },
//   { id: 5, type: "request", name: "Priya Iyer", detail: "wants to connect with you", time: "Yesterday", read: true, group: "Earlier" },
//   { id: 6, type: "message", name: "Meera Krishnan", detail: "Haha true", time: "2d", read: true, group: "Earlier" },
// ];

// const iconFor = (type) => {
//   switch (type) {
//     case "request": return UserPlus;
//     case "accepted": return Check;
//     case "message": return MessageCircle;
//     case "like": return Heart;
//     default: return User;
//   }
// };

// const NotificationsPage = ({ onBack = () => {} }) => {
//   const [notifications, setNotifications] = useState(initialNotifications);

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   const markAllRead = () => {
//     setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
//   };

//   const markRead = (id) => {
//     setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
//   };

//   const handleAccept = (id) => {
//     setNotifications((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, type: "accepted", detail: "is now connected with you", read: true } : n))
//     );
//   };

//   const handleReject = (id) => {
//     setNotifications((prev) => prev.filter((n) => n.id !== id));
//   };

//   const groups = notifications.reduce((acc, n) => {
//     acc[n.group] = acc[n.group] || [];
//     acc[n.group].push(n);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-[100dvh] w-full flex flex-col bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7]">

//       {/* Header */}
//       <div className="flex items-center justify-between px-4 pt-6 pb-4">
//         <div className="flex items-center gap-2">
//           <button
//             type="button"
//             onClick={onBack}
//             className="p-2 -ml-2 rounded-full active:scale-95 transition-transform"
//             aria-label="Back"
//           >
//             <ArrowLeft className="w-6 h-6 text-[#475270]" />
//           </button>
//           <h1 className="text-lg font-bold text-[#475270]">Notifications</h1>
//         </div>

//         {unreadCount > 0 && (
//           <button
//             type="button"
//             onClick={markAllRead}
//             className="text-xs font-medium text-[#475270]/80 hover:text-[#475270] active:scale-95 transition-transform"
//           >
//             Mark all read
//           </button>
//         )}
//       </div>

//       {/* Notification list */}
//       <div className="flex-1 px-4 pb-10">
//         <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
//           {Object.keys(groups).length > 0 ? (
//             Object.entries(groups).map(([group, items], gi) => (
//               <div key={group} className={gi > 0 ? "border-t border-slate-100" : ""}>
//                 <p className="px-4 pt-4 pb-1 text-xs font-semibold text-slate-400 uppercase tracking-wide">
//                   {group}
//                 </p>
//                 <div className="divide-y divide-slate-100">
//                   {items.map((n) => (
//                     <NotificationRow
//                       key={n.id}
//                       notification={n}
//                       onMarkRead={() => markRead(n.id)}
//                       onAccept={() => handleAccept(n.id)}
//                       onReject={() => handleReject(n.id)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="px-4 py-12 text-center">
//               <p className="text-sm text-slate-400">You're all caught up</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const NotificationRow = ({ notification, onMarkRead, onAccept, onReject }) => {
//   const { type, name, detail, time, read } = notification;
//   const Icon = iconFor(type);

//   return (
//     <button
//       type="button"
//       onClick={onMarkRead}
//       className="w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-slate-50 active:bg-slate-100 transition-colors relative"
//     >
//       {/* Unread dot */}
//       {!read && (
//         <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7FE2E3] to-[#C69CF7]" />
//       )}

//       {/* Avatar with type badge */}
//       <div className="relative flex-shrink-0">
//         <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center">
//           <User className="w-5 h-5 text-white" />
//         </div>
//         <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center">
//           <Icon className="w-2.5 h-2.5 text-[#7B8AB0]" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1 min-w-0">
//         <p className={`text-sm leading-snug ${read ? 'text-slate-500' : 'text-slate-800 font-medium'}`}>
//           <span className="font-semibold text-slate-800">{name}</span> {detail}
//         </p>
//         <span className="text-[11px] text-slate-400 mt-1 block">{time}</span>

//         {/* Inline actions for pending connect requests */}
//         {type === "request" && (
//           <div className="flex items-center gap-2 mt-2">
//             <button
//               type="button"
//               onClick={(e) => { e.stopPropagation(); onAccept(); }}
//               className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white active:scale-95 transition-transform"
//             >
//               Accept
//             </button>
//             <button
//               type="button"
//               onClick={(e) => { e.stopPropagation(); onReject(); }}
//               className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-rose-500 hover:bg-rose-50 active:scale-95 transition-transform"
//             >
//               Reject
//             </button>
//           </div>
//         )}
//       </div>
//     </button>
//   );
// };

// export default NotificationsPage;







// "use client"
// import React, { useState } from 'react';
// import { ArrowLeft, UserPlus, Check, MessageCircle, Heart, User } from 'lucide-react';

// // Notification types:
// // 'request'  -> someone sent a connect request      -> Accept / Reject inline
// // 'accepted' -> someone accepted your request        -> informational
// // 'message'  -> new message preview
// // 'like'     -> lightweight social signal (extend as needed)

// const initialNotifications = [
//   { id: 1, type: "request", name: "Rohan Mehta", detail: "wants to connect with you", time: "5m", read: false, group: "Today" },
//   { id: 2, type: "message", name: "Aisha Rahman", detail: "Sounds good, see you then!", time: "12m", read: false, group: "Today" },
//   { id: 3, type: "accepted", name: "Sara Thomas", detail: "accepted your connection request", time: "1h", read: false, group: "Today" },
//   { id: 4, type: "like", name: "Daniel Fernandez", detail: "liked your update", time: "3h", read: true, group: "Today" },
//   { id: 5, type: "request", name: "Priya Iyer", detail: "wants to connect with you", time: "Yesterday", read: true, group: "Earlier" },
//   { id: 6, type: "message", name: "Meera Krishnan", detail: "Haha true", time: "2d", read: true, group: "Earlier" },
// ];

// const iconFor = (type) => {
//   switch (type) {
//     case "request": return UserPlus;
//     case "accepted": return Check;
//     case "message": return MessageCircle;
//     case "like": return Heart;
//     default: return User;
//   }
// };

// const NotificationsPage = ({ onBack = () => {} }) => {
//   const [notifications, setNotifications] = useState(initialNotifications);

//   const unreadCount = notifications.filter((n) => !n.read).length;

//   const markAllRead = () => {
//     setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
//   };

//   const markRead = (id) => {
//     setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
//   };

//   const handleAccept = (id) => {
//     setNotifications((prev) =>
//       prev.map((n) => (n.id === id ? { ...n, type: "accepted", detail: "is now connected with you", read: true } : n))
//     );
//   };

//   const handleReject = (id) => {
//     setNotifications((prev) => prev.filter((n) => n.id !== id));
//   };

//   const groups = notifications.reduce((acc, n) => {
//     acc[n.group] = acc[n.group] || [];
//     acc[n.group].push(n);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-[100dvh] w-full flex flex-col bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7]">

//       {/* Header */}
//       <div className="flex items-center justify-between px-4 pt-6 pb-4">
//         <div className="flex items-center gap-2">
//           <button
//             type="button"
//             onClick={onBack}
//             className="p-2 -ml-2 rounded-full active:scale-95 transition-transform"
//             aria-label="Back"
//           >
//             <ArrowLeft className="w-6 h-6 text-[#475270]" />
//           </button>
//           <h1 className="text-lg font-bold text-[#475270]">Notifications</h1>
//         </div>

//         {unreadCount > 0 && (
//           <button
//             type="button"
//             onClick={markAllRead}
//             className="text-xs font-medium text-[#475270]/80 hover:text-[#475270] active:scale-95 transition-transform"
//           >
//             Mark all read
//           </button>
//         )}
//       </div>

//       {/* Notification list */}
//       <div className="flex-1 px-4 pb-10">
//         <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
//           {Object.keys(groups).length > 0 ? (
//             Object.entries(groups).map(([group, items], gi) => (
//               <div key={group} className={gi > 0 ? "border-t border-slate-100" : ""}>
//                 <p className="px-4 pt-4 pb-1 text-xs font-semibold text-slate-400 uppercase tracking-wide">
//                   {group}
//                 </p>
//                 <div className="divide-y divide-slate-100">
//                   {items.map((n) => (
//                     <NotificationRow
//                       key={n.id}
//                       notification={n}
//                       onMarkRead={() => markRead(n.id)}
//                       onAccept={() => handleAccept(n.id)}
//                       onReject={() => handleReject(n.id)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="px-4 py-12 text-center">
//               <p className="text-sm text-slate-400">You're all caught up</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const NotificationRow = ({ notification, onMarkRead, onAccept, onReject }) => {
//   const { type, name, detail, time, read } = notification;
//   const Icon = iconFor(type);

//   return (
//     <div
//       role="button"
//       tabIndex={0}
//       onClick={onMarkRead}
//       onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onMarkRead(); }}
//       className="w-full flex items-start gap-3 px-4 py-3.5 text-left hover:bg-slate-50 active:bg-slate-100 transition-colors relative cursor-pointer"
//     >
//       {/* Unread dot */}
//       {!read && (
//         <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#7FE2E3] to-[#C69CF7]" />
//       )}

//       {/* Avatar with type badge */}
//       <div className="relative flex-shrink-0">
//         <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center">
//           <User className="w-5 h-5 text-white" />
//         </div>
//         <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center">
//           <Icon className="w-2.5 h-2.5 text-[#7B8AB0]" />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex-1 min-w-0">
//         <p className={`text-sm leading-snug ${read ? 'text-slate-500' : 'text-slate-800 font-medium'}`}>
//           <span className="font-semibold text-slate-800">{name}</span> {detail}
//         </p>
//         <span className="text-[11px] text-slate-400 mt-1 block">{time}</span>

//         {/* Inline actions for pending connect requests */}
//         {type === "request" && (
//           <div className="flex items-center gap-2 mt-2">
//             <button
//               type="button"
//               onClick={(e) => { e.stopPropagation(); onAccept(); }}
//               className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white active:scale-95 transition-transform"
//             >
//               Accept
//             </button>
//             <button
//               type="button"
//               onClick={(e) => { e.stopPropagation(); onReject(); }}
//               className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white border border-slate-200 text-rose-500 hover:bg-rose-50 active:scale-95 transition-transform"
//             >
//               Reject
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage; 





"use client"
import React, { useState } from 'react';
import { UserPlus, Check, MessageCircle, Heart, User } from 'lucide-react';
import BottomBar from '@/components/chatapp/ChatAppBottomBar';

const initialNotifications = [
  { id: 1, type: "request", name: "Rohan Mehta", detail: "wants to connect with you", time: "5m", read: false },
  { id: 2, type: "accepted", name: "Sara Thomas", detail: "accepted your request", time: "1h", read: false },
  { id: 3, type: "like", name: "Daniel Fernandez", detail: "liked your update", time: "3h", read: true },
];

const NotificationsPage = ({ navigateTo }) => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] pb-24">

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-8 pb-6">
        <h1 className="text-xl font-bold text-[#475270]">Notifications</h1>
        {unreadCount > 0 && (
          <button onClick={markAllRead} className="text-xs font-semibold text-[#475270]/80 active:scale-95 transition-transform bg-white/40 px-3 py-1.5 rounded-full">
            Mark all read
          </button>
        )}
      </div>

      {/* Notification list */}
      <div className="px-4">
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden divide-y divide-slate-100">
          {notifications.map((n) => (
            <div key={n.id} className="w-full flex items-start gap-4 px-4 py-4 relative">

              {!n.read && (
                <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7FE2E3]" />
              )}

              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center border-2 border-white shadow-sm">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center">
                  {n.type === 'request' && <UserPlus className="w-3 h-3 text-[#7B8AB0]" />}
                  {n.type === 'accepted' && <Check className="w-3 h-3 text-emerald-500" />}
                  {n.type === 'like' && <Heart className="w-3 h-3 text-rose-400" />}
                </div>
              </div>

              <div className="flex-1 min-w-0 pt-0.5">
                <p className={`text-[14px] leading-snug ${n.read ? 'text-slate-600' : 'text-slate-800'}`}>
                  <span className="font-bold">{n.name}</span> {n.detail}
                </p>
                <span className="text-[11px] font-medium text-slate-400 mt-1 block">{n.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomBar activeTab="notifications" onNavigate={navigateTo} />
    </div>
  );
};

export default NotificationsPage;