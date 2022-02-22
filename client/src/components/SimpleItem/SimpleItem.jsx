import { NavLink } from "react-router-dom";
import { Item } from "./SimpleItem.style";

export default function SimpleItem({ to, title, handleLogout }) {
  function handleActive({ isActive }) {
    if (isActive) {
      return "active";
    }
  }
  return (
    <Item>
      {handleLogout ? (
        <NavLink to={to} onClick={() => handleLogout()}>
          {title}
        </NavLink>
      ) : (
        <NavLink className={handleActive} to={to}>
          {title}
        </NavLink>
      )}
    </Item>
  );
}
