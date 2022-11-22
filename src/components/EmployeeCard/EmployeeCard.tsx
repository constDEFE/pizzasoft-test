import React from "react";
import { Employee } from "../../models/models";
import ArrowBack from "../ArrowBack/ArrowBack";
import styles from "./EmployeeCard.module.scss";
import Form from "./Form/Form";

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Информация о сотруднике</h1>
      </header>
      <main className={styles.main}>
        <Form employee={employee} />
      </main>
      <footer className={styles.footer}>
        <ArrowBack />
      </footer>
    </>
  );
};

export default EmployeeCard;
