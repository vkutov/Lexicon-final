import '../styles/App.css';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';



function App() {
  return (
    <>
        <Header /> 
        <Navbar />
        <Footer /> 
        {/* <Outlet /> */}

    </>
  );
}

export default App;
