import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="wrapper"> 
      <Header />
      <Nav />
      <div className="wrapper-content">
      <Profile />
      </div>
    </div>
  );
}

export default App;
