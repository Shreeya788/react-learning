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
// use below mentioned statement in App.jsx to see the stateExample

// const [word, setWord] = React.useState("Eat");
// function CLickHandler (){
//   setWord("Drink");
// }
{
  /* <StateExample message= {word + " your lemon "} />
      <button onClick={CLickHandler}>
      Click Me!
      </button> */
}
