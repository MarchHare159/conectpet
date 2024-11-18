import React from 'react';
import PageTitle from '../components/PageTitle';

function Consultations() {
  const professionals = [
    {
      name: 'ZEUS',
      species: 'CACHORRO',
      breed: 'BULDOGUE',
      time: '08:30',
      procedure: 'CASTRAÇÃO',
      status: 'ATENDIDO'
    },
    {
      name: 'ROMEO',
      species: 'GATO',
      breed: 'PERSA',
      time: '08:50',
      procedure: 'VASCINAÇÃO',
      status: 'ESPERANDO'
    },
    {
      name: 'APOLO',
      species: 'HAMSTER',
      breed: 'SIRIO',
      time: '09:30',
      procedure: 'CONSULTA',
      status: 'AGENDADO'
    },
    {
      name: 'AQUILES',
      species: 'COELHO',
      breed: 'ANGORÁ',
      time: '10:30',
      procedure: 'CONSULTA',
      status: 'AGENDADO'
    },
    {
      name: 'ATENA',
      species: 'TARTARUGA',
      breed: 'ALIGÁTOR',
      time: '12:30',
      procedure: 'MEDICAÇÃO',
      status: 'AGENDADO'
    },
    {
      name: 'AFRODITE',
      species: 'FURÃO',
      breed: 'ALBINO',
      time: '16:30',
      procedure: 'VASCINAÇÃO',
      status: 'AGENDADO'
    },
  ]

  return (
    <>
      <PageTitle title="PROFISSIONAL" subTitle="Esta é a listagem das consultas de hoje" />
      <div className="overflow-x-auto p-[40px]">
        <table className="w-full">
          <thead>
            <tr className="bg-[#f0f3fc] border text-left text-[#556676] font-inter text-[25px] font-semibold leading-normal">
              <th className="p-[10px] text-center">#</th>
              <th className="p-[10px] text-center">NOME</th>
              <th className="p-[10px] text-center">ESPÉCIE</th>
              <th className="p-[10px] text-center">RAÇA</th>
              <th className="p-[10px] text-center">HORÁRIO</th>
              <th className="p-[10px] text-center">PROCEDIMENTO</th>
              <th className="p-[10px] text-center">STATUS</th>
            </tr>
          </thead>
          <tbody className="uppercase">
            {professionals && professionals.map((professional, index) => (
              <tr key={index} className="text-black font-inter text-[25px] font-semibold leading-normal">
                <td className="p-[10px] text-center">{index + 1}</td>
                <td className="p-[10px] text-center">{professional.name}</td>
                <td className="p-[10px] text-center">{professional.species}</td>
                <td className="p-[10px] text-center">{professional.breed}</td>
                <td className="p-[10px] text-center">{professional.time}</td>
                <td className="p-[10px] text-center">{professional.procedure}</td>
                <td className="p-[10px] flex justify-center">
                  {professional.status.toUpperCase() === "ATENDIDO" && <div class="bg-[#00FF29] w-[100px] text-white text-center px-[10px] py-1 rounded-lg text-sm">{professional.status}</div>}
                  {professional.status.toUpperCase() === "ESPERANDO" && <div class="bg-[#F90] w-[100px] text-white text-center px-[10px] py-1 rounded-lg text-sm">{professional.status}</div>}
                  {professional.status.toUpperCase() === "AGENDADO" && <div class="bg-[#1B98E0] w-[100px] text-white text-center px-[10px] py-1 rounded-lg text-sm">{professional.status}</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Consultations;
