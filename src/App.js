import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Services from './components/Services';
import Transactions from './components/Transactions';
import Footer from './components/Footer';

function App() {
  return (
    <Container maxWidth="l" sx={{background: "#121212"}} >
    <Navbar/>
    <Welcome/>
    <Services/>
    <Transactions/>
    <Footer/>
    </Container>
  );
}

export default App;
