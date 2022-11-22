import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { MaskedRange } from "imask";
import { IMaskInput } from "react-imask";

interface InputMaskProps {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
  required?: boolean;
}

const DateInput = ({ value, required, onChange, disabled }: InputMaskProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (inputRef.current) {
    inputRef.current.required = required ? true : false;
  }

  const blocks = {
    d: {
      mask: MaskedRange,
      placeholderChar: "d",
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: MaskedRange,
      placeholderChar: "m",
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: MaskedRange,
      placeholderChar: "y",
      from: 1900,
      to: 2100,
      maxLength: 4,
    },
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.disabled = disabled ? true : false;
  }, [disabled]);

  return (
    <IMaskInput
      mask={Date}
      lazy={false}
      value={value}
      inputRef={inputRef}
      autofix={true}
      blocks={blocks}
      onAccept={(value, mask) => onChange(value as string)}
    />
  );
};

export default DateInput;
