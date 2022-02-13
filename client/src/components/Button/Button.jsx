import { StyledButton } from "./Button.style";

export default function Button({ handleClick, children }) {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}
