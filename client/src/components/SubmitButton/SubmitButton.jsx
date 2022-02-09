import { ButtonWrap, Button } from "./SubmitButton.style";

export function SubmitButton({ type, text }) {
  return (
    <ButtonWrap>
      <Button type={type} value={text}>
        {text}
      </Button>
    </ButtonWrap>
  );
}
