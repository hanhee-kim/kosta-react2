import React,{Component} from "react";
//컴포넌트 생성자 메서드, 컴포넌트가 생성되면 가장 먼저 실행.
//this.props,this.state에 접근이 가능하고 리액트 요소를 반환한다.
//class형 컴포넌트
class MyComponent extends Component{
    constructor(props){
        //state를 생성자에 꼭 정의해주어야한다.
        super(props);
        this.state = {};
        //getDerivedStateFromProps 함수를 작성하지않고, 
        //생성자에서도 props를 받아오기 때문에 state를 여기서 정의해주어도 된다.
        // this.state = {param1:props.data}  
        console.log("constructor호출");
    }
    //props로부터 파생된 state를 가져온다.
    //즉, props로 받아온 것을 state에 넣어주고 싶을때 사용한다.
    //보통의 개발자들은 생성자에서 값을 넣어주기 때문에 잘 쓰지 않는 함수.
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps호출");
        return {param1:props.data}; //부모(이 컴포넌트를 호출한 컴포넌트)로부터 받은 값을 가져옴.
    }

    //컴포넌트를 랜더링하는 메소드.
    render(){ //랜더함수는 html이 그려지기 직전에 호출
        console.log("render호출");
        return(
            <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
        )
    }
    //컴포넌트가 마운트됨. 즉 컴포넌트의 첫번째 랜더링을 마치면 호출되는 메서드
    //이 메서드가 호출되는 시점에는 화면에 컴포넌트가 나타난 상태이다.
    //여기서 주로 DOM을 사용해야 하는 외부 라이브러리 연동, 해당 컴포넌트에서 필요로하는 데이터를 요청한다.
    componentDidMount(){
        console.log("componentDidMount: " + this.state.param1);
    }
    //컴포넌트가 리랜더링 할지 말지를 결정하는 메서드.
    // true / false 반환
    shouldComponentUpdate(props,state){
        console.log("shouldComponentUpdate");
        return true;
    }
    //컴포넌트가 update되고 난 후 발생
    componentDidUpdate(){
        console.log("componentDidUpdate");

    }
}
//호출 순서
// MyComponent.js:13 constructor호출
// MyComponent.js:19 getDerivedStateFromProps호출
// MyComponent.js:25 render호출
// MyComponent.js:34 componentDidMount: PPTEST

//function형 컴포넌트
// function MyComponent(){    // let MyComponent = () => {} 도 가능(화살표함수)
//     return(
//         <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
//     )
// }

//밖에서 사용하기 위해서 export : export해주어야 박에서 가져다 쓸수 있다
export default MyComponent;