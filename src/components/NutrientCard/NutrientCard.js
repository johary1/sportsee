import caloIcon from "../../assets/calories-icon.svg";
import proteinIcon from "../../assets/proteines-icon.svg";
import glucidIcon from "../../assets/glucides-icon.svg";
import lipidIcon from "../../assets/lipides-icon.svg";
import propTypes from "prop-types";
import "./NutrientCard.css";

/**
 * A function that takes in two props, item and data, and returns a div with an image, two
 * paragraph: the item concerned (proteins, ...) and the quantity (data).
 *
 * @prop {String} item chemical component
 * @prop {Number} data quantity of item
 * @returns A React component.
 */
function NutrientCard({ item, data }) {
  const ICON_ARRAY = {
    Calories: caloIcon,
    Proteines: proteinIcon,
    Glucides: glucidIcon,
    Lipides: lipidIcon,
  };

  const UNIT_NUTRIENT = {
    Calories: "kCal",
    Proteines: "g",
    Glucides: "g",
    Lipides: "g",
  };

  /* the formatNumber over thousand with a comma*/
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <div className="nutrientCard">
      <img
        src={ICON_ARRAY[item]}
        width="60"
        height="60"
        alt="icone nutriment"
      />
      <div>
        <p>
          {formatNumber(data)}
          {UNIT_NUTRIENT[item]}
        </p>
        <p>
          <span>{item}</span>
        </p>
      </div>
    </div>
  );
}

NutrientCard.propTypes = {
  item: propTypes.string.isRequired,
  data: propTypes.number.isRequired,
};

export default NutrientCard;
