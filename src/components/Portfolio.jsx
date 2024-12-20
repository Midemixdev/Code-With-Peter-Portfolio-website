import { useState } from "react";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";

const PortfolioData = [
  {
    id: 1,
    image: "/jsoh-pic.png",
    name: "tour with josh",
    quote:
      "Travel Simplified: Personalized solutions, easy bookings, and 24/7 support.",
    link: "https://tour-with-josh.vercel.app/",
  },

  {
    id: 2,
    image: "/portfolioImage/quize.png",
    name: "Quiz Mastery",
    quote:
      "A responsive quiz platform utilizing modern web technologies for immersive learning experiences.",
    link: "https://quiz-mastery.vercel.app/",
  },
];

function Portfolio() {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="portfolio" id="portfolio">
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <h2>
          <span className="highlight">Rec</span>
          <span className="highlight-2">ent</span> Works
        </h2>
      </ScrollAnimation>
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
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
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
    </ScrollAnimation>
  );
}

export default Portfolio;
