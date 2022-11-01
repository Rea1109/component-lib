import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AlertTest from './pages/alert-test/AlertTest';
import AnchorTest from './pages/anchor-test/AnchorTest';
import DragDropTest from './pages/drag-drop-test/DragDropTest';
import Main from './pages/main/Main';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/alert" element={<AlertTest />} />
                <Route path="/anchor" element={<AnchorTest />} />
                <Route path="/drag-drop" element={<DragDropTest />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
