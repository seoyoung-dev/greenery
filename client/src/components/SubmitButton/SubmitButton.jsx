import { ButtonWrap, Button } from "./SubmitButton.style";

export default function SubmitButton({ type, text }) {
  return (
    <ButtonWrap>
      <Button type={type} value={text}>
        {text}
      </Button>
    </ButtonWrap>
  );
}
