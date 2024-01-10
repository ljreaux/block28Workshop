import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div id="navbar">
      <Link className="link home" to={"/"}>
        Home
      </Link>
      <Link className="link red" to={"/red"}>
        Red
      </Link>
      <Link className="link blue" to={"/blue"}>
        Blue
      </Link>
      <Link className="link yellow" to={"/yellow"}>
        Yellow
      </Link>
    </div>
  );
}
