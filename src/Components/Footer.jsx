import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <NavLink to={"/"} className={"color home"}></NavLink>
      <NavLink to={"/red"} className="color red"></NavLink>
      <NavLink to={"/blue"} className="color blue"></NavLink>
      <NavLink to={"/yellow"} className="color yellow"></NavLink>
    </div>
  );
}
