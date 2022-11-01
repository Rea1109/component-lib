import { Routes, Route, HashRouter } from 'react-router-dom';
import AlertTest from './pages/alert-test/AlertTest';
import AnchorTest from './pages/anchor-test/AnchorTest';
import DragDropTest from './pages/drag-drop-test/DragDropTest';
import InputButtonTest from './pages/input-button-test/InputButtonTest';
import Main from './pages/main/Main';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={<Main />} />
                <Route path="/alert" element={<AlertTest />} />
                <Route path="/anchor" element={<AnchorTest />} />
                <Route path="/drag-drop" element={<DragDropTest />} />
                <Route path="/input-button" element={<InputButtonTest />} />
            </Routes>
        </HashRouter>
    );
};

export default App;
