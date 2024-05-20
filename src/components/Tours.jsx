import React from "react";
import { toursData } from "../data";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <h2>
            featured <span>tours</span>
          </h2>
        </div>

        <div className="section-center featured-center">
          {toursData.map((item) => (
            <article class="tour-card">
              <div class="tour-img-container">
                <img src={item.pic} class="tour-img" alt="" />
                <p class="tour-date">{item.date}</p>
              </div>
              <div class="tour-info">
                <h4>{item.title}</h4>
                <p>{item.info}</p>
                <div class="tour-footer">
                  <p>
                    <span>
                      <i class="fas fa-map"></i>
                    </span>
                    {item.country}
                  </p>
                  <p>{item.days} days</p>
                  <p>from ${item.amount}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tours;
