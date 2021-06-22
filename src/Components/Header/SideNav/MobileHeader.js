import React from "react"
export default class MobileHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            isNavBarHidden: true
        }
        this.handleMenuOnClick = this.handleMenuOnClick.bind(this)
    }


    handleMenuOnClick() {
        this.setState((prevState) => {
            return {
                isNavBarHidden: !prevState.isNavBarHidden
            }
        })
        this.props.toggleSideNav()
    }
    render() {
        let menuIcon = (<svg onClick={this.handleMenuOnClick} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>)
        if(this.state.isNavBarHidden){
            menuIcon = (<svg onClick={this.handleMenuOnClick} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>)
        }
        return (
            <div class="flex py-2 shadow-xl lg:hidden ">
                        <div class="px-1 cursor-pointer">
                            {menuIcon}
                        </div>

                        <div>
                            <h1 class="text-xl">Header</h1>
                        </div>
                    </div>
        )
    }
}