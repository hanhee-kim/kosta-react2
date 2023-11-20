import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
function ModalStrap2() {
  const [open, setOpen] = useState(false);
  const [fruit, setFruit] = useState("banana");
  const toggle = () => {
    setOpen(!open);
  };
  // 선택박스의 값이 체인지될때 실행
  const change = (e) => {
    console.log(e.target.value);
    setFruit(e.target.value);
  };
  //전송버튼 누를때 실행
  const send = () => {
    console.log("데이터 전송 처리");
    toggle();
  };
  return (
    <div style={{ width: "800px" }}>
      <Form inline onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <Label for="selectFruit">과일선택</Label> &nbsp; &nbsp; &nbsp;
          <Input type="select" onChange={change} name="selectFruit">
            <option value="banana">banana</option>
            <option value="apple">apple</option>
            <option value="orange">orange</option>
          </Input>
        </FormGroup>
        {""} &nbsp; &nbsp;
        <Button color="primary" onClick={toggle}>
          전송
        </Button>
      </Form>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>전송여부확인</ModalHeader>
        <ModalBody>
          {fruit}을 선택하셨습니다.
          <br />
          전송하시겠습니까 ?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={send}>
            전송
          </Button>
          <Button color="secondary" onClick={() => setOpen(false)}>
            취소
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default ModalStrap2;
