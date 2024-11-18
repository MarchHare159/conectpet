import React from 'react';
import MiniCalendar from '../components/MiniCalendar';

function SelectProfessional() {
  return (
    <>
      <div class="p-6">
        <div class="w-full max-w-xs mx-auto">
          <label class="text-[#1B98E0] font-inter text-[25px] font-semibold leading-normal">Selecione o profissional</label>
          <select class="w-full px-4 py-2 bg-[#EDEDED] border border-[#ADADAD] focus:outline-none focus:ring-2">
            <option>Profissional 1</option>
            <option>Profissional 2</option>
            <option>Profissional 3</option>
          </select>
        </div>

        <MiniCalendar />
      </div>
    </>
  );
}

export default SelectProfessional;
