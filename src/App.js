import './App.css';
import React, { Component } from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {seconds:0}
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <p>Enter a number of seconds to be converted below</p>
                    <input  onChange={event => this.setState({seconds: event.target.value})}
                    />
                    {convertedSeconds(this.state.seconds)}
                </header>
            </div>
        )
    }
}

const convertedSeconds = (seconds) => {
    if (!Number.isInteger(+seconds)){
        return <p> Need to enter an integer </p>
    } else if (parseInt(seconds) === 0){
        return ""
    } else if (parseInt(seconds) < 0){
        return <p> Need to enter a positive number</p>
    } else {
        return <p>{convertSeconds(seconds)}</p>
    }
};

function convertSeconds (time) {
    let dict = {"day": 0, "hour": 0, "minute": 0, "second": 0}
    dict["second"] = time % 60;
    time = (time - dict["second"]) / 60
    if (time > 0) {
        dict["minute"] = time % 60
        time = (time - dict["minute"]) / 60
    }
    if (time > 0) {
        dict["hour"] = time % 24
        time = (time - dict["hour"]) / 24
    }
    dict["day"] = time
    let nice_result = ""
    for (let key in dict) {
        if (dict[key] === 0) {
            continue
        }
        let mult;
        (dict[key] > 1 ? mult = "s, " : mult = ", ")
        nice_result += dict[key] + " " + key + mult
    }
    return nice_result.slice(0,-2)
}

export default App;
