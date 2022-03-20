import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Authentication/LogIn/LogIn";
import Registration from "./components/Authentication/Registration/Registration";
import Home from "./components/Home/Home";
import OurDepartment from "./components/OurDepartments/OurDepartment";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import TestingLab from "./components/TesttingLab/TestingLab";
import AuthProvider from "./context/AuthProvider";
import "./css/Form.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>

            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/department">
              <OurDepartment></OurDepartment>
            </Route>
            <Route path="/lab">
              <TestingLab></TestingLab>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
