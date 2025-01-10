import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home/HomePage";
import DynamicPage from "./components/DynamicPage/DynamicPage.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:cabinetId/:folderId" element={<DynamicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
