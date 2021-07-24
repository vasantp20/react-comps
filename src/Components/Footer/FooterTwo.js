import React from "react"

export default class FooterTwo extends React.Component{
    render() {
        return(
            <footer>
                <div className="bg-gray-100 flex flex-col gap-4 lg:flex-row justify-between lg:px-16 px-4 py-4">
                    <div class="flex-auto">
                        {/* Branding Area */}
                        <h2 class="text-xl">ReactComps</h2>
                        <a className="font-light text-sm">Some Content</a>
                    </div>
                    <div class="flex-auto">
                        <h2>Categories</h2>
                        <div class="font-light text-sm">
                            <div><a href="#test" > Link1 </a></div>
                            <div><a href="#test1"> Link2 </a></div>
                            <div><a href="#test2"> Link3 </a></div>
                        </div>
                    </div>

                    <div class="flex-auto">
                    <h2>Products</h2>
                        <div class="font-light text-sm">
                            <div><a href="#test" > Link1 </a></div>
                            <div><a href="#test2"> Link3 </a></div>
                            <div><a href="#test1"> Link2 </a></div>
                        </div>
                    </div>

                    <div class="flex-auto">
                        <h2>Subscribe to our Newsletter</h2>
                        <div className="flex flex-col md:flex-none md:inline ">
                            <input className="flex-none bg-gray-100 focus:outline-none  border-b border-blue-500" type="email"/>
                            <button class="md:m-2 focus:outline-none flex-initial my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    
                    
                </div>

            </footer>
        )
    }
}