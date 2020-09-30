import React, { useState, useEffect } from "react";
import Form from "./components/Form";

import "./App.css";
import ImageList from "./components/ImageList";

function App() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const apiRequest = async () => {
      if (search === "") {
        return;
      }

      const imagesPerPage = 25;
      const key = "18522339-f87e6af0793b479a079ab3aa0";
      const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`;

      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setImages(result.hits);

      const calculateTotalPages = Math.ceil(result.totalHits / imagesPerPage);
      setTotalPages(calculateTotalPages);

      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    //Call the function
    apiRequest();
  }, [search, actualPage]); //Dependencies

  //Previous Function
  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if (newActualPage === 0) return;
    setActualPage(newActualPage);
  };

  //Next Function
  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if (newActualPage > totalPages) return;
    setActualPage(newActualPage);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">
          <p className=" lead text-center">Buscador de Imágenes</p>
          <Form setSearch={setSearch} />
        </div>
        <div className="row justify-content-center">
          <ImageList images={images} />
          {actualPage === 1 ? null : (
            <button className="bbtn btn-info mr-1 p-1" onClick={previousPage}>
              Anterior &laquo;
            </button>
          )}
          {actualPage === totalPages ? null : (
            <button className="bbtn btn-info mr-1 p-1" onClick={nextPage}>
              Siguiente &raquo;
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
