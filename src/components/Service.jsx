import React from "react";

const Service = (props) => {
  return (
    <>
      <article className="service">
        <span className="service-icon">
          <i className={props.icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{props.title}</h4>
          <p className="service-text">{props.info}</p>
        </div>
      </article>
    </>
  );
};

export default Service;
