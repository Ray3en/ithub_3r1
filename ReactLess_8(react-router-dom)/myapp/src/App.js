import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductListPage from "./pages/ProductListPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <div>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contacts" element={<ContactsPage/>}/>
            <Route path="/products" element={<ProductListPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
