
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>

      <div className="app-wrapper-content">
        <Routes>
          <Route element={<Profile/>} path="/profile/*"/>
          <Route element={<DialogsContainer/>} path="/dialogs/*"/>
          <Route element={<UsersContainer/>} path="/users/*"/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
