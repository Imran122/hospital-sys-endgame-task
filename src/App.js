import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LogIn from "./components/Authentication/LogIn/LogIn";
import Registration from "./components/Authentication/Registration/Registration";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import OurDepartment from "./components/OurDepartments/OurDepartment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import TestingLab from "./components/TesttingLab/TestingLab";
import AuthProvider from "./context/AuthProvider";
import "./css/Form.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
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
            <PrivateRoute path="/appointment/:id">
              <BookAppointment></BookAppointment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
