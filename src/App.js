import React from "react"
// import "./index.css"
import HeaderOne from "./Components/Header/HeaderOne"
import SideNav from "./Components/Header/SideNav/SideNav"
import TextField from "./Components/TextField/TextField"
import FooterExamples from "./Components/Footer/FooterExamples"
import DropDownExamples from "./Components/DropDown/DropDownExample"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props)
        let textFieldData = [{"id": 1, "placeholder": "Error Message",errorMessage:"Some Validation Error" },
        {"id": 1, "placeholder": "Some Value" }                            
        ]
        this.state =  {
            "textFieldData": textFieldData
        }
        this.textFieldDidChange = this.textFieldDidChange.bind(this)
    }
    


    textFieldDidChange(id, value) {
        console.log("text field did change", id, value)
        let newData = this.state.textFieldData.map(item => {
            if(item.id === id) {
                item.value = value
            }
            return item
        })
        this.textFieldValues = newData
        console.log("Val", this.textFieldValues)
    }
    

    render() {
        console.log("text fata", this.state, this.textFieldValues)
        let textFields = this.state.textFieldData.map( (item) => {
            return (<TextField id={item.id} placeholder={item.placeholder} errorMessage={item.errorMessage} 
            notifyChange={this.textFieldDidChange}/>)
        })
        return(
            <Router>
                <Switch>
                    <Route path="/header-one">
                        <HeaderOne />
                    </Route>
                    <Route path="/side-nav">
                        <SideNav />
                    </Route>
                    <Route path="/text-field">
                    <div className="p-6">
                        {textFields}
                    </div>
                        
                    </Route>
                    <Route path="/footers">
                        <FooterExamples></FooterExamples>
                    </Route>

                    <Route path="/dropdowns">
                        <DropDownExamples></DropDownExamples>
                    </Route>


                    <Route path="">
                    
                        <a href="/header-one">Header One</a>
                        <br/>
                        <a href="/side-nav">Side Nav</a>
                        <br/>
                        <a href="/text-field">Text field</a>
                        <br/>
                        <a href="/footers">Footers</a>
                        <br/>
                        <a href="/dropdowns">Dropdowns</a>

                    </Route>
                    
                </Switch>
            </Router>
        )
    }
}

export default App