import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {

  return (
    <BrowserRouter>
    <div className="wrapper"> 
      <Header />
      <Nav />
      <div className="wrapper-content">
        <Route path='/dialogs' render = { () => <DialogsContainer
                                    store={props.store} /> }/>
        <Route path = '/profile' render = { () => <Profile 
                                    state = {props.state.profilePage} 
                                    dispatch ={props.dispatch}
                                    //updateNewPostText ={props.updateNewPostText}
                                    /> }/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
