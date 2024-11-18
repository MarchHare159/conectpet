import React from 'react';
import PageTitle from '../components/PageTitle';
import FilterReports from '../components/FilterReports';

function Report() {
  return (
    <>
      <PageTitle title="RELATÓRIOS" subTitle="GERAÇÃO DE RELATÓRIOS GERENCIAIS"/>
      <FilterReports />
    </>
  );
}

export default Report;
