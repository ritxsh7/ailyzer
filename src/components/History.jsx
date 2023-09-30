import React from "react";
import { copy } from "../assets";

const History = ({ articleList, handleCopy, isOpen, setIsOpen }) => {
  return (
    <div className="history">
      <div className="history-head">
        <h3>Recent searches</h3>
        <div onClick={() => setIsOpen(false)}>
          <ion-icon name="close-circle" className="icon"></ion-icon>
        </div>
      </div>
      {articleList ? (
        articleList
          .slice(-3)
          .reverse()
          .map((item) => (
            <div className="past-url" key={item.url}>
              <div onClick={() => handleCopy(item.url)}>
                {/* <img src={copy} /> */}
              </div>
              <p>{item.url}</p>
            </div>
          ))
      ) : (
        <center>
          <h3>Loading...</h3>
        </center>
      )}
    </div>
  );
};

export default History;
