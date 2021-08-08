import React from "react";
import SimpleDropDown from "./SimpleDropDown";
import SearchableDropDown from "./SearchableDropDown"
export default class DropDownExamples extends React.Component {
    constructor() {
        super()
        this.options = [
            {
                id: 0,
                data: "Select 1"
            },
            {
                id: 1,
                data: "Select 2"
            },
            {
                id: 2,
                data: "Select 3"
            },
        ]

        this.state = {
            dropdownOne: {
                "isDropDownHidden": false,
                "value": "Select"
            },
            dropdownTwo: {
                "isDropDownHidden": false,
                "placeholder": "Test",
                
                "options": this.options
            },
        }

        this.toggleDropDown = this.toggleDropDown.bind(this)
        this.onSelectDropDown = this.onSelectDropDown.bind(this)
        this.searchOptions = this.searchOptions.bind(this)
    }

    toggleDropDown(name) {
        if(name === "dropdownOne") {
            this.setState(prevState => {
                return {
                    dropdownOne: {
                        isDropDownVisible: !prevState.dropdownOne.isDropDownVisible,
                        value: prevState.dropdownOne.value
                    }
                    
                }
            })
        }
        if(name === "dropdownTwo") {
            this.setState(prevState => {
                return {
                    dropdownTwo: {
                        isDropDownVisible: !prevState.dropdownTwo.isDropDownVisible,
                        value: prevState.dropdownTwo.value
                    }
                    
                }
            })
        }
        
    }

    onSelectDropDown(id, type) {
        if(type === "dropdownOne") {
            let newVal = this.options.find(item => item.id === id)
            this.setState(prevState => {
                return {
                    dropdownOne: {
                        isDropDownVisible: !prevState.dropdownOne.isDropDownVisible,
                        value: newVal.data
                    }
                    
                }
            })
        }
        if(type === "dropdownTwo") {
            let newVal = this.options.find(item => item.id === id)
            this.setState(prevState => {
                return {
                    dropdownTwo: {
                        isDropDownVisible: !prevState.dropdownTwo.isDropDownVisible,
                        value: newVal.data
                    }
                    
                }
            })
            console.log(this.state)
        }
    }

    searchOptions(byText) {
        
    }

    
    render() {
        return (
            <div>
                <div class="w-1/5 m-2">
                    <SimpleDropDown data={this.options} config={this.state.dropdownOne}
                    toggleFn={this.toggleDropDown}
                    selectFn={this.onSelectDropDown}
                    ></SimpleDropDown>
                </div>
                <div class="w-1/5 m-2">
                    <SearchableDropDown data={this.options} config={this.state.dropdownTwo}
                    toggleFn={this.toggleDropDown}
                    selectFn={this.onSelectDropDown}></SearchableDropDown>
                </div>
            </div>
        )
    }
}