import { useState } from "react";

const iconData = [
  {
    name: "angular",
    photoName: "/angularjs.png",
    id: 1,
    level: 70,
    good: "Good at it",
  },
  {
    name: "bootstrap",
    photoName: "/bootstrap.png",
    id: 2,
    level: 65,
    good: "Good at it",
  },
  {
    name: "css-3",
    photoName: "/css-3.png",
    id: 3,
    level: 90,
    good: "Good at it",
  },
  {
    name: "html",
    photoName: "/html.png",
    id: 4,
    level: 95,
    good: "Good at it",
  },
  {
    name: "java",
    photoName: "/java-script.png",
    id: 5,
    level: 85,
    good: "Good at it",
  },
  {
    name: "nodejs",
    photoName: "/nodejs.png",
    id: 6,
    level: 60,
    good: "Good at it",
  },
  {
    name: "physics",
    photoName: "/physics.png",
    id: 7,
    level: 90,
    good: "Good at it",
  },
  {
    name: "typescript",
    photoName: "/typescript.png",
    id: 8,
    level: 75,
    good: "Good at it",
  },
  {
    name: "vuejs",
    photoName: "/vuejs.png",
    id: 9,
    level: 70,
    good: "Good at it",
  },
];

function Stacks() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="stacks">
      <h2>
        My <span className="highlight">Stacks</span>
      </h2>
      <ul>
        {iconData.map((icon, i) => (
          <Icon
            key={icon.id}
            iconObj={icon}
            num={i}
            curHovered={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </ul>
    </div>
  );
}

function Icon({ iconObj, num, curHovered, onHover }) {
  const isHovered = num === curHovered;
  const handleMouseOver = () => {
    onHover(num);
  };
  const handleMouseOut = () => {
    onHover(null);
  };

  return (
    <li
      className={`stacks-icon ${isHovered ? "hovered" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={iconObj.photoName} alt={iconObj.name} />
      <div className="stacks-level">
        <p className="level">{iconObj.level}%</p>
        <p className="good">{iconObj.good}</p>
      </div>
    </li>
  );
}

export default Stacks;
