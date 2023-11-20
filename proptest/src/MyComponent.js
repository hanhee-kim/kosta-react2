// import React, {Component} from 'react';
// class MyComponent extends Component{
    //     render(){
        //         let {name,age} = this.props.info;
        //         return(
            //             <div>
            //                 {/*//값을 넘겨주는 방법 property로 넘겨준다.
            //                 <h1>{this.props.name}</h1>
        //                 <h1>{this.props.age}</h1>*/}
        
        //                 {/* <h1>{this.props.info.name}</h1>
    //                 <h1>{this.props.info.age}</h1> */}
    //                 <h1>{name}</h1>
//                 <h1>{age}</h1>
//             </div>
//         )
//     }
// }
//function형은 Component를 사용하지 않기 때문에 import를 쓰지 않는다.
function MyComponent({name,age}){
    return(
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}

export default MyComponent;