import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'

function App() {


  return (

    <Router>

      <Header />
      <main className="py-3">

        <Container>
          <Routes>
            <Route path='/' Component={HomeScreen} exact />
            <Route path='/product/:id' Component={ProductScreen} />
          </Routes>
        </Container>

      </main>

      <Footer />
    </Router>

  );
}

export default App;
