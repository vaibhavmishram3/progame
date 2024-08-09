import React from "react";

function Portfolio() {
  const data = [
    { img: "./videoimg/gungirl.jpg 5x", h2: "BATTLE OF BRAVES", p: "Designer" },
    { img: "./videoimg/sniper1.webp 5x", h2: "BARLOG", p: "Designer" },
    { img: "./videoimg/dark.webp 5x", h2: "FLAGSHIP MOUNTAIN", p: "Designer" },
    { img: "./videoimg/cat.webp 5x", h2: "TOKI TOP", p: "Designer" },
    { img: "./videoimg/car.png 5x", h2: "AUTOCAT", p: "Designer" },
    { img: "./videoimg/space.webp 5x", h2: "MASTER LEAGUE", p: "Designer" },
  ];
  return (
    <>
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="conn">
          {data.map((elem, index) => (
            <div key={index} className="box">
              <div className="img">
                <img src={elem.img} alt="" />
              </div>
              <div className="text">
                <h2>{elem.h2}</h2>
                <p>{elem.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
