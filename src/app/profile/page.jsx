

// "use client"
// import React, { useState } from 'react';
// import { Camera, User, Phone, Check } from 'lucide-react';

// const OnboardingPage = () => {

//   // Pre-filled from Google — name & photo already come from the OAuth profile
//   const [name] = useState("John Doe");
//   const [photoUrl] = useState(""); // populate with Google photo URL when wiring up auth
//   const [gender, setGender] = useState("");
//   const [phone, setPhone] = useState("");

//   const isFormValid = gender !== "" && phone.length > 8;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isFormValid) {
//       console.log("Saving User Data: ", { name, gender, phone });
//       // go to the next dashboard
//     }
//   };

//   return (
//     <div className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] px-6 py-10">
//       <div className="w-full max-w-sm">

//         {/* Card floats on the gradient, echoing the auth screen's language */}
//         <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-6 pt-8 pb-7">

//           <h2 className="text-[24px] font-bold text-[#475270] text-center leading-tight">
//             Complete Your Profile
//           </h2>
//           <p className="text-slate-500 text-sm text-center mt-1 mb-7">
//             Just a couple of details left.
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">

//             {/* Profile Picture — pulled from Google, so it's a preview, not an empty state */}
//             <div className="flex justify-center">
//               <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
//                 {photoUrl ? (
//                   <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
//                 ) : (
//                   <User className="w-10 h-10 text-white" />
//                 )}
//                 <button
//                   type="button"
//                   className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 active:scale-95"
//                   aria-label="Change photo"
//                 >
//                   <Camera className="w-4 h-4 text-slate-600" />
//                 </button>
//               </div>
//             </div>

//             {/* Name — from Google, shown as confirmed rather than editable-looking */}
//             <div className="flex items-center justify-center gap-1.5 -mt-1">
//               <span className="text-[17px] font-semibold text-slate-800">{name}</span>
//               <Check className="w-4 h-4 text-emerald-500" />
//             </div>

//             {/* Gender Selection (Mandatory Buttons) */}
//             <div className="space-y-2">
//               <label className="text-sm font-medium text-slate-700 ml-1">Gender *</label>
//               <div className="grid grid-cols-3 gap-3">
//                 {['Male', 'Female', 'Other'].map((g) => (
//                   <button
//                     key={g}
//                     type="button"
//                     onClick={() => setGender(g)}
//                     className={`py-3 px-2 rounded-2xl text-sm font-medium transition-all ${
//                       gender === g
//                         ? 'bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] text-white border-2 border-transparent shadow-sm'
//                         : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
//                     }`}
//                   >
//                     {g}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Phone Number (Mandatory) */}
//             <div className="space-y-1.5">
//               <label className="text-sm font-medium text-slate-700 ml-1">Phone Number *</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <Phone className="w-4 h-4 text-slate-400" />
//                 </div>
//                 <input
//                   type="tel"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] transition-all text-slate-800"
//                   placeholder="+91 00000 00000"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-2">
//               <button
//                 type="submit"
//                 disabled={!isFormValid}
//                 className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
//                   isFormValid
//                     ? 'bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white shadow-md shadow-[#9DCBF7]/30 hover:brightness-105 active:scale-[0.98]'
//                     : 'bg-slate-200 text-slate-400 cursor-not-allowed'
//                 }`}
//               >
//                 Save & Enter App
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OnboardingPage;



// "use client"
// import React, { useState } from 'react';
// import { Camera, User, Phone, LogOut, Lock, ChevronDown } from 'lucide-react';

// const ProfilePage = ({ isProfileMode = true, onSave, onLogout }) => {
//   // ഗൂഗിളിൽ നിന്നും ലഭിക്കുന്ന ഡാറ്റ (അല്ലെങ്കിൽ ഡാറ്റാബേസിൽ നിന്നുള്ള പഴയ ഡാറ്റ)
//   const [name, setName] = useState("John Doe");
//   const [photoUrl] = useState(""); 
//   const [gender, setGender] = useState(isProfileMode ? "Male" : ""); 
//   const [countryCode, setCountryCode] = useState("+91");
//   const [phone, setPhone] = useState(isProfileMode ? "9876543210" : "");

//   const isFormValid = name.trim() !== "" && gender !== "" && phone.length > 5;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isFormValid && onSave) {
//       onSave({ name, photoUrl, gender, fullPhone: `${countryCode}${phone}` });
//     }
//   };

//   return (
//     <div className={`min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] px-6 ${isProfileMode ? 'py-10 pb-24' : 'py-10'}`}>
//       <div className="w-full max-w-sm">

//         {/* ഗ്ലാസ് കാർഡ് ഡിസൈൻ */}
//         <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-6 pt-8 pb-7">
          
//           <h2 className="text-[24px] font-bold text-[#475270] text-center leading-tight">
//             {isProfileMode ? "Your Profile" : "Complete Your Profile"}
//           </h2>
//           <p className="text-slate-500 text-sm text-center mt-1 mb-7">
//             {isProfileMode ? "Update your personal details below." : "Just a couple of details left."}
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
            
//             {/* പ്രൊഫൈൽ പിക്ചർ (എഡിറ്റ് ചെയ്യാം) */}
//             <div className="flex justify-center">
//               <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
//                 {photoUrl ? (
//                   <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
//                 ) : (
//                   <User className="w-10 h-10 text-white" />
//                 )}
//                 <button 
//                   type="button" 
//                   className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 active:scale-95 transition-transform"
//                   aria-label="Change photo"
//                 >
//                   <Camera className="w-4 h-4 text-slate-600" />
//                 </button>
//               </div>
//             </div>

//             {/* പേര് (എഡിറ്റ് ചെയ്യാം) */}
//             <div className="space-y-1.5">
//               <label className="text-sm font-medium text-slate-700 ml-1">Full Name *</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <User className="w-4 h-4 text-slate-400" />
//                 </div>
//                 <input 
//                   type="text" 
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] transition-all text-slate-800"
//                   placeholder="Your Name"
//                 />
//               </div>
//             </div>

//             {/* ജെൻഡർ (Profile Mode-ൽ ലോക്ക് ചെയ്യപ്പെടും) */}
//             <div className="space-y-2">
//               <div className="flex items-center justify-between ml-1 mr-1">
//                 <label className="text-sm font-medium text-slate-700">Gender *</label>
//                 {isProfileMode && (
//                   <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium bg-slate-100 px-2 py-0.5 rounded-md">
//                     <Lock className="w-3 h-3" /> Cannot change
//                   </span>
//                 )}
//               </div>
              
//               <div className="grid grid-cols-3 gap-3">
//                 {['Male', 'Female', 'Other'].map((g) => {
//                   const isSelected = gender === g;
//                   return (
//                     <button
//                       key={g}
//                       type="button"
//                       disabled={isProfileMode} // Profile Mode ആണെങ്കിൽ ക്ലിക്ക് ചെയ്യാൻ പറ്റില്ല
//                       onClick={() => !isProfileMode && setGender(g)}
//                       className={`py-3 px-2 rounded-2xl text-sm font-medium transition-all ${
//                         isSelected 
//                           ? 'bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] text-white shadow-sm border-2 border-transparent' 
//                           : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
//                       } ${isProfileMode && !isSelected ? 'opacity-50 cursor-not-allowed' : ''} 
//                         ${isProfileMode && isSelected ? 'cursor-default' : ''}`}
//                     >
//                       {g}
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* ഫോൺ നമ്പർ വിത്ത് കൺട്രി കോഡ് (എഡിറ്റ് ചെയ്യാം) */}
//             <div className="space-y-1.5">
//               <label className="text-sm font-medium text-slate-700 ml-1">Phone Number *</label>
//               <div className="flex gap-2">
                
//                 {/* കൺട്രി കോഡ് സെലക്ട് */}
//                 <div className="relative w-[90px] flex-shrink-0">
//                   <select 
//                     value={countryCode}
//                     onChange={(e) => setCountryCode(e.target.value)}
//                     className="w-full h-full appearance-none bg-white border border-slate-200 rounded-2xl pl-3 pr-7 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] text-slate-800 text-sm font-medium transition-all cursor-pointer"
//                   >
//                     <option value="+91">+91</option>
//                     <option value="+971">+971</option>
//                     <option value="+1">+1</option>
//                     <option value="+44">+44</option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none">
//                     <ChevronDown className="w-4 h-4 text-slate-400" />
//                   </div>
//                 </div>

//                 {/* ഫോൺ ഇൻപുട്ട് */}
//                 <div className="relative flex-1">
//                   <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
//                     <Phone className="w-4 h-4 text-slate-400" />
//                   </div>
//                   <input 
//                     type="tel" 
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] transition-all text-slate-800"
//                     placeholder="00000 00000"
//                   />
//                 </div>

//               </div>
//             </div>

//             {/* സേവ് & ലോഗ്ഔട്ട് ബട്ടണുകൾ */}
//             <div className="pt-2 space-y-3">
              
//               <button 
//                 type="submit"
//                 disabled={!isFormValid}
//                 className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
//                   isFormValid 
//                     ? 'bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white shadow-md shadow-[#9DCBF7]/30 hover:brightness-105 active:scale-[0.98]' 
//                     : 'bg-slate-200 text-slate-400 cursor-not-allowed'
//                 }`}
//               >
//                 {isProfileMode ? "Save Changes" : "Save & Enter App"}
//               </button>

//               {isProfileMode && (
//                 <button 
//                   type="button"
//                   onClick={onLogout}
//                   className="w-full py-3.5 rounded-full font-medium flex items-center justify-center gap-2 bg-white border border-rose-200 text-rose-500 hover:bg-rose-50 active:scale-[0.98] transition-all duration-300"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   Log Out
//                 </button>
//               )}

//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


// //  true false  dynamic change  for testing purpose
// "use client"
// import React, { useState } from 'react';
// import { Camera, User, Phone, LogOut, Lock, ChevronDown } from 'lucide-react';

// const ProfilePage = ({ isProfileMode = false, onSave, onLogout }) => {
//   // ടെസ്റ്റിംഗിന് വേണ്ടി prop-നെ ഒരു local state ആക്കി മാറ്റി
//   const [mode, setMode] = useState(isProfileMode);

//   // ഗൂഗിളിൽ നിന്നും ലഭിക്കുന്ന ഡാറ്റ (അല്ലെങ്കിൽ ഡാറ്റാബേസിൽ നിന്നുള്ള പഴയ ഡാറ്റ)
//   const [name, setName] = useState("John Doe");
//   const [photoUrl] = useState(""); 
//   const [gender, setGender] = useState(mode ? "Male" : ""); 
//   const [countryCode, setCountryCode] = useState("+91");
//   const [phone, setPhone] = useState(mode ? "9876543210" : "");

//   const isFormValid = name.trim() !== "" && gender !== "" && phone.length > 5;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isFormValid) {
//       // Testing: Save ക്ലിക്ക് ചെയ്യുമ്പോൾ Onboarding ആണെങ്കിൽ Profile Mode ലേക്ക് മാറ്റുക
//       if (!mode) {
//         setMode(true);
//       }
      
//       if (onSave) {
//         onSave({ name, photoUrl, gender, fullPhone: `${countryCode}${phone}` });
//       }
//     }
//   };

//   const handleLogout = () => {
//     // Testing: Log out ക്ലിക്ക് ചെയ്യുമ്പോൾ തിരികെ Onboarding Mode ലേക്ക് മാറ്റുക
//     setMode(false);
    
//     if (onLogout) {
//       onLogout();
//     }
//   };

//   return (
//     <div className={`h-[100dvh] w-full flex items-center justify-center bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] px-6 overflow-hidden ${mode ? 'pb-20' : 'py-10'}`}>
//       <div className="w-full max-w-sm">

//         {/* ഗ്ലാസ് കാർഡ് ഡിസൈൻ */}
//         <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-6 pt-8 pb-7">
          
//           <h2 className="text-[24px] font-bold text-[#475270] text-center leading-tight">
//             {mode ? "Your Profile" : "Complete Your Profile"}
//           </h2>
//           <p className="text-slate-500 text-sm text-center mt-1 mb-7">
//             {mode ? "Update your personal details below." : "Just a couple of details left."}
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-6">
            
//             {/* പ്രൊഫൈൽ പിക്ചർ */}
//             <div className="flex justify-center">
//               <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
//                 {photoUrl ? (
//                   <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
//                 ) : (
//                   <User className="w-10 h-10 text-white" />
//                 )}
//                 <button 
//                   type="button" 
//                   className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 active:scale-95 transition-transform"
//                   aria-label="Change photo"
//                 >
//                   <Camera className="w-4 h-4 text-slate-600" />
//                 </button>
//               </div>
//             </div>

//             {/* പേര് ഇൻപുട്ട് */}
//             <div className="space-y-1.5">
//               <label className="text-sm font-medium text-slate-700 ml-1">Full Name *</label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  
//                   {/* ജെൻഡർ അടിസ്ഥാനമാക്കി ഐക്കൺ മാറും */}
//                   {gender === 'Female' ? (
//                     <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <circle cx="12" cy="10" r="5"></circle>
//                       <line x1="12" y1="15" x2="12" y2="22"></line>
//                       <line x1="9" y1="19" x2="15" y2="19"></line>
//                     </svg>
//                   ) : gender === 'Male' ? (
//                     <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <circle cx="10" cy="14" r="5"></circle>
//                       <line x1="13.54" y1="10.46" x2="21" y2="3"></line>
//                       <polyline points="16 3 21 3 21 8"></polyline>
//                     </svg>
//                   ) : (
//                     <User className="w-4 h-4 text-slate-400" />
//                   )}
                  
//                 </div>
//                 <input 
//                   type="text" 
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] transition-all text-slate-800"
//                   placeholder="Your Name"
//                 />
//               </div>
//             </div>

//             {/* Onboarding സമയത്ത് മാത്രം ജെൻഡർ കാണിക്കും */}
//             {!mode && (
//               <div className="space-y-2">
//                 <label className="text-sm font-medium text-slate-700 ml-1">Gender *</label>
//                 <div className="grid grid-cols-3 gap-3">
//                   {['Male', 'Female', 'Other'].map((g) => (
//                     <button
//                       key={g}
//                       type="button"
//                       onClick={() => setGender(g)}
//                       className={`py-3 px-2 rounded-2xl text-sm font-medium transition-all ${
//                         gender === g 
//                           ? 'bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] text-white shadow-sm border-2 border-transparent' 
//                           : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
//                       }`}
//                     >
//                       {g}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* ഫോൺ നമ്പർ */}
//             <div className="space-y-1.5">
//               <label className="text-sm font-medium text-slate-700 ml-1">Phone Number *</label>
//               <div className="flex gap-2">
//                 <div className="relative w-[90px] flex-shrink-0">
//                   <select 
//                     value={countryCode}
//                     onChange={(e) => setCountryCode(e.target.value)}
//                     className="w-full h-full appearance-none bg-white border border-slate-200 rounded-2xl pl-3 pr-7 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] text-slate-800 text-sm font-medium transition-all cursor-pointer"
//                   >
//                     <option value="+91">+91</option>
//                     <option value="+971">+971</option>
//                     <option value="+1">+1</option>
//                     <option value="+44">+44</option>
//                   </select>
//                   <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none">
//                     <ChevronDown className="w-4 h-4 text-slate-400" />
//                   </div>
//                 </div>

//                 <div className="relative flex-1">
//                   <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
//                     <Phone className="w-4 h-4 text-slate-400" />
//                   </div>
//                   <input 
//                     type="tel" 
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] transition-all text-slate-800"
//                     placeholder="00000 00000"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* ബട്ടണുകൾ */}
//             <div className="pt-2 space-y-3">
//               <button 
//                 type="submit"
//                 disabled={!isFormValid}
//                 className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
//                   isFormValid 
//                     ? 'bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white shadow-md shadow-[#9DCBF7]/30 hover:brightness-105 active:scale-[0.98]' 
//                     : 'bg-slate-200 text-slate-400 cursor-not-allowed'
//                 }`}
//               >
//                 {mode ? "Save Changes" : "Save & Enter App"}
//               </button>

//               {mode && (
//                 <button 
//                   type="button"
//                   onClick={handleLogout}
//                   className="w-full py-3.5 rounded-full font-medium flex items-center justify-center gap-2 bg-white border border-rose-200 text-rose-500 hover:bg-rose-50 active:scale-[0.98] transition-all duration-300"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   Log Out
//                 </button>
//               )}
//             </div>
            
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;





// dynamic size issue  solve

"use client"
import React, { useState } from 'react';
import { Camera, User, Phone, LogOut, Lock, ChevronDown } from 'lucide-react';

const ProfilePage = ({ isProfileMode = false, onSave, onLogout }) => {
  const [mode, setMode] = useState(isProfileMode);

  const [name, setName] = useState("John Doe");
  const [photoUrl] = useState(""); 
  const [gender, setGender] = useState(mode ? "Male" : ""); 
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState(mode ? "9876543210" : "");

  const isFormValid = name.trim() !== "" && gender !== "" && phone.length > 5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      if (!mode) setMode(true); // Testing Purpose
      if (onSave) {
        onSave({ name, photoUrl, gender, fullPhone: `${countryCode}${phone}` });
      }
    }
  };

  const handleLogout = () => {
    setMode(false); // Testing Purpose
    if (onLogout) onLogout();
  };

  return (
    // h-[100dvh] & overflow-hidden വെച്ചതുകൊണ്ട് സ്ക്രീൻ ഒട്ടും സ്ക്രോൾ ആവില്ല
    <div className="h-[100dvh] w-full flex items-center justify-center bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] px-5 overflow-hidden">
      
      {/* 
        MAIN FIX: ഈ ബോക്സിന് h-[630px] ഫിക്സഡ് ഹൈറ്റ് കൊടുത്തു. 
        ഇനി ലോഗ്ഔട്ട് ബട്ടൺ വന്നാലും പോയാലും ഈ ബോക്സ് വലുതാവുകയോ ചെറുതാവുകയോ ചെയ്യില്ല! 
      */}
      <div className="w-full max-w-[360px] h-[630px] bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-6 py-7 flex flex-col">
        
        {/* Header Section */}
        <div className="flex-shrink-0 mb-4">
          <h2 className="text-[24px] font-bold text-[#475270] text-center leading-tight">
            {mode ? "Your Profile" : "Complete Profile"}
          </h2>
          <p className="text-slate-500 text-sm text-center mt-1">
            {mode ? "Update your personal details below." : "Just a couple of details left."}
          </p>
        </div>

        {/* Form Section - Takes up the remaining exact space */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
          
          <div className="space-y-4">
            {/* Profile Picture */}
            <div className="flex justify-center mb-1">
              <div className="relative w-22 h-22 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center border-[3px] border-white shadow-sm overflow-hidden">
                {photoUrl ? (
                  <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-white" />
                )}
                <button 
                  type="button" 
                  className="absolute bottom-0 right-0 bg-white p-1.5 rounded-full shadow-md border border-slate-100 active:scale-95 transition-transform"
                >
                  <Camera className="w-3.5 h-3.5 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Name Input with Dynamic Gender Icon */}
            <div className="space-y-1">
              <label className="text-[13px] font-semibold text-slate-700 ml-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  {gender === 'Female' ? (
                    <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="5"></circle><line x1="12" y1="15" x2="12" y2="22"></line><line x1="9" y1="19" x2="15" y2="19"></line></svg>
                  ) : gender === 'Male' ? (
                    <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="14" r="5"></circle><line x1="13.54" y1="10.46" x2="21" y2="3"></line><polyline points="16 3 21 3 21 8"></polyline></svg>
                  ) : (
                    <User className="w-4 h-4 text-slate-400" />
                  )}
                </div>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] transition-all text-slate-800 text-[15px]"
                  placeholder="Your Name"
                />
              </div>
            </div>

            {/* Gender Field - Always visible, but locked in Profile Mode */}
            <div className="space-y-1">
              <div className="flex items-center justify-between ml-1 mr-1">
                <label className="text-[13px] font-semibold text-slate-700">Gender</label>
                {mode && (
                  <span className="flex items-center gap-1 text-[10px] text-slate-400 font-semibold bg-slate-100 px-2 py-0.5 rounded-md">
                    <Lock className="w-2.5 h-2.5" /> Cannot change
                  </span>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['Male', 'Female', 'Other'].map((g) => {
                  const isSelected = gender === g;
                  return (
                    <button
                      key={g}
                      type="button"
                      disabled={mode}
                      onClick={() => !mode && setGender(g)}
                      className={`py-2.5 px-2 rounded-2xl text-[13px] font-semibold transition-all ${
                        isSelected 
                          ? 'bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] text-white shadow-sm border-2 border-transparent' 
                          : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                      } ${mode && !isSelected ? 'opacity-40 cursor-not-allowed' : ''} 
                        ${mode && isSelected ? 'cursor-default' : ''}`}
                    >
                      {g}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="space-y-1">
              <label className="text-[13px] font-semibold text-slate-700 ml-1">Phone Number</label>
              <div className="flex gap-2">
                <div className="relative w-[85px] flex-shrink-0">
                  <select 
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-full h-full appearance-none bg-white border border-slate-200 rounded-2xl pl-3 pr-6 py-3 focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] text-slate-800 text-[15px] font-medium transition-all cursor-pointer"
                  >
                    <option value="+91">+91</option>
                    <option value="+971">+971</option>
                    <option value="+1">+1</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Phone className="w-4 h-4 text-slate-400" />
                  </div>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] transition-all text-slate-800 text-[15px]"
                    placeholder="00000 00000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Button Section - Anchored to the bottom */}
          <div className="mt-auto pt-4 space-y-2.5">
            <button 
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3.5 rounded-full font-semibold transition-all duration-300 ${
                isFormValid 
                  ? 'bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white shadow-md shadow-[#9DCBF7]/30 hover:brightness-105 active:scale-[0.98]' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {mode ? "Save Changes" : "Save & Enter App"}
            </button>

            {/* Logout button (Takes same layout space smoothly) */}
            {mode ? (
              <button 
                type="button"
                onClick={handleLogout}
                className="w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 bg-white border border-rose-200 text-rose-500 hover:bg-rose-50 active:scale-[0.98] transition-all duration-300"
              >
                <LogOut className="w-4 h-4" /> Log Out
              </button>
            ) : (
               // Onboarding മോഡിൽ ലോഗ്ഔട്ട് ബട്ടണിന്റെ അതേ സൈസിലുള്ള ഒരു അദൃശ്യമായ സ്പേസ് കൊടുക്കുന്നു, അപ്പോൾ ബോക്സ് അനങ്ങില്ല.
              <div className="h-[46px] w-full"></div> 
            )}
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;