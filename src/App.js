import { Routes, Route, HashRouter } from 'react-router-dom';
import AlertTest from './pages/alert-test/AlertTest';
import AnchorTest from './pages/anchor-test/AnchorTest';
import Main from './pages/main/Main';
import Form from './pages/react-hook-form/Form';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/alert" element={<AlertTest />} />
        <Route path="/anchor" element={<AnchorTest />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
