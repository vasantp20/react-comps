import React from "react"
import "../../../index.css"
import SideNavItem from "./SideNavItem"
import sideNavData from "./sideNavData"
import SideNavBranding from "./SideNavBranding"
import MobileHeader from "./MobileHeader"


class SideNav extends React.Component {
    constructor() {
        super()
        let currentColor = "rgb(144 118 128)"
        this.state = {
            "navItemData": sideNavData,
            "isNavBarHidden": true
        }
        this.handleClick = this.handleClick.bind(this)
        this.toggleNavBar = this.toggleNavBar.bind(this)
    }



    handleClick(id) {
        let newState = this.state.navItemData.map( (item) => {
            if(item.id === id) {
                item.isSelected = true
            } else {
                item.isSelected = false
            }
        })

        this.setState(newState)
    }
    
    toggleNavBar() {
        this.setState((prevState) => {
            return {
                isNavBarHidden: !prevState.isNavBarHidden
            }
        })
    }


    render() {
        
        const navItems = this.state.navItemData.map((item) => {
            return <SideNavItem key={item.id} data={item} clickAction={this.handleClick} />})
        return (
            <div class="flex">
                <nav class={this.state.isNavBarHidden ? 'hidden lg:block flex-initial top-0 sticky w-56 h-screen shadow-xl p-2' : 'lg:block flex-initial top-0 sticky w-56 h-screen shadow-xl p-2'}>
                    <SideNavBranding />
                    {navItems}
                    
                </nav>
            <div class="flex-1 lg:px-4">
                <MobileHeader toggleSideNav={this.toggleNavBar}/>
                <p class="px-4"> Main Content</p>                
            </div>
            </div>

        )
    }

}



export default SideNav