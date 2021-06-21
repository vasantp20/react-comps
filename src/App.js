import React from "react"
import "./index.css"
import HeaderOne from "./Components/Header/HeaderOne"
import SideNav from "./Components/Header/SideNav/SideNav"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends React.Component {
    render() {
        return(
            <Router>
                
                <Switch>
                    
                    <Route path="/header-one">
                        <HeaderOne />
                    </Route>
                    <Route path="/side-nav">
                        <SideNav />
                    </Route>
                    <Route path="">
                        <a href="/header-one">Header One</a>
                        <br/>
                        <a href="/side-nav">Side Nav</a>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App