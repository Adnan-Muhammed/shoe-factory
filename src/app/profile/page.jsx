
// "use client"
// import React, { useState } from 'react';
// import { Camera, User, Phone } from 'lucide-react';

// const OnboardingPage = () => {
 
//   //  just like a google data 
//   const [name, setName] = useState("John Doe"); 
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
//     <div className="min-h-screen bg-slate-50 p-6 flex justify-center">
//       <div className="w-full max-w-md pt-8">
        
//         <h2 className="text-2xl font-bold text-slate-800 mb-1 text-center">Complete Your Profile</h2>
//         <p className="text-slate-500 text-sm text-center mb-8">Just a few details to get started.</p>

//         <form onSubmit={handleSubmit} className="space-y-6">
          
//           {/* Profile Picture */}
//           <div className="flex justify-center mb-6">
//             <div className="relative w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-white shadow-sm">
//               <User className="w-10 h-10 text-emerald-500" />
//               <button type="button" className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 active:scale-95">
//                 <Camera className="w-4 h-4 text-slate-600" />
//               </button>
//             </div>
//           </div>

//           {/* Name Field (Pre-filled) */}
//           <div className="space-y-1.5">
//             <label className="text-sm font-medium text-slate-700 ml-1">Full Name</label>
//             <input 
//               type="text" 
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800"
//               placeholder="Your name"
//             />
//           </div>

//           {/* Gender Selection (Mandatory Buttons) */}
//           <div className="space-y-2">
//             <label className="text-sm font-medium text-slate-700 ml-1">Gender *</label>
//             <div className="grid grid-cols-3 gap-3">
//               {['Male', 'Female', 'Other'].map((g) => (
//                 <button
//                   key={g}
//                   type="button"
//                   onClick={() => setGender(g)}
//                   className={`py-3 px-2 rounded-2xl text-sm font-medium transition-all ${
//                     gender === g 
//                       ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500 shadow-sm' 
//                       : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
//                   }`}
//                 >
//                   {g}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Phone Number (Mandatory) */}
//           <div className="space-y-1.5">
//             <label className="text-sm font-medium text-slate-700 ml-1">Phone Number *</label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                 <Phone className="w-4 h-4 text-slate-400" />
//               </div>
//               <input 
//                 type="tel" 
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800"
//                 placeholder="+91 00000 00000"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-4">
//             <button 
//               type="submit"
//               disabled={!isFormValid}
//               className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
//                 isFormValid 
//                   ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600 active:scale-[0.98]' 
//                   : 'bg-slate-200 text-slate-400 cursor-not-allowed'
//               }`}
//             >
//               Save & Enter App
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default OnboardingPage;


"use client"
import React, { useState } from 'react';
import { Camera, User, Phone, Check } from 'lucide-react';

const OnboardingPage = () => {

  // Pre-filled from Google — name & photo already come from the OAuth profile
  const [name] = useState("John Doe");
  const [photoUrl] = useState(""); // populate with Google photo URL when wiring up auth
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const isFormValid = gender !== "" && phone.length > 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Saving User Data: ", { name, gender, phone });
      // go to the next dashboard
    }
  };

  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-gradient-to-b from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] px-6 py-10">
      <div className="w-full max-w-sm">

        {/* Card floats on the gradient, echoing the auth screen's language */}
        <div className="bg-white/90 backdrop-blur-sm rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-6 pt-8 pb-7">

          <h2 className="text-[24px] font-bold text-[#475270] text-center leading-tight">
            Complete Your Profile
          </h2>
          <p className="text-slate-500 text-sm text-center mt-1 mb-7">
            Just a couple of details left.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Profile Picture — pulled from Google, so it's a preview, not an empty state */}
            <div className="flex justify-center">
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] flex items-center justify-center border-4 border-white shadow-sm overflow-hidden">
                {photoUrl ? (
                  <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-10 h-10 text-white" />
                )}
                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 active:scale-95"
                  aria-label="Change photo"
                >
                  <Camera className="w-4 h-4 text-slate-600" />
                </button>
              </div>
            </div>

            {/* Name — from Google, shown as confirmed rather than editable-looking */}
            <div className="flex items-center justify-center gap-1.5 -mt-1">
              <span className="text-[17px] font-semibold text-slate-800">{name}</span>
              <Check className="w-4 h-4 text-emerald-500" />
            </div>

            {/* Gender Selection (Mandatory Buttons) */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 ml-1">Gender *</label>
              <div className="grid grid-cols-3 gap-3">
                {['Male', 'Female', 'Other'].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`py-3 px-2 rounded-2xl text-sm font-medium transition-all ${
                      gender === g
                        ? 'bg-gradient-to-br from-[#9DCBF7] to-[#C69CF7] text-white border-2 border-transparent shadow-sm'
                        : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Phone Number (Mandatory) */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700 ml-1">Phone Number *</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#9DCBF7]/40 focus:border-[#9DCBF7] transition-all text-slate-800"
                  placeholder="+91 00000 00000"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                  isFormValid
                    ? 'bg-gradient-to-r from-[#7FE2E3] via-[#9DCBF7] to-[#C69CF7] text-white shadow-md shadow-[#9DCBF7]/30 hover:brightness-105 active:scale-[0.98]'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Save & Enter App
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;