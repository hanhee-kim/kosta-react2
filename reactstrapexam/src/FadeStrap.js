import { useState } from "react";
import { Button, Fade } from "reactstrap";

function FadeStrap() {
  const [fadeIn, setFadeIn] = useState(true);

  return (
    <>
      <Button color="primary" onClick={() => setFadeIn(!fadeIn)}>
        Fade In / Out
      </Button>
      <Fade in={fadeIn} tag="p">
        "인·허가 관련 각종 심의를 한번에 처리하는 통합심의 제도를 의무화하고,
        착공 전까지 지하안전평가를 완료할 수 있도록 규제를 개선한다",
      </Fade>

      <f1>언니 어디갔어요 보고싶어요</f1>
    </>
  );
}

export default FadeStrap;
