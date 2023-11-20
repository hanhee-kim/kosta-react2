import { useEffect, useState } from "react";
import {
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  Progress,
} from "reactstrap";

function PopoverStrap() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  useEffect(() => {
    plusValue();
  }, []);

  let tvalue = value;
  const plusValue = () => {
    let timerId = setInterval(() => {
      tvalue += 1;
      setValue(tvalue);
    }, 100);
    setTimeout(() => {
      clearInterval(timerId);
    }, 10000);
  };
  return (
    <div>
      <Button id="Popover1" onClick={() => setOpen(!open)}>
        pop!!_!! Launch Popover
      </Button>
      <Popover
        placement="bottom"
        isOpen={open}
        target="Popover1"
        toggle={() => setOpen(!open)}
      >
        <PopoverHeader>정부 양자기술 컨트롤타워</PopoverHeader>
        <PopoverBody>
          국무총리를 위원장으로 하는 범부처 양자 기술 컨트롤 타워로, 기존
          양자기술 특별위원회의 확대 개편한 '양자기술' 이제 그만 타자 쳐야겠다!
        </PopoverBody>
      </Popover>
      <br />
      <br />
      <hr />
      <Progress value={value} />
    </div>
  );
}

export default PopoverStrap;
