import { Component } from "react";

class WriteMemo extends Component{
    constructor(props) {
        super(props);
        this.state = {
            memos:[
                {id:1, memo:"메모1"},
                {id:2, memo:"메모2"},
            ],

            inputId : 3,
            inputText : "",
        }
    }
    render(){

        const 
        return (
            <div>
                <h1>메모2</h1>
                <input
                    type="text"
                    name="inputText"
                ></input>

                <ul>
                    <li>
                        {}
                    </li>
                </ul>
            </div>
        )

    }
}