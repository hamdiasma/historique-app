
import {BrowserRouter as  Router,Route } from "react-router-dom"
import PageRoute from "./PageRoute";
import Login from "./pages/login";
function App() {
  return (
    <Router>
     <input  type="checkbox" id="theme"/>
    <div className="App">
     <div className="main">
       <Route exact path="/" component={Login}/>
       <Route exact path="/:page" component={PageRoute}/>
       <Route exact path="/:page/:id" component={PageRoute}/>
       
       </div>  
  </div>
  </Router>
  );
}

export default App;
