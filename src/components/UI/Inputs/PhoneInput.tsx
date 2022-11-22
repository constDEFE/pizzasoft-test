import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { IMaskInput } from "react-imask";

interface InputMaskProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  required?: boolean;
}

const PhoneInput = ({ value, required, onChange, disabled }: InputMaskProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (inputRef.current) {
    inputRef.current.required = required ? true : false;
    inputRef.current.type = "tel";
  }

  useEffect(() => {
    if (inputRef.current) inputRef.current.disabled = disabled ? true : false;
  }, [disabled]);

  return (
    <IMaskInput
      mask={"+{7} (000) 000-0000"}
      lazy={false}
      placeholderChar="_"
      value={value}
      inputRef={inputRef}
      autofix={true}
      onAccept={(value, mask) => onChange(value as string)}
    />
  );
};

export default PhoneInput;
