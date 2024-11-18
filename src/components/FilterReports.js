import React from 'react';

function FilterReports() {
  return (
    <div className="px-8 py-24">
        <div className="flex justify-end gap-28 pr-16 text-black font-inter text-xl font-semibold mb-12">
            <div className="w-[200px]">AGENDAMENTOS</div>
            <div className="w-[200px]">PROCEDIMENTOS</div>
            <div className="w-[200px]">ANIMAIS</div>
        </div>
        <div className="text-[#1B98E0] font-inter text-lg font-semibold mb-12">RELATÓRIOS DE AGENDAMENTOS</div>
        <div className="text-gray-500 font-semibold">
            <div className="text-[32px] font-inter mb-10">FILTROS</div>
            <div className="px-9 flex flex-row gap-5 flex-wrap">
                <div>
                    <div className="font-inter text-2xl">PROCEDIMENTOS</div>
                    <div><input className="border border-gray-300 bg-white text-2xl text-gray-400 pt-2 pl-3 w-72"/></div>
                </div>
                <div>
                    <div className="font-inter text-2xl">NOME</div>
                    <div><input className="border border-gray-300 bg-white text-2xl text-gray-400 pt-2 pl-3 w-72"/></div>
                </div>
                <div>
                    <div className="font-inter text-2xl">STATUS</div>
                    <div><input className="border border-gray-300 bg-white text-2xl text-gray-400 pt-2 pl-3 w-72"/></div>
                </div>
                <div>
                    <div className="font-inter text-2xl">RAÇA</div>
                    <div><input className="border border-gray-300 bg-white text-2xl text-gray-400 pt-2 pl-3 w-72"/></div>
                </div>
                <div>
                    <div className="font-inter text-2xl">PERÍODO</div>
                    <div><input className="border border-gray-300 bg-white text-2xl text-gray-400 pt-2 pl-3 w-72" value="Dia atual"/></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FilterReports;
