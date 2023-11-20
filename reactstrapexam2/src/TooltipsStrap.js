import { useState } from "react";
import { Tooltip } from "reactstrap";

function TooltipsStrap() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ width: "800px" }}>
      <p>
        Somewhere in here is a{" "}
        <span
          style={{ textDecoration: "underline", color: "pink" }}
          id="tooltip"
        >
          Tooltip
        </span>
      </p>
      <Tooltip
        placement="right"
        isOpen={open}
        target="tooltip"
        toggle={() => setOpen(!open)}
      >
        Hello tooltip!!!
      </Tooltip>
    </div>
  );
}

export default TooltipsStrap;
