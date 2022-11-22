import React, { ChangeEvent } from "react";
import styles from "./SearchField.module.scss";

interface SearchFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField = ({ value, onChange }: SearchFormProps) => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Имя..."
      />
    </form>
  );
};

export default SearchField;
