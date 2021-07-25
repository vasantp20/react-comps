import React from "react";
import SimpleDropDown from "./SimpleDropDown";

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
            }
        }

        this.toggleDropDownOne = this.toggleDropDownOne.bind(this)
        this.onSelectDropDown = this.onSelectDropDown.bind(this)
    }

    toggleDropDownOne() {
        this.setState(prevState => {
            return {
                dropdownOne: {
                    isDropDownVisible: !prevState.dropdownOne.isDropDownVisible,
                    value: prevState.dropdownOne.value
                }
                
            }
        })
    }

    onSelectDropDown(id, type) {
        if(type === "dropdownOne") {
            let newVal = this.options.find(item => item.id == id)
            this.setState(prevState => {
                return {
                    dropdownOne: {
                        isDropDownVisible: !prevState.dropdownOne.isDropDownVisible,
                        value: newVal.data
                    }
                    
                }
            })
        }
    }

    
    render() {
        return (
            <div class="m-2 inline-block">
                <SimpleDropDown data={this.options} config={this.state.dropdownOne}
                 toggleFn={this.toggleDropDownOne}
                 selectFn={this.onSelectDropDown}
                 ></SimpleDropDown>
            </div>
        )
    }
}