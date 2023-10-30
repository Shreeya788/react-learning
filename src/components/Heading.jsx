import PropTypes from "prop-types";
function Heading(props) {
  return <h1>Hello,{props.firstName}</h1>;
}
Heading.propTypes = {
  firstName: PropTypes.string.isRequired,
};
export default Heading;
