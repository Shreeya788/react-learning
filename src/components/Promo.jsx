import PropTypes from "prop-types";
import "./style.css";

function Promo(props) {
  return (
    <div className="promo-section">
      <div>
        <h1>{props.heading}</h1>
      </div>
      <div>
        <h2>{props.promoSubHeading}</h2>
      </div>
    </div>
  );
}
Promo.propTypes = {
  heading: PropTypes.string.isRequired,
  promoSubHeading: PropTypes.string.isRequired,
};
export default Promo;
