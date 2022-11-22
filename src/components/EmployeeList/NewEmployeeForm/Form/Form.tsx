import React, { useState, FormEvent } from "react";
import { validateForm } from "../../../../utils/functions";
import StatusCheckbox from "../../../UI/Inputs/StatusCheckbox";
import { Employee } from "../../../../models/models";
import PhoneInput from "../../../UI/Inputs/PhoneInput";
import RoleSelect from "../../../UI/Inputs/RoleSelect";
import NameInput from "../../../UI/Inputs/NameInput";
import DateInput from "../../../UI/Inputs/DateInput";
import styles from "./Form.module.scss";

interface FormProps {
  onSubmit: (newEmployee: Employee) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const [name, setName] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [birthday, setBirthday] = useState<string>("");
  const [birthdayError, setBirthdayError] = useState<string>("");
  const [role, setRole] = useState<string>("driver");
  const [isArchive, setIsArchive] = useState<boolean>(false);

  const clearFields = (): void => {
    setName("");
    setPhone("");
    setBirthday("");
    setRole("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setNameError("");
    setPhoneError("");
    setBirthdayError("");

    const error = validateForm(name, phone, birthday);

    if (!error) {
      const employee = {
        id: Date.now(),
        birthday,
        isArchive,
        name,
        phone,
        role,
      };

      onSubmit(employee);
      clearFields();
    } else {
      switch (error.type) {
        case "name":
          return setNameError(error.message);
        case "phone":
          return setPhoneError(error.message);
        case "birthday":
          return setBirthdayError(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <fieldset className={styles.field}>
          <label htmlFor="name">Имя</label>
          <NameInput onChange={setName} value={name} />
        </fieldset>
        {nameError && <p className="error">{nameError}</p>}
      </div>
      <div>
        <fieldset className={styles.field}>
          <label htmlFor="phone">Номер телефона</label>
          <PhoneInput onChange={setPhone} value={phone} />
        </fieldset>
        {phoneError && <p className="error">{phoneError}</p>}
      </div>
      <div>
        <fieldset className={styles.field}>
          <label htmlFor="birthday">Дата рождения</label>
          <DateInput onChange={setBirthday} value={birthday} />
        </fieldset>
        {birthdayError && <p className="error">{birthdayError}</p>}
      </div>
      <fieldset className={styles.field}>
        <label htmlFor="role">Должность</label>
        <RoleSelect onChange={setRole} value={role} />
      </fieldset>
      <fieldset className={styles.checkboxField}>
        <label htmlFor="status">Статус</label>
        <StatusCheckbox
          className={styles.checkbox}
          checked={isArchive}
          onChange={setIsArchive}
        />
      </fieldset>
      <button className={styles.addButton} type="submit">
        Добавить
      </button>
    </form>
  );
};

export default Form;
