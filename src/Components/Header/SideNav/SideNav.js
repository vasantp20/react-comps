import React from "react"
import "../../../index.css"
import SideNavItem from "./SideNavItem"

class SideNav extends React.Component {
    

    constructor() {
        super()

        let currentColor = "rgb(144 118 128)"
        let navItemData = [{
            "id":1,
            "icon": <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current text-gray-500 " fill="none" viewBox="0 0 24 24" >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>,
            "itemText": "Home",
            "isSelected": true
        },
        {
            "id":2,
            "icon": <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={currentColor}>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>,
            "itemText": "Analytics",
            "isSelected": false
        }
    
    ]
        this.state = {
            "navItemData": navItemData,
        }

        this.handleClick = this.handleClick.bind(this)
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


    render() {
        const navItems = this.state.navItemData.map((item) => {
            return <SideNavItem key={item.id} data={item} clickAction={this.handleClick} />})
        return (
            <div class="flex">
                <nav class="flex-initial top-0 sticky w-56 h-screen shadow-xl p-2">
                    {navItems}
                </nav>
            <div class="flex-1 px-4">
                <p> Main Content</p>                
            </div>
            </div>

        )
    }

}

export default SideNav