import FooterOne from "./FooterOne"
import FooterTwo from "./FooterTwo"
import React from "react"

export default class ReactExamples extends React.Component {
    render() {
        return(
            <div className="flex flex-col gap-4">
            <div>
                <h1> Footer Example One</h1>
                <FooterOne></FooterOne>
            </div>

            <div>
                <h1> Footer Example Two</h1>
                <FooterTwo></FooterTwo>
            </div>
                
            </div>
        )
    }
}
