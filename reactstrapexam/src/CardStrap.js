import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function CardStrap() {
  return (
    <>
      <Card className="cardStrap1">
        <CardImg
          top
          src="https://img.freepik.com/free-photo/cute-cat-relaxing-indoors_23-2150692894.jpg"
          alt="cat"
        />
        <CardBody>
          <CardTitle>REACT</CardTitle>
          <CardSubtitle>front component</CardSubtitle>
          <CardText>React is a front component</CardText>
          <Button>조회</Button>
        </CardBody>
      </Card>
      <Card className="cardStrap1">
        <CardTitle>카드제목</CardTitle>
        <CardText>카드내용이다</CardText>
        <Button>선택</Button>
      </Card>
    </>
  );
}

export default CardStrap;
