import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <div className="wrapper"> 
      <Header />
      <Nav />
      <div className="wrapper-content">
        <Route path='/dialogs' component={Dialogs}/>
        <Route path = '/profile' component={Profile}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
