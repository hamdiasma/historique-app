
import React ,{useEffect} from "react"
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as  Router,Route } from "react-router-dom"
import NotifyAlert from "./components/notify/NotifyAlert";
import PageRoute from "./PageRoute";
import Login from "./pages/login";
import Home from "./pages/home"
import { refreshTokenAction } from "./redux/actions/auth";
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
       <Route exact path="/" component={auth.token?Home : Login}/>
       <Route exact path="/:page" component={PageRoute}/>
       <Route exact path="/:page/:id" component={PageRoute}/>
       
       </div>  
  </div>
  </Router>
  );
}

export default App;
