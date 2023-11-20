import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";
function MakeAccount(accList, setAccList) {
  const [account, setAccount] = useState({
    account: "",
    name: "",
    money: "",
    type: "",
    grade: "",
  });
  const change = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name);
    console.log(value);
    setAccount({ ...account, [name]: value });
  };
  const makeAcc = () => {
    setAccList([...accList, account]);
    setAccount({
      account: "",
      name: "",
      money: "",
      type: "",
      grade: "",
    });
  };
  return (
    <div className="mk_acc">
      <Form>
        <h3 style={{ padding: "20px" }}>계좌개설</h3>
        <div className="mk_acc_div">
          <FormGroup className="acc_group">
            <Label for="account">계좌번호</Label>
            <Col>
              <Input
                type="text"
                name="account"
                id="account"
                placeholder="계좌번호를 입력하세요."
                onChange={change}
              />
            </Col>
          </FormGroup>

          <FormGroup className="acc_group">
            <Label for="name">이름</Label>
            <Col>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="이름을 입력하세요."
                onChange={change}
              />
            </Col>
          </FormGroup>
          <FormGroup className="acc_group">
            <Label for="money">입금액</Label>
            <Col>
              <Input
                type="text"
                name="money"
                id="money"
                placeholder="입금액을 입력하세요."
                onChange={change}
              />
            </Col>
          </FormGroup>

          <FormGroup className="acc_group" style={{ border: "none" }}>
            <Label>계좌종류</Label>
            <div className="type_group">
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="type"
                    onChange={change}
                    value={"일반계좌"}
                  />
                  일반계좌
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="type"
                    onChange={change}
                    value={"특수계좌"}
                  />
                  특수계좌
                </Label>
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup className="acc_group">
            <Label for="grade">등급</Label>
            <Col>
              <Input
                type="select"
                name="grade"
                id="grade"
                placeholder="선택하세요"
                onChange={change}
              >
                <option disabled hidden>
                  선택하세요
                </option>
                <option>VIP</option>
                <option>GOLD</option>
                <option>SILVER</option>
                <option>NOMAL</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup style={{ marginBottom: "30px" }}>
            <Button color="primary" id="mk_acc_Btn" onClick={makeAcc}>
              개좌개설
            </Button>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
}

export default MakeAccount;
