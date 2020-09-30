import React from "react";

function Image({ image }) {
  const { largeImageURL, likes, previewURL, tags, views } = image;

  return (
    <div className="col-12  col-sm-6 col-md-4 col-lg-3 mb-4">
      {" "}
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
        <div className="card-body">
          <div className="card-text">{likes} Me Gusta</div>
          <div className="card-text mt-1">{views} Vistas</div>
          <div className="card-footer">
            <a
              href={largeImageURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block"
            >
              Ver Imagen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Image;
