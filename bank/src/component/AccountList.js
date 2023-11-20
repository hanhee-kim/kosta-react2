import { useState } from "react";
import MakeAccount from "./MakeAccount";
function AccountList() {
  const [accList, setAccList] = useState([]);
  return (
    <>
      <MakeAccount accList={accList} setAccList={setAccList} />
    </>
  );
}

export default AccountList;
