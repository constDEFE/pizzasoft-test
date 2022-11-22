import React, { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import NewEmployeeForm from "./NewEmployeeForm/NewEmployeeForm";
import SearchField from "./SearchField/SearchField";
import styles from "./EmployeeList.module.scss";
import Table from "./Table/Table";

const EmployeeList = () => {
  const [search, setSearch] = useState<string>("");
  const { employees } = useAppSelector((state) => state.employees);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setSearch(event.target.value);

  return (
    <>
      <header className={styles.header}>
        <h1>Список сотрудников</h1>
        <SearchField value={search} onChange={handleSearchChange} />
        <NewEmployeeForm />
      </header>
      <main className={styles.main}>
        <Table searchQuery={search} data={employees} />
      </main>
    </>
  );
};

export default EmployeeList;
