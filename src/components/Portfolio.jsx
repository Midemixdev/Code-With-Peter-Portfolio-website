import { useState } from "react";

const PortfolioData = [
  {
    id: 1,
    image: "/portfolioImage/quize.png",
    name: "Quiz Mastery",
    quote:
      "A responsive quiz platform utilizing modern web technologies for immersive learning experiences.",
    link: "https://quiz-mastery.vercel.app/",
  },

  {
    id: 2,
    image: "/portfolioImage/guess.png",
    name: "Digit Hunt",
    quote: "A thrilling number-finding game that tests speed and accuracy",
    link: "https://digit-hunt.vercel.app/",
  },
];

function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="portfolio" id="portfolio">
      <h2>
        My <span className="highlight">Rec</span>
        <span className="highlight-2">ent</span> Works
      </h2>
      <ul>
        {PortfolioData.map((data, i) => (
          <List
            key={data.id}
            dataObj={data}
            num={i}
            curHovered={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </ul>
    </div>
  );
}
function List({ dataObj, num, curHovered, onHover }) {
  const isHovered = num === curHovered;
  const handleMouseOver = () => {
    onHover(num);
  };
  const handleMouseOut = () => {
    onHover(null);
  };

  return (
    <li
      className={`portfolio-list ${isHovered ? "hovered" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovered ? (
        <div className="portfolio-el">
          <p className="quote">{dataObj.quote}</p>
          <a href={dataObj.link}>
            <button className="btn-sub">View site &gt;</button>
          </a>
        </div>
      ) : (
        <div className="portfolio-image">
          <img src={dataObj.image} alt={dataObj.name} />
        </div>
      )}
    </li>
  );
}

export default Portfolio;
