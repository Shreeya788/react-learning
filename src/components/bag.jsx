import PropTypes from "prop-types";

function Bag(props){
    const bag= {
        padding: "20px",
        border : "1px solid gray",
        background : "#fff",
        margin : "20px 0px"
    }
    return(
        <div style ={bag}>
            {props.children}
        </div>
    );
}
Bag.propTypes = {
    children: PropTypes.string.isRequired,
  };

export default Bag;