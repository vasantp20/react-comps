import React, { useState } from "react"
import "../../../index.css"
import SideNavItem from "./SideNavItem"
import sideNavData from "./sideNavData"
import SideNavBranding from "./SideNavBranding"
import MobileHeader from "./MobileHeader"
import {useSpring, animated } from "react-spring";

function SideNav() {

    const [navItemData, setNavItemData] = useState(sideNavData)
    const [isNavBarHidden, setisNavBarHidden] = useState(true)
    const config = {
        mass: 1,
        tension: 170,
        friction: 26,
        clamp: true,
        precision: 0.01,
        velocity: 0,
        easing: (t) => t
      };
      const styleProps = useSpring({
        from: {
          opacity: 0,
        //   marginLeft: -500
        },
        to: {
          opacity: 1,
        //   marginLeft: 0
        },
        config
      })

    function handleClick(id) {
        console.log("Called")
        console.log(navItemData)
        let newState = navItemData.map( (item) => {
            console.log("Item", item)
            if(item.id === id) {
                item.isSelected = true
            } else {
                item.isSelected = false
            }
            return item
        })

        setNavItemData(newState)
        console.log("State", newState)
    }

    function toggleNavBar() {
        console.log("Called toggleNavBar")
        setisNavBarHidden(!isNavBarHidden)
    }

    const navItems = navItemData.map((item) => {
        return <SideNavItem key={item.id} data={item} clickAction={handleClick} />})

    return(
        
        <div class="flex">
        <animated.div style={styleProps}>
        <nav class={isNavBarHidden ? 'hidden lg:block flex-initial top-0 sticky w-56 h-screen shadow-xl p-2' : 'lg:block flex-initial top-0 sticky w-56 h-screen shadow-xl p-2'}>
                    <SideNavBranding />
                    {navItems}
                    
                </nav>
        </animated.div>
            <div class="flex-1 lg:px-4">
                <MobileHeader toggleSideNav={toggleNavBar}/>
                <p class="px-4"> Main Content</p>                
            </div>
            </div>
            )
}
class SideNavT extends React.Component {
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