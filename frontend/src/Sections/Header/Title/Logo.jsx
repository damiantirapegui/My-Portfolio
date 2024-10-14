import "./Logo.css";
import "../../../index.css";
import { Nav } from "../Nav/Nav";

export function Logo() {
  return (
    <div className="logo-container" id="home">
      <h3 className="logo">Jonathan</h3>
      <Nav />
    </div>
  );
}
