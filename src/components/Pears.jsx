import PropTypes from "prop-types";

function Pears(props){
    return(
        <h2>
            I don&apos;t like pears but my friend, {props.friend}, does
        </h2>
    );
}
Pears.propTypes = {
    friend: PropTypes.string.isRequired,
  };

  export default Pears;