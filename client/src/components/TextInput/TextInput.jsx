import { InputWrap, Input, Label } from "./TextInput.style";

export default function TextInput({
  title,
  type,
  placeholder,
  autoComplete,
  setState,
}) {
  return (
    <InputWrap>
      {title && <Label>{title}</Label>}
      <Input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={event => setState(event.target.value)}
      ></Input>
    </InputWrap>
  );
}
