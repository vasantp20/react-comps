import React from "react";

export default class SimpleDropDown extends React.Component {
    render() {
        return (
            <div class="m-2">
                <select class="bg-white border border-blue-500 p-2 focus:outline-none rounded appearance-none">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        )
    }
}