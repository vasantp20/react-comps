import React from "react";

export default class SimpleDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'selectedValue': "Select",
            'isDropDownVisible': true
        }
        this.selectItem = this.selectItem.bind(this)
        this.toggle = this.toggle.bind(this)
    }


    selectItem(id, e) {
        console.log(id)
        this.props.selectFn(id, "dropdownOne")
    }

    toggle() {
        this.props.toggleFn("dropdownOne")
    }

    render() {
        const optionItems = this.props.data.map((item) => {
            return <div key={item.id} onClick={e => this.selectItem(item.id, e)} class="cursor-pointer hover:bg-gray-100 hover:text-blue-500 p-2 rounded"><a>{item.data}</a></div>})
        return (
            <div class="flex flex-col text-sm m-0 gap-1">
                <div onClick={this.toggle} class="border border-blue-500 focus:outline-none rounded cursor-pointer p-2">
                    <div class="flex">
                        {this.props.config.value}
                        <div class="ml-auto fill-current text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Drowdown Content */}
                
                <div class={this.props.config.isDropDownVisible ? 'dropdown-visible' : 'dropdown-hidden'}>
                    {optionItems}
                </div>

            </div>
        )
    }
}