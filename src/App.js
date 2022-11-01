import { Routes, Route, HashRouter } from 'react-router-dom';
import AlertTest from './pages/alert-test/AlertTest';
import AnchorTest from './pages/anchor-test/AnchorTest';
import DragDropTest from './pages/drag-drop-test/DragDropTest';
import Main from './pages/main/Main';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/alert" element={<AlertTest />} />
                <Route path="/anchor" element={<AnchorTest />} />
                <Route path="/drag-drop" element={<DragDropTest />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
