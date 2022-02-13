import { Link } from "react-router-dom";
import { Item } from "./SimpleItem.style";

export default function SimpleItem({ to, title, handleLogout }) {
  return (
    <Item key={(title, to)}>
      {handleLogout ? (
        <Link to={to} onClick={() => handleLogout()}>
          {title}
        </Link>
      ) : (
        <Link to={to}>{title}</Link>
      )}
    </Item>
  );
}
