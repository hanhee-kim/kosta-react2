import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function ModalStrap() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button color="danger" onClick={() => setOpen(true)}>
        OpenModal
      </Button>
      <Modal isOpen={open} toggle={() => setOpen(!open)}>
        <ModalHeader toggle={() => setOpen(!open)}>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
          molestiae doloremque! Temporibus, quia odit! Quidem vel blanditiis
          quae molestiae impedit eius dignissimos quis debitis, amet cum quia
          eligendi officia culpa?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setOpen(!open)}>
            확인
          </Button>{" "}
          <Button color="primary" onClick={() => setOpen(!open)}>
            취소
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalStrap;
