import React from "react";

const NewsItem =(props)=> {
 
    let { title, description, ImageUrl, url, author, date ,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolut top-0 transalte-middle badge rounded-pill bg-success" style={{ left:'90%' ,zIndex:'1'}} >{source}
            <span class="visually-hidden">unread </span>
          </span>
          <img src={ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;
