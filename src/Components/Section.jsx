import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function Section() {
  const data = [
    {
      num: "01",
      nump: "FIRST-PERSON SHOOTER",
      img: "/videoimg/sniper1.webp 5x",
      texth2: "BARLOG",
      texth3: "DESIGNER",
      p: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      num: "02",
      nump: "QUEST",
      img: "/videoimg/dark.webp 5x",
      texth2: "FLAGSHIP MOUNTAIN",
      texth3: "INDEPENDENT",
      p: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      num: "03",
      nump: "CASUAL GAME",
      img: "/videoimg/bee.webp",
      texth2: "TOKI TOP",
      texth3: "DESIGNER",
      p: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ];
  const card = [
    {
      img: "/videoimg/robo.webp 5x",
      name: "ZORD",
      p: "From Master League",
    },
    {
      img: "/videoimg/magic.webp 5x",
      name: "THE SCARLET SORCERER",
      p: "From Flagship Mountain",
    },
    {
      img: "/videoimg/girl.webp 5x",
      name: "KATANNA",
      p: "From Battle of the Braves",
    },
  ];
  const video = [
    "/videoimg/file1.mp4",
    "/videoimg/file2.mp4",
    "/videoimg/file3.mp4",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % video.length);
    }, 10000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [video.length]);
  return (
    <>
      <div className="Section">
        <video id="fade" key={currentIndex} autoPlay muted loop>
          <source src={video[currentIndex]}></source>
        </video>
        <div className="left" id="div">
          <h1>GAME DESIGNER</h1>
          <h2>KIM TATE</h2>
          <h1>
            I'm a California based cross platform game designer that specializes
            in character & level design.
          </h1>
        </div>
        <div className="right" id="div">
          <div className="inright">
            <div className="img"></div>
            <div className="text">
              <div className="up">
                <h1>My Latest Work</h1>
                <p>Battle of Braves | PlayStation | 2035</p>
              </div>
              <div className="btn">View Game</div>
            </div>
          </div>
        </div>
      </div>
      <div className="SecPortfolio">
        <h1>My Portfolio</h1>
        {data.map((elem, index) => (
          <div key={index} className="secEl">
            <div className="right">
              <h2>{elem.num}</h2>
              <p>{elem.nump}</p>
            </div>
            <div className="left">
              <div className="img">
                <img src={elem.img} alt="" />
              </div>
              <div className="text">
                <h2>{elem.texth2}</h2>
                <h3>{elem.texth3}</h3>
                <p>{elem.p}</p>
                <button>View Game</button>
              </div>
            </div>
          </div>
        ))}
        <div id="btn">
        <a href="/"><h2>View All Games</h2></a>
        </div>
      </div>
      <div className="Characters">
        <h1>CHARACTERS</h1>
        <div className="imgs">
          {card.map((elem, index) => (
            <div className="box">
              <div className="top">
                <img src={elem.img} alt="" />
              </div>
              <div className="text">
                <h2>{elem.name}</h2>
                <p>{elem.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div id="btn">
        <a href="/"><h2>VIEW ALL CHARACTERS</h2></a>
        </div>
      </div>
    </>
  );
}

export default Section;
