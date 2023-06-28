import React from "react";
import propTypes from "prop-types";
import "./Title.css";

/**
 * This function is a React component that takes a firstname prop and returns a div with a h1 and a p
 * element.
 * @returns A React component.
 */
function Title({ firstname }) {
  return (
    <div className="titleContainer">
      <h1>
        Bonjour <span>{firstname}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

Title.propTypes = {
  firstname: propTypes.string.isRequired,
};

export default Title;
