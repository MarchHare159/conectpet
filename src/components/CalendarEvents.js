import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function CalendarEvents() {
  return (
    <div className="w-[750px] pt-[50px]">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locale="pt-br"
        headerToolbar={{
          left: 'prev,next today',
          right: 'dayGridDay,dayGridWeek,dayGridMonth,listWeek',
        }}
        footerToolbar={{
          center: 'title'
        }}
        buttonText={{
          today: 'Hoje',
          month: 'Mês',
          week: 'Semana',
          day: 'Dia',
          list: 'Lista Semanal',
        }}
        events={[
          { title: 'Event 1', date: '2024-11-11', className: 'bg-green-500 text-white' },
          { title: 'Event 2', date: '2024-11-14', className: 'bg-red-500 text-white' },
        ]}
      />
    </div>
  );
}

export default CalendarEvents;
