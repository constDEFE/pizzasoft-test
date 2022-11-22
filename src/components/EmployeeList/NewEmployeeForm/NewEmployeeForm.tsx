import React, { useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { setEmployees } from "../../../redux/slices/employeeSlice";
import { RiCloseFill } from "react-icons/ri";
import { Employee } from "../../../models/models";
import styles from "./NewEmployeeForm.module.scss";
import Form from "./Form/Form";

const NewEmployeeForm = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { employees } = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();

  const handleButton = (): void => setOpen(!open);

  const handleSubmit = (newEmployee: Employee): void => {
    dispatch(setEmployees([...employees, newEmployee]));
    handleButton();
  };

  return (
    <>
      <button className={styles.addButton} onClick={handleButton}>Добавить</button>
      {open ? (
        <div onClick={handleButton} className={styles.background}>
          <dialog
            onClick={(event) => event.stopPropagation()}
            open={open}
            className={styles.modal}
          >
            <button onClick={handleButton} className={styles.closeButton}>
              <RiCloseFill size={28} />
            </button>
            <Form onSubmit={handleSubmit} />
          </dialog>
        </div>
      ) : null}
    </>
  );
};

export default NewEmployeeForm;
