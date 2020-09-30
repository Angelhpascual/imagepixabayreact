import React, { useState } from "react";
import Error from "./Error";

function Form({ setSearch }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const searchImage = (e) => {
    e.preventDefault();

    //Validate
    if (input.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //Set the state
    setSearch(input);
  };

  return (
    <form onSubmit={searchImage}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="form-control form-control-lg"
            placeholder="Type a img..."
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Search"
          />
        </div>
      </div>
      {error ? <Error msg="Campo vacío" /> : null}
    </form>
  );
}

export default Form;
