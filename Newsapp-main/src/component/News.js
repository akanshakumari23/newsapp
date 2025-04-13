import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    
    let url = `https://newsapi.org/v2/everything?q=${props.category}&apiKey=8c338c5ce6094275a5d0377a12a53158&page=${page}&pageSize=21`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
  };

  useEffect(() => {
    document.title=`${props.category} -NewsApp`;
    updateNews();
  }, [page]);

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const handlePreviousClick = () => {
    setPage(page - 1);
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{marginTop:'70px'}}>News Headlines on {props.category}</h1>
      {loading && <Loader />}
      <div className="row">
        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  ImageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  }
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>

      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePreviousClick}
        >
          {" "}
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 21)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};


News.defaultProps = {
  category: "general",
  setProgress: () => {}, 
};

News.propTypes = {
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
