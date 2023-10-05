import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import store from "./Redux/state";



function App(props) {
  return (
      <BrowserRouter>
    <div className="app-wrapper">
         <Header/>
         <Navbar/>
    <div className='app-wrapper-content'>
      <Routes>
          <Route path='/dialogs' element={ <Dialogs store={props.store}/>} />
          <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                   dispatch={props.dispatch}/>} />
      </Routes>
    </div>
    </div>
      </BrowserRouter>
  );
}

export default App;
