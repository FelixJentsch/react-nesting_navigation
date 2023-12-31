import React from "react";
import Image from "./Image";
import avatar from "../img/avatar.jpg";

const Avatar = () => {
  return (
    <button
      type="button"
      onClick={() => console.log("i could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={avatar} alt="avatar" />
    </button>
  );
};

export default Avatar;
