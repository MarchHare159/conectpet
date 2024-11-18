import React from 'react';
import PageTitle from '../components/PageTitle';
import CalendarEvents from '../components/CalendarEvents';
import SelectProfessional from '../components/SelectProfessional';

function Agenda() {
  return (
    <>
      <PageTitle title="Agenda" subTitle="Gestão de agendamentos" />
      <div className="flex justify-between ml-[150px] mr-[64px]">
        <CalendarEvents/>

        <SelectProfessional/>
      </div>
    </>
  );
}

export default Agenda;
