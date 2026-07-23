

// // import React from "react";
// import logo from "@/assets/logo.png";
// // import logo from "@/logo.png";

// export default function AuthScreen() {
//   return (
//     <div className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7]">
//       <div className="w-full max-w-sm flex flex-col items-center justify-center px-6 text-center">
//         {/* Logo */}
//         <img
//           src={logo.src}
//           alt="Logo"
//           className="w-56 h-56 object-contain drop-shadow-2xl scale-150 mb-4"
//         />

//         {/* Main Text */}
//         <h1 className="mt-8 text-[28px] font-bold font-sans text-center text-[#475270] leading-tight">
//           Welcome to Swila
//           <br />
//           Connect with ease
//         </h1>

//         {/* Google Sign-In Button */}
//         <button
//           type="button"
//           className="mt-12 mb-10 w-full max-w-[320px] bg-white rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.16)] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 py-4 px-6"
//         >
//           <svg
//             className="w-5 h-5 flex-shrink-0"
//             viewBox="0 0 48 48"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill="#FFC107"
//               d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
//               c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
//               c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//             />
//             <path
//               fill="#FF3D00"
//               d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039
//               l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//             />
//             <path
//               fill="#4CAF50"
//               d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
//               c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//             />
//             <path
//               fill="#1976D2"
//               d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
//               c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24
//               C44,22.659,43.862,21.35,43.611,20.083z"
//             />
//           </svg>
//           <span className="text-[17px] font-medium text-slate-800">
//             Continue with Google
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }






"use client"
import React, { useState } from 'react';

// Importing all components
import AuthScreen from '@/components/chatapp/AuthScreen';
import UserListPage from '@/components/chatapp/UserListPage';
import FriendListPage from '@/components/chatapp/FriendListPage';
import NotificationsPage from '@/components/chatapp/NotificationPage';
import ProfilePage from '@/components/chatapp/ProfilePage';
import MessageInterface from '@/components/chatapp/MessageInterfacePage';

import ChatAppBottomBar from '@/components/chatapp/ChatAppBottomBar';

export default function ChatAppLayout() {
// The login screen ('auth') should be displayed first when opening the app.
  const [currentScreen, setCurrentScreen] = useState('auth');
  
  const [activeChatUser, setActiveChatUser] = useState(null); 

  const navigateTo = (screenName) => {
    setCurrentScreen(screenName);
  };

// After logging in, it goes directly to the Profile (Onboarding) page.
  const handleGoogleLogin = () => {
    console.log("User Authenticated via Google");
    navigateTo('profile'); 
  };

  const openChat = (friend) => {
    setActiveChatUser(friend);
    setCurrentScreen('message');
  };

  const handleLogout = () => {
    console.log("Logging out...");
// Returns to the initial login screen upon logging out.
    navigateTo('auth'); 
  };

  return (
    <div className="relative w-full min-h-[100dvh] overflow-hidden bg-slate-50">
      
      {/* 1. Login Screen */}
      {currentScreen === 'auth' && <AuthScreen onLogin={handleGoogleLogin} />}

      {/* 2. Screen for finding new people */}
      {currentScreen === 'people' && <UserListPage navigateTo={navigateTo} />}
      
      {/* 3. friend list*/}
      {currentScreen === 'friends' && (
        <FriendListPage navigateTo={navigateTo} onOpenChat={openChat} />
      )}
      
      {/* 4. notification list */}
      {currentScreen === 'notifications' && <NotificationsPage navigateTo={navigateTo} />}
      
      {/* 5. profile / onBoarding screen */}
      {currentScreen === 'profile' && (
        <ProfilePage 
          isProfileMode={true} 
          onSave={(data) => {
            console.log("Profile Saved:", data);
// Once new users set up their profiles, they will go straight to the Friends list.
            navigateTo('friends');
          }} 
          onLogout={handleLogout} 
        />
      )}

      {/* 6. Message Screen */}
      {currentScreen === 'message' && (
        <MessageInterface 
          friendName={activeChatUser?.name || "Friend"} 
          onBack={() => navigateTo('friends')} 
        />
      )}

      {/* 
        When should the bottom bar be displayed?
        The bottom bar will not be shown on the login screen ('auth') or the message screen ('message').
        It will appear at the bottom on all other screens.
      */}
      {currentScreen !== 'message' && currentScreen !== 'auth' && (
        <ChatAppBottomBar activeTab={currentScreen} onNavigate={navigateTo} />
      )}

    </div>
  );
}