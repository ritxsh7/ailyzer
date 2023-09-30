import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { linkIcon, loader, tick, copy } from "../assets";
import "../features/article";

import { articleApi, useLazyGetSummaryQuery } from "../features/article";
import History from "./History";

const Summary = () => {
  //states
  // 1. current article-------------------------------
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  //2. all articles-------------------------------
  const [articleList, setArticleList] = useState([]);

  // 3. clipboard----------------------------------
  const [copyText, setCopyText] = useState("");

  const handleChange = (e) => {
    setArticle({ ...article, url: e.target.value });
  };

  //4.openHistory-------------------------------------
  const [isOpen, setIsOpen] = useState(false);

  //getSummary()---------------------------
  const [getSummary, { isFetching, error }] = useLazyGetSummaryQuery(
    article.url
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsOpen(false);

    const existingArticle = articleList.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);

    try {
      const res = await getSummary({ articleUrl: article.url });

      const newArticle = { ...article, summary: res.data.summary };
      setArticle(newArticle);

      const newArticleList = [...articleList, newArticle];
      setArticleList(newArticleList);
      localStorage.setItem("articles", JSON.stringify(newArticleList));
    } catch (err) {
      alert(err.message);
    }
  };

  //handleCopy()
  const handleCopy = useCallback(
    (copyUrl) => {
      setCopyText(copyUrl);
      navigator.clipboard.writeText(copyText);
      alert("Copied to clipboard !");
    },
    [copyText]
  );
  //useEffect() to fetch the articles from local storage
  useEffect(() => {
    const getArticles = JSON.parse(localStorage.getItem("articles"));

    if (getArticles) {
      setArticleList(getArticles);
    }
  }, []);

  // console.log(articleList);
  // const length = articleApi.length;
  console.log(copyText);

  return (
    <div className="summary">
      <div className="searchbox">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <img src={linkIcon} alt="" />
            <input
              type="url"
              placeholder="Enter URL of article"
              required
              value={article.url}
              onChange={handleChange}
              onFocus={() => {
                setCopyText(copyText);
                setIsOpen(true);
              }}
            />
          </div>
          <button type="button" onClick={handleSubmit}>
            Summarize
          </button>
        </form>
      </div>

      {isOpen && (
        <History
          handleCopy={handleCopy}
          articleList={articleList}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}

      <section>
        {isFetching ? (
          <img src={loader} className="loader"></img>
        ) : (
          article.summary && (
            <div className="summary-output">
              <h1>
                Article <span style={{ color: "whitesmoke" }}>Summary...</span>
              </h1>
              <p>{article.summary}</p>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Summary;
