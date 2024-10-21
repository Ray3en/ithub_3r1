import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
        <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/test" element={<p>TEST</p>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
