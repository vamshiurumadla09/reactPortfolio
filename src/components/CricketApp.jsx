import React, { Component } from 'react';
import '../styles/cricketApp.css'

class CricketApp extends Component {
    constructor () {
        super();
        this.state = {
        score : 0,
        wickets : 0,
        ball:[]
        }
    };

    addZero = ()=>{
       this.setState({ball:[...this.state.ball, 0]})
       this.setState({score:this.state.score+0})
    }
    addOne = ()=>{
        this.setState({ball:[...this.state.ball, 1]})
        this.setState({score:this.state.score+1})
    }
    addTwo = ()=>{
        this.setState({ball:[...this.state.ball, 2]})
        this.setState({score:this.state.score+2})
    }
    addThree =()=>{
        this.setState({ball:[...this.state.ball, 3]})
        this.setState({score:this.state.score+3})
    }
    addFour = ()=>{
        this.setState({ball:[...this.state.ball, 4]})
        this.setState({score:this.state.score+4})
    }
    addSix = ()=>{
        this.setState({ball:[...this.state.ball, 6]})
        this.setState({score:this.state.score+6})
    }
    wicket =()=>{
        this.setState({ball:[...this.state.ball, 'W']})
        this.setState({wickets:this.state.wickets+1})
    }
    wide=()=>{
        this.setState({ball:[...this.state.ball, 'Wide']})
        this.setState({score:this.state.score+1})
    }
    noBall=()=>{
        this.setState({ball:[...this.state.ball, 'NB + free hit']})
        this.setState({score:this.state.score+1})
    }
    lb=()=>{
        this.setState({ball:[...this.state.ball, 'W']})
        this.setState({wickets:this.state.wickets+1})
    }
    render () {
        return (
            <div>
                <h3>cricket live score </h3>
                <h1>{this.state.score}/{this.state.wickets}</h1>
                <div id="d2" class="ball">{this.state.ball.map((a)=>{
                    return a+','
                })}</div>
                <div class="runs">
                    <div class="row">
                        <div onClick={this.addZero} class="col-lg-2 run zero">0</div>
                        <div onClick={this.addOne} class="col-lg-2 run one">1</div>
                        <div onClick={this.addTwo} class="col-lg-2 run two">2</div>
                        <div onClick={this.addThree} class="col-lg-2 run three">3</div>
                        <div onClick={this.addFour} class="col-lg-2 run four">4</div>
                        <div onClick={this.addSix} class="col-lg-2 run six">6</div>
                    </div>
                    <div class="row balls">
                        <div onClick={this.wicket} class="col-lg-6 run wicket">Wickect</div>
                        <div onClick={this.wide} class="col-lg-2 run wide">Wide</div>
                        <div onClick={this.noBall} class="col-lg-2 run nb">NB</div>
                        <div onClick={this.lb} class="col-lg-2 run lb">LB</div>
                    </div>
                </div>
            </div>
        )
    };
}

export default CricketApp;
