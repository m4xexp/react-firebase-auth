import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContex";
import Home from "./page/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/signup">
            <Container
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup />
              </div>
            </Container>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
