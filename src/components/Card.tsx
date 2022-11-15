import { FC, ReactElement, useState } from "react";

import "./Card.scss";
import "../App.scss";

const Card: FC<{
  title: string;
  subtitle: string;
  description: string;
  src: string;
}> = ({ title, subtitle, description, src }): ReactElement => {
  const [active, setActive] = useState(false);

  type Grid = {
    column: string;
    row: string;
  };

  const gridMap: Record<string, Grid> = {
    valtech_: { column: "1 / 5", row: "1" },
    ROME: { column: "1 / 3", row: "2" },
    BERLIN: { column: "3 / 4", row: "2" },
    MADRID: { column: "4 / 5", row: "2" },
    PARIS: { column: "1 / 2", row: "3" },
    AMSTERDAM: { column: "2 / 3", row: "3" },
    LONDON: { column: "3 / 5", row: "3" },
  };

  return (
    <div
      style={{
        gridColumn: gridMap[subtitle].column,
        gridRow: gridMap[subtitle].row,
      }}
      className={`Card${active ? " active" : ""}`}
      onClick={() => setActive((prev) => !prev)}
    >
      <img src={src} className="img" />
      <div className="details">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <p className="description">{description}</p>
      <button
        className="button"
        onClick={(evt) => {
          evt.stopPropagation();
          setActive(false);
        }}
      >
        Explore More
      </button>
      <div className="overlay" />
    </div>
  );
};
export default Card;
