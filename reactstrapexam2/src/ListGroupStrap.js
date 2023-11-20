import {
  Badge,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";

function ListGroupStrap() {
  return (
    <div style={{ width: "500px" }}>
      <ListGroup>
        <ListGroupItem className="justify-content-between">
          Cras justo odio<Badge pill>14</Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          Dapibus ac facilisis in<Badge pill>2</Badge>
        </ListGroupItem>
        <ListGroupItem className="justify-content-between">
          Morbi leo risus <Badge pill>1</Badge>
        </ListGroupItem>
      </ListGroup>
      {/* 태그를 줄 수 있음 */}
      <ListGroup>
        <ListGroupItem
          className="justify-content-between"
          tag="a"
          href="https://n.news.naver.com/mnews/article/031/0000781974?sid=105"
        >
          [스냅드래곤서밋 2023] "클라우드 AI는 잊어라"…퀄컴 CEO, '온디바이스
          AI'에 자신감
        </ListGroupItem>
        <ListGroupItem
          className="justify-content-between"
          active
          tag="a"
          href="https://n.news.naver.com/mnews/article/421/0007134264?sid=105"
        >
          [르포]가상현실서 겪은 사고현장…SKT 안전체험교육관 가보니
        </ListGroupItem>
        <ListGroupItem
          className="justify-content-between"
          color="success"
          tag="a"
          href="https://n.news.naver.com/mnews/hotissue/article/008/0004953643?type=series&cid=1088738"
        >
          "늦어도 너무 늦었다"…남극 빙하 보호막, 녹는 속도 3배[우주다방]
        </ListGroupItem>
      </ListGroup>
      {/* ListGroupItem 안에서 헤딩과 텍스트로 나눠서 줄수 있음 */}
      <ListGroup>
        <ListGroupItem className="justify-content-between">
          <ListGroupItemHeading>삼성SDS</ListGroupItemHeading>
          <ListGroupItemText>
            {" "}
            3분기 매출 3조2081억 원…전년比 23.6% 감소
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default ListGroupStrap;
