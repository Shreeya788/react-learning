import PropTypes from "prop-types";

function Apples(props){
    return(
        <>
        <div>
            <h2>These apples are: {props.color}</h2>
        </div>
        <div>
            <h3>
                There are {props.number} apples.
            </h3>
        </div>
        </>
    );
}
Apples.propTypes = {
    color: PropTypes.string.isRequired,
    number : PropTypes.number.isRequired,
  };


export default Apples;