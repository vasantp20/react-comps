import React from "react"
//Simple Text field with error state
class TextField extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "value": "",
            "placeholder": props.placeholder,
            "errorMessage": props.errorMessage
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            "value": event.target.value
        })
    }

    // componentDidUpdate() {
    //     this.props.notifyChange(this.props.id, this.state.value)
    // }

    
    render() {
        let returnVal
        let placeholderValue = ""
        if(this.state.placeholder) {
            placeholderValue = this.state.placeholder
        }
        if(this.state.errorMessage) {
            returnVal = (
                <div className="p-6">
                    <input className="focus:outline-none  border-b border-red-700" type="text" value={this.state.value} placeholder={placeholderValue} onChange={this.handleChange} />
                    <a className="text-xs text-red-700 block">{this.state.errorMessage}</a>
                </div>
                )
        }
        else {
            returnVal = ( 
                <div className="p-6">
                    <input className="focus:outline-none  border-b border-blue-700" type="text" value={this.state.value} placeholder={placeholderValue} onChange={this.handleChange} />
                </div>
            )
        }
        return returnVal
    }
}

export default TextField