import React from 'react';
import PageTitle from '../components/PageTitle';
import AnimalsLastYearChart from '../components/AnimalsLastYearChart';
import AttendanceLast7DaysChart from '../components/AttendanceLast7DaysChart';
import ConsultationsLast12MonthsChart from '../components/ConsultationsLast12MonthsChart';
import StatisticsCard from '../components/StatisticsCard';

function Panel() {
  return (
    <>
      <PageTitle title="Painel" subTitle="Visão Geral & Estatísticas" />
      <div className="p-8 space-y-8">
        <div className="flex items-end gap-[20px]">
          <AnimalsLastYearChart/>
          <AttendanceLast7DaysChart/>

          <StatisticsCard/>
        </div>

        <ConsultationsLast12MonthsChart/>
      </div>
    </>
  );
}

export default Panel;
