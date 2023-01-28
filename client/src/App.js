
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { EducateProvider } from './Context/Educatecontext';

function App() {
  return (
    <div className="App">
      <EducateProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </EducateProvider>

    </div>
  );
}

export default App;
