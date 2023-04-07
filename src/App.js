import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </>
    );
}
