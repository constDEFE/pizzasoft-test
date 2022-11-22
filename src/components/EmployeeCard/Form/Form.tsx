import React, { useState, MouseEvent } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { validateForm } from "../../../utils/functions";
import { setEmployees } from "../../../redux/slices/employeeSlice";
import StatusCheckbox from "../../UI/Inputs/StatusCheckbox";
import { Employee } from "../../../models/models";
import RoleSelect from "../../UI/Inputs/RoleSelect";
import PhoneInput from "../../UI/Inputs/PhoneInput";
import DateInput from "../../UI/Inputs/DateInput";
import NameInput from "../../UI/Inputs/NameInput";
import styles from "./Form.module.scss";

interface FormProps {
  employee: Employee;
}

const Form = ({ employee }: FormProps) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [name, setName] = useState<string>(employee.name);
  const [nameError, setNameError] = useState<string>("");
  const [phone, setPhone] = useState<string>(employee.phone);
  const [phoneError, setPhoneError] = useState<string>("");
  const [birthday, setBirthday] = useState<string>(employee.birthday);
  const [birthdayError, setBirthdayError] = useState<string>("");
  const [role, setRole] = useState<string>(employee.role);
  const [isArchive, setIsArchive] = useState<boolean>(employee.isArchive);
  const [success, setSuccess] = useState<string>("");

  const dispatch = useAppDispatch();
  const { employees } = useAppSelector((state) => state.employees);

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    setSuccess("");
    setNameError("");
    setPhoneError("");
    setBirthdayError("");

    const error = validateForm(name, phone, birthday);

    if (!error) {
      const newEmployee = {
        name,
        phone,
        birthday,
        role,
        isArchive,
        id: employee.id,
      };

      const index = employees.indexOf(employee);
      const newArr = [...employees];

      newArr[index] = newEmployee;

      dispatch(setEmployees(newArr));
      setDisabled(!disabled);
      setSuccess("Информация о сотруднике успешно обновлена.");
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

  const handleButton = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDisabled(!disabled);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <div>
          <fieldset disabled={disabled} className={styles.field}>
            <label htmlFor="name">Имя</label>
            <NameInput value={name} onChange={setName} />
          </fieldset>
          {nameError && <p className="error">{nameError}</p>}
        </div>
        <div>
          <fieldset disabled={disabled} className={styles.field}>
            <label htmlFor="phone">Номер телефона</label>
            <PhoneInput value={phone} onChange={setPhone} />
          </fieldset>
          {phoneError && <p className="error">{phoneError}</p>}
        </div>
        <div>
          <fieldset disabled={disabled} className={styles.field}>
            <label htmlFor="birthday">Дата рождения</label>
            <DateInput value={birthday} onChange={setBirthday} />
          </fieldset>
          {birthdayError && <p className="error">{birthdayError}</p>}
        </div>
        <fieldset disabled={disabled} className={styles.field}>
          <label htmlFor="role">Должность</label>
          <RoleSelect
            value={role}
            onChange={setRole}
            className={styles.select}
          />
        </fieldset>
        <fieldset disabled={disabled} className={styles.checkboxField}>
          <label htmlFor="status">Статус</label>
          <StatusCheckbox
            checked={isArchive}
            onChange={setIsArchive}
            className={styles.checkbox}
          />
        </fieldset>
        {disabled ? (
          <button
            className={styles.editButton}
            type="button"
            onClick={handleButton}
          >
            Редактировать
          </button>
        ) : (
          <button className={styles.saveButton} onClick={handleSubmit}>
            Сохранить
          </button>
        )}
        {success && <p className={styles.success}>{success}</p>}
      </form>
    </div>
  );
};

export default Form;
