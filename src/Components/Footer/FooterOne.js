import React from "react";


export default class FooterOne extends React.Component {
    constructor() {
        super()
    }
    

    render() {
        return(
            <footer>
                <div className="bg-gray-100 flex flex-col gap-4 lg:flex-row justify-between lg:px-16 px-4 py-4">
                    <div>
                        {/* Branding Area */}
                        <h2 class="text-xl">ReactComps</h2>
                        <a className="font-light text-sm">Some Content</a>
                    </div>


                    <div>
                        <h2>Categories</h2>
                        <div class="font-light text-sm">
                            <div><a href="#test" > Link1 </a></div>
                            <div><a href="#test1"> Link2 </a></div>
                            <div><a href="#test2"> Link3 </a></div>
                        </div>
                    </div>

                    <div>
                    <h2>Products</h2>
                        <div class="font-light text-sm">
                            <div><a href="#test" > Link1 </a></div>
                            <div><a href="#test2"> Link3 </a></div>
                            <div><a href="#test1"> Link2 </a></div>
                        </div>
                    </div>

                    <div>
                    <h2>Categories</h2>
                    
                        <div class="font-light text-sm">
                            <div><a href="#test" > Link1 </a></div>
                            <div><a  href="#test1"> Link2 </a></div>
                            <div><a  href="#test2"> Link3 </a></div>
                        </div>
                    </div>
                    
                </div>

            </footer>
        )
    }
}
