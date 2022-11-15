
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>

      <div className="app-wrapper-content">
        <Routes>
          <Route element={<ProfileContainer/>} path="/profile/*"/>
          <Route element={<DialogsContainer/>} path="/dialogs/*"/>
          <Route element={<UsersContainer/>} path="/users/*"/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
