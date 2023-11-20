import React, {Component} from 'react';

//class형은 this가 붙지만 function형은 this를 사용하면 오히려 에러가 날 수 있다.
class StateComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            stateString : 'react',
            stateNumber : 501
        }
    }

    stringChange = (e) => {
        //this.state.stateString = '리액-트';
        this.setState({stateString:'리액-트'});
    }

    numberChange = (e) => {
        this.setState({stateNumber:502});
    }

    render(){
        return(
            <>
            <button onClick={(e)=>{this.stringChange(e)}}>string 변경</button>
            <button onClick={(e)=>{this.numberChange(e)}}>number 변경</button>
            StateString : {this.state.stateString}<br/>
            stateNumber : {this.state.stateNumber}<br/>
            </>
        )
    }
}


export default StateComponent;