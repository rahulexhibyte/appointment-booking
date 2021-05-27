import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PrivateRoute from "./utils/privateRoute";
import Login from "./containers/Login";
import BookingMeetingList from "./containers/BookingMeetingList";
import AppointmentSchedule from "./containers/AppointmentSchedule";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/meeting-list" exact>
            <BookingMeetingList />
          </Route>
          <Route path="/schedule" exact>
            <AppointmentSchedule />
          </Route>
          <PrivateRoute path="/" exact>
            <div>Private roiyeeeee</div>
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
