import React from 'react';

interface MissionCardProps {
  title: string;
  image: string;
  raisedAmt: string;
  goalAmt: string;
  percentage: number;
  donations: number;
  isNew?: boolean;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  title, image, raisedAmt, goalAmt, percentage, donations, isNew
}) => {
  const dashArray = 122.522;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow duration-300 flex flex-col overflow-hidden">
      <div className="relative h-48 w-full shrink-0">
        <img alt={title} src={image} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
          Tax Benefits Available
        </div>
        <div className="absolute bottom-3 left-4 text-white flex items-center gap-2">
          <div>
            <i className="text-[11px] opacity-90 font-serif tracking-wide">Mission</i>
            <p className="text-lg font-bold leading-tight mt-0.5">{title}</p>
          </div>
          {isNew && <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col justify-center">
        <div className="flex items-start gap-4">
          <div className="relative w-[40px] h-[40px] shrink-0 flex items-center justify-center">
            <svg className="absolute inset-0 transform -rotate-90 w-full h-full" viewBox="22 22 44 44">
              <circle cx="44" cy="44" r="19.5" fill="none" stroke="#f3f4f6" strokeWidth="5" strokeDasharray={dashArray} strokeDashoffset="0"></circle>
              <circle cx="44" cy="44" r="19.5" fill="none" stroke="#fbaf17" strokeWidth="5" strokeDasharray={dashArray} strokeDashoffset={dashOffset}></circle>
            </svg>
            <span className="text-[11px] font-bold text-gray-800 absolute">{percentage}%</span>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] text-[#222]">
              <span className="text-[#E7424B] font-bold tracking-tight">{raisedAmt}</span> raised,{' '}
              <span className="font-bold tracking-tight">{goalAmt}</span> left
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <p className="text-xs text-gray-500 font-medium">{donations} Donations</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-5 pt-0 mt-auto">
        <button className="relative overflow-hidden w-full bg-[#E7424B] hover:bg-[#d43740] text-white font-semibold py-2.5 rounded-lg transition-colors text-[15px] group">
          <span className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out]"></span>
          Pledge Monthly
        </button>
      </div>
    </div>
  );
};