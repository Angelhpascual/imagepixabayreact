import React from "react";

function Error({ msg }) {
  return (
    <p className="my-3 p-4 text-center text-black alert alert-primary">{msg}</p>
  );
}

export default Error;
