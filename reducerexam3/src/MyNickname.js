import React from "react";

const MyNickname = ({ info, dispatch }) => {
  return (
    <div>
      <label>{info.nickname}</label>
      <input
        type="text"
        onInput={(e) => dispatch({ name: "nickname", value: e.target.value })}
      />
    </div>
  );
};

export default MyNickname;
