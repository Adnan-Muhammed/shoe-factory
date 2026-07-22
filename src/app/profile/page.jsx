import React, { useState } from 'react';
import { Camera, User, Phone } from 'lucide-react';

const OnboardingPage = () => {
 
  //  just like a google data 
  const [name, setName] = useState("John Doe"); 
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
    <div className="min-h-screen bg-slate-50 p-6 flex justify-center">
      <div className="w-full max-w-md pt-8">
        
        <h2 className="text-2xl font-bold text-slate-800 mb-1 text-center">Complete Your Profile</h2>
        <p className="text-slate-500 text-sm text-center mb-8">Just a few details to get started.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Profile Picture */}
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center border-4 border-white shadow-sm">
              <User className="w-10 h-10 text-emerald-500" />
              <button type="button" className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-slate-100 active:scale-95">
                <Camera className="w-4 h-4 text-slate-600" />
              </button>
            </div>
          </div>

          {/* Name Field (Pre-filled) */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700 ml-1">Full Name</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800"
              placeholder="Your name"
            />
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
                      ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500 shadow-sm' 
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
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-slate-800"
                placeholder="+91 00000 00000"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                isFormValid 
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600 active:scale-[0.98]' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Save & Enter App
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;