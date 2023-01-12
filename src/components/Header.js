import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 className="header">
        <Link
          to={{
            pathname: "/",
          }}
        >
          SWAPI
        </Link>
      </h1>
    </header>
  );
};

export default Header;
