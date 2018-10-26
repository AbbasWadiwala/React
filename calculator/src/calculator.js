import React, {Component} from "react";

export default class CalculatorItem extends Component{

    constructor(){
        super();

        this.state = {
            stateDisplayText: " ",
        }

        this.pushToScreen = (e) => this.setState({
            stateDisplayText : this.state.stateDisplayText + e.target.value ,
        })

        this.calculator = (e) => this.setState({
            stateDisplayText : eval(this.state.stateDisplayText)
        })

        this.clearDisplay = () => this.setState({
            stateDisplayText : " ",
        })


    }

   

    render() {

        var bodyStyle = {
            // //backgroundColor: '#2222FF',
            // color: this.state.stateColor,
            // fontStyle: this.state.stateFontType[0],
            // fontWeight: this.state.stateFontWeight,
            // textTransform: this.state.stateFontTransform,

            backgroundImage : "url('http://clipartmag.com/images/light-blue-abstract-background-png-clipart-31.jpg')",
            backgroundRepeat : "repeat-0",
            backgroundSize : "100%",
            margin : "auto",
            border: "10px",
            borderStyle: "ridge",
            borderColor : "rgb(0, 120, 150)",
            backgroundColor : "rgb(0, 160, 180)",

            /*style="Position:static; margin: 10px 0 0 10px; background-color:rgb(240, 240, 255); height:40px; width:45px;"*/
            /*style="Position:absolute; top:50%; left:50%; margin: -150px 0 0 -125px; height:300px; width:250px; border:5px ridge rgb(100, 120, 160); border-radius:6px; background-color:rgb(180, 200, 225)"*/
        }

        return (
            <body id="bodyID" style={bodyStyle} >

            <span id="calculatorID" >
                    
                    <p>{this.state.stateDisplayText}</p>
                    <div>
                        <input type="button" id="button7" value="7" onClick={this.pushToScreen}/>
                        <input type="button" id="button8" value="8" onClick={this.pushToScreen}/>
                        <input type="button" id="button9" value="9" onClick={this.pushToScreen}/>
                        <input type="button" id="button/" value="/" onClick={this.pushToScreen}/>
                    </div>
                    <div>
                        <input type="button" id="button5" value="4" onClick={this.pushToScreen}/>
                        <input type="button" id="button5" value="5" onClick={this.pushToScreen}/>
                        <input type="button" id="button6" value="6" onClick={this.pushToScreen}/>
                        <input type="button" id="button*" value="*" onClick={this.pushToScreen}/>
                    </div>
                    <div>
                        <input type="button" id="button1" value="1" onClick={this.pushToScreen}/>
                        <input type="button" id="button2" value="2" onClick={this.pushToScreen}/>
                        <input type="button" id="button3" value="3" onClick={this.pushToScreen}/>
                        <input type="button" id="button-" value="-" onClick={this.pushToScreen}/>
                    </div>
                    <div>
                        <input type="button" id="button0" value="0" onClick={this.pushToScreen}/>
                        <input type="button" id="buttonCLR" value="CLR" onClick={this.clearDisplay} />
                        <input type="button" id="button=" value="=" onClick={this.calculator} />
                        <input type="button" id="button+" value="+" onClick={this.pushToScreen}/>
                    </div>
                </span>

                
           </body>
        );
        
    }
}