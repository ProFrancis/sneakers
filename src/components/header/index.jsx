import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="homme">Homme</Link>
        </li>
        <li>
          <Link to="femme">Femme</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
