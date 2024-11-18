import React from 'react';

function StatisticsCard() {
  return (
    <div className="flex flex-col flex-wrap items-center border border-[#ABABAB] min-w-[150px]">
      <div className='flex flex-col items-center'>
        <div className="text-[#1B98E0] font-inter text-[48px] font-semibold">656</div>
        <div className="text-[#A2A2A2] font-inter text-[12px] font-semibold">Animais cadastrados</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className="text-[#1B98E0] font-inter text-[48px] font-semibold">45</div>
        <div className="text-[#A2A2A2] font-inter text-[12px] font-semibold">Animais atendidos</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className="text-[#1B98E0] font-inter text-[48px] font-semibold">15</div>
        <div className="text-[#A2A2A2] font-inter text-[12px] font-semibold">Ausências</div>
      </div>
      <div className='flex flex-col items-center mb-[30px]'>
        <div className="text-[#1B98E0] font-inter text-[48px] font-semibold">33</div>
        <div className="text-[#A2A2A2] font-inter text-[12px] font-semibold">Cancelamentos</div>
      </div>
    </div>
  );
}

export default StatisticsCard;
