import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

function ModalStrap3() {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const toggleNested = () => {
    setNestedModal(!nestedModal);
  };
  const toggleAll = () => {
    setNestedModal(false);
    setModal(false);
  };
  return (
    <div style={{ width: "800px" }}>
      <Button color="danger" onClick={toggle}>
        첫번째 모달
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal Title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
          molestiae doloremque! Temporibus, quia odit! Quidem vel blanditiis
          quae molestiae impedit eius dignissimos quis debitis, amet cum quia
          eligendi officia culpa?
          <Button color="success" onClick={toggleNested}>
            두번째 모달
          </Button>
          <Modal isOpen={nestedModal} toggle={toggleNested}>
            <ModalHeader toggle={toggleNested}>
              모달 헤더에 X 표시가 있잖아요! 그래서 토글이 들어간답니다~
            </ModalHeader>
            <ModalBody>
              닫기를 누르면 두번째 모달이 닫히고, 모두 닫기를 누르면 모든 모달이
              닫힙니다! 모달에도 토글이 들어가 있어야 모달 밖을 클릭했을때
              모달이 닫힙니다.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>
                닫기
              </Button>
              <Button color="secondary" onClick={toggleAll}>
                전체닫기
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            처리
          </Button>
          <Button color="secondary" onClick={toggle}>
            취소
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalStrap3;
