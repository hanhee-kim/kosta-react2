import { useState } from "react";
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

function ButtonGroupStrap() {
  const [number, setNumber] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="button1">
        <ButtonGroup>
          <Button color="success">Left</Button>
          <Button color="warning">Middle</Button>
          <Button color="danger">Right</Button>
        </ButtonGroup>
      </div>
      <div className="button2" style={{ marginTop: "100px" }}>
        <ButtonGroup>
          <Button>&lt;</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>&gt;</Button>
        </ButtonGroup>
      </div>
      <div className="button3" style={{ marginTop: "100px" }}>
        <ButtonGroup>
          <Button onClick={() => setNumber(number - 1)}>-</Button>
          <Button disabled>{number}</Button> {/* 버튼말고 다른 태그도 */}
          <Button onClick={() => setNumber(number + 1)}>+</Button>
        </ButtonGroup>
      </div>
      <div className="button4" style={{ marginTop: "100px" }}>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>
          <ButtonDropdown
            direction="right"
            isOpen={open}
            toggle={() => setOpen(!open)}
          >
            <DropdownToggle caret>선택</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>3</DropdownItem>
              <DropdownItem>4</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
      </div>
    </>
  );
}

export default ButtonGroupStrap;
