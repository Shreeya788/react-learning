import PropTypes from "prop-types";

function StateExample(props) {
  return (
    <div>
      <h1>{props.message}</h1>
    </div>
  );
}
StateExample.propTypes = {
  message: PropTypes.string.isRequired,
};
export default StateExample;
