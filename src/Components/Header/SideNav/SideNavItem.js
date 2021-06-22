import React from "react"

export default class SideNavItem extends React.Component {
    constructor() {
        super()
        this.toggleSelect = this.toggleSelect.bind(this)
    }

    toggleSelect() {
        this.props.clickAction(this.props.data.id)
    }

    render() {
        return (
            <a href={this.props.data.link} onClick={this.toggleSelect}>
            <div class={ this.props.data.isSelected ? 'bg-gray-50 flex items-center px-2 py-1 gap-4 text-black rounded border' : 'bg-white flex items-center  px-2 py-1 gap-4 text-gray-500 hover:text-gray-700'} >
                <div class={this.props.data.isSelected ? 'fill-current text-black' : ''}> 
                    {this.props.data.icon}
                </div>

                <div class="text-sm  ">
                    {this.props.data.itemText}
                </div>
            </div>
            </a>
        )
    }
}