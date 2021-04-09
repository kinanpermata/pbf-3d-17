import './App.css';
import Home from './pages/Home';
import Promotion from './pages/Promotion';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/promotion'component={Promotion} />
            <Route path='/products'component={Products} />
            <Route path='/contact'component={Contact} />
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
