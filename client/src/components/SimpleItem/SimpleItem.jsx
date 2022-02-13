import { Link } from "react-router-dom";
import { Item } from "./SimpleItem.style";

export default function SimpleItem({ to, title, borderTop, handleLogout }) {
  return (
    <Item key={(title, to)} borderTop={borderTop}>
      <Link to={to} onClick={() => handleLogout()}>
        {title}
      </Link>
    </Item>
  );
}
