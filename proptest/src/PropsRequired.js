import datatype from 'prop-types';

import React,{Component} from 'react';
class PropsRequired extends Component{
    render(){
        return(
            <>
            {this.props.ReactString}{this.props.ReactVersion}
            </>
        )
    }
}

//function 안쓰고 람다식으로 사용하는 방법
// let PropsRequired = ({ReactString,ReactVersion}) => {
//     return(
//         <>
//             {ReactString}{ReactVersion}
//         </>
//     )
// }

//반드시 가져와야하는 데이터. 가져오지못하면 오류를 내는 코드
PropsRequired.propTypes = {
    ReactString:datatype.string.isRequired
}

//가져오지 못하면 기본값을 설정해주는 코드
PropsRequired.defaultProps = {
    ReactString :'리액트',
    ReactVersion:501
}

export default PropsRequired;