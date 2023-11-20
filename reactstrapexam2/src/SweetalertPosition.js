import { Button } from "reactstrap";
import Swal from "sweetalert2";

function SweetalertPosition() {
  const openAlert = (flag, position) => {
    // position은 알람창이 나오는 위치를 지정해줄 수 있다.
    Swal.fire({
      position: position,
      icon: "success",
      title: flag + "됐습니다.",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      <Button onClick={() => openAlert("저장", "center")}>저장</Button>
      <Button onClick={() => openAlert("수정", "bottom-end")}>수정</Button>
    </div>
  );
}

export default SweetalertPosition;
