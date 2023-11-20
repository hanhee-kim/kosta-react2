import { Button } from "reactstrap";
import Swal from "sweetalert2";

function SweetalertConfirm() {
  const deleteAlert = () => {
    Swal.fire({
      title: "정말로 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "orange",
      cancelButtonColor: "lightGray",
      confirmButtonText: "예",
      cancelButtonText: "아니오",
    }).then((result) => {
      if (result.value) {
        document.getElementById("deleteId").remove();
        Swal.fire("Deleted", "삭제완료", "success");
      }
    });
  };
  return (
    <div>
      <h1 id="deleteId">삭제대상</h1>
      <Button onClick={deleteAlert}>삭제</Button>
    </div>
  );
}

export default SweetalertConfirm;
