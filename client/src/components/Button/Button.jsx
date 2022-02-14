import { StyledButton } from "./Button.style";

export default function Button({ handleClick, className, children }) {
  return (
    <StyledButton className={className} onClick={handleClick}>
      {children}
    </StyledButton>
  );
}
