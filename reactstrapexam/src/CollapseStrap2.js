import { useState } from "react";
import { Collapse, Button, Card, CardBody } from "reactstrap";

function CollapseStrap2() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Closed");
  const [idx, setIdx] = useState(0);
  const contents = [
    "인·허가 관련 각종 심의를 한번에 처리하는 통합심의 제도를 의무화하고, 착공 전까지 지하안전평가를 완료할 수 있도록 규제를 개선한다",
    "25일 국토교통부에 따르면 국토부는 지난 24일 열린 '17개 시도 주택건설사업 인·허가 촉진을 위한 정책협의회'에서 지방자치단체의 의견을 수렴해 이같이 결정했다.",
    "국토부는 주택건설사업 인·허가 물량이 줄어든 이유로 대기 물량이 승인되지 않고 있다는 점을 원인으로 분석했다.",
  ];

  const entering = () => {
    console.log("onEntering");
    //opening
    setStatus("opening");
    // setStatus("Entering");
  };
  const entered = () => {
    //opened
    setStatus("opened");
    // setStatus("Entered");
  };
  const exiting = () => {
    //closing
    setStatus("closing");
    // setStatus("Exiting");
  };
  const exited = () => {
    //closed
    setStatus("closed");
    // setStatus("Exited");
  };

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Toggle</Button>
      <h5>Current state:{status}</h5>
      <Collapse
        isOpen={open}
        onEntering={entering}
        onEntered={entered}
        onExiting={exiting}
        onExited={exited}
      >
        <Card>
          <CardBody>{contents[idx]}</CardBody>
        </Card>
      </Collapse>
    </>
  );
}

export default CollapseStrap2;
