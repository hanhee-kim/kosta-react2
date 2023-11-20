//자식의 태그를 가져오는 방법
function PropsNode(props){
    return(
        <>
            <h1>태그 시작</h1>
            {props.children}
            <h1>태그 끝</h1>
        </>
    )
}

export default PropsNode;