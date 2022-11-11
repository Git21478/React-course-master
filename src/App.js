
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

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
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
