import PropTypes from "prop-types";
import "./style.css";

// function Nav(props) {
//   return (
//     <nav className="main-Nav">
//       <ul>
//         <li>{props.first}</li>
//         <li>{props.second}</li>
//       </ul>
//     </nav>
//   );
// }
const Nav = (props) => {
  return (
    <ul>
      <li>{props.first}</li>
      <li>{props.second}</li>
    </ul>
  );
};
Nav.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
};

export default Nav;
