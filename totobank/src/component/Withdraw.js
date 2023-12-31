import {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Withdraw = () => {
    const formStyle = {width:'600px',margin:'150px auto', border:'1px solid lightgray', padding:'30px', borderRadius:'7px'}
    const [acc, setAcc] = useState({id:'', money:0});
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState('');

    const changeInput = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }
    const toggle = () => {
        setModal(!modal);
    }
    const submit = (e) => {
        setMessage(`잔액은 ${100000- +acc.money}원입니다.`);
        toggle();
        e.preventDefault();
    }
    return(
        <div style={formStyle}>
        <Form>
            <h4 style={{textAlign:'center'}}>출 금</h4><br/>
            <FormGroup row>
                <Label for="id" sm={3}>계좌번호</Label>
                <Col sm={9}>
                    <Input type="text" name="id" id="id" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="money" sm={3}>출금액</Label>
                <Col sm={9}>
                    <Input type="text" name="money" id="money" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={12}>
                <Button color="primary" style={{width:"100%"}} onClick={submit}>출금</Button>
                </Col>
            </FormGroup>
        </Form>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>출금성공</ModalHeader>
          <ModalBody>
            {message}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>확인</Button>
          </ModalFooter>
        </Modal>
        </div>
    )
}

export default Withdraw;