import React from "react"
import "../../index.css"
export default class HeaderOne extends React.Component {

    constructor() {
        super()
        this.state = {
            isLinksHidden: true
        }
        this.handleMenuOnClick = this.handleMenuOnClick.bind(this)
    }

    handleMenuOnClick() {
        this.setState((prevState) => {
            return {
                isLinksHidden: !prevState.isLinksHidden
            }
        })
    }


    render() {
        let classForLinks = "flex flex-col lg:flex-row lg:items-center"
        let menuIcon = (<svg onClick={this.handleMenuOnClick} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>)
        if(this.state.isLinksHidden) {
            classForLinks = "hidden lg:flex lg:flex-row lg:items-center"
            menuIcon = (<svg onClick={this.handleMenuOnClick} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>)
        }
a
        return (
            <header class="flex flex-col lg:flex-row justify-between shadow-xl lg:px-16 px-4 py-4 ">
                <div class="flex ">
                    <div class="lg:hidden px-1 cursor-pointer">
                        {menuIcon}
                    </div>

                    <div>
                        <h1 class="text-xl">Header</h1>
                    </div>
                </div>
                

                <div class={classForLinks}>
                    <div><a href="#test" class="px-1 text-sm"> Link1 </a></div>
                    <div><a  href="#test1" class="px-1 text-sm"> Link2 </a></div>
                    <div><a  href="#test2" class="px-1 text-sm"> Link3 </a></div>
                </div>
            </header>
        )
    }
}