import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Panel from './pages/panel';
import Agenda from './pages/agenda';
import Consultations from './pages/consultations';
import Reports from './pages/reports';
import Registration from './pages/registration';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/panel" replace />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
