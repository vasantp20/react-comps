import React from "react"

class SearchableDropDown extends React.Component {

    constructor(props) {
        super(props)
        this.selectItem = this.selectItem.bind(this)
        this.toggle = this.toggle.bind(this)
        this.search = this.search.bind(this)
        this.showData = props.data
        this.value = props.config.value
        this.state = {
            "value": props.config.value
        }
        console.log(this.showData)
    }

    selectItem(id, e) {
        console.log(e)
        
        this.props.selectFn(id, "dropdownTwo")
    }

    toggle() {
        this.props.toggleFn("dropdownTwo")
    }

    search(e) {
        console.log("search", e.target.value)
        this.setState(prevState => {
            return {
                "value": e.target.value
            }
        })
    }

    render() {
        const optionItems = this.showData.map((item) => {
            return <div key={item.id} onClick={e => this.selectItem(item.id, e)} class="cursor-pointer hover:bg-gray-100 hover:text-blue-500 p-2 rounded"><a>{item.data}</a></div>})
        return (
            <div>
                <input onClick={this.toggle} onChange={this.search} placeholder={this.props.config.placeholder} class="w-full focus:outline-none rounded p-1 border border-blue-700" type="text" value={this.state.value}/>

                {/* Drowdown Content */}
                
                <div class={this.props.config.isDropDownVisible ? 'dropdown-visible' : 'dropdown-hidden'}>
                    {optionItems}
                </div>
            </div>
        )
    }
}

export default SearchableDropDown