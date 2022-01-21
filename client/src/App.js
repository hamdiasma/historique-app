
import React ,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as  Router,Route } from "react-router-dom"
import NotifyAlert from "./components/alert/NotifyAlert";
import PageRoute from "./customRouter/PageRoute";
import Login from "./pages/login";
import Home from "./pages/home"
import Register from "./pages/register"
import { refreshTokenAction } from "./redux/actions/auth";
import Header from "./components/hedaer/Header";
import PrivateRouter from "./customRouter/privateRouter";

function App() {
const dispatch = useDispatch()
const {auth} = useSelector(state => state)

useEffect(()=>{
  dispatch(refreshTokenAction())
},[])

  return (
    <Router>
      <NotifyAlert/>

 <input  type="checkbox" id="theme"/>
    <div className="App">
     <div className="main">
      {
        auth.token&&  <Header/>
      }

       <Route exact path="/" component={auth.token?Home : Login}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/register" component={ Register}/>

       <PrivateRouter exact path="/:page" component={PageRoute}/>
       <PrivateRouter exact path="/:page/:id" component={PageRoute}/>
       </div>  
  </div>
  </Router>
  );
}

export default App;
