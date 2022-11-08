
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
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
          <Route element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} path="/profile/*"/>
          <Route element={<Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}/>} path="/dialogs/*"/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}



export default App;
