import React, { MouseEvent, useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { DropdownOption } from "../../../models/models";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
  label: string;
  options: DropdownOption[];
  onChange?: Function;
}

const Dropdown = ({ label, options, onChange }: DropdownProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleOpen = (): void => setIsActive(!isActive);
  const close = (): void => setIsActive(false);

  const select = (
    event: MouseEvent<HTMLDivElement>,
    option: DropdownOption
  ): void => {
    event.stopPropagation();
    close();

    if (onChange) {
      onChange(option.value);
    }
  };

  return (
    <div className={styles.select} onMouseLeave={close} onClick={handleOpen}>
      <div className={styles.label}>
        <p className={styles.text}>{label}</p>
        <BsCaretDownFill />
      </div>
      {isActive && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={(event) => select(event, option)}
            >
              <p>{option.label}</p>
            </div>
          ))}
          <div
            className={styles.option}
            onClick={(event) => select(event, { label, value: "" })}
          >
            <p>Сбросить</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
