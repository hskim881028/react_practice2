import React, { useState, useEffect } from "react";
const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickName} />
      </div>
      <div>
        <div>
          <b>name : </b>
          {name}
        </div>
        <b>nick : </b>
        {nickName}
      </div>
    </div>
  );
};

export default Info;
