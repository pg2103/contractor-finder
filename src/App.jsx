import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contractors from './pages/Contractors';
import Contact from './pages/Contact';
import Navbar from "./Navbar";
import ContractorProfile from "./pages/ContractorProfile";

function App() {
  return (
  <div>
    <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/contractors" element={<Contractors/>} />
        <Route path="/contractor/:id" component={<ContractorProfile/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  </div>
  );
}



export default App;