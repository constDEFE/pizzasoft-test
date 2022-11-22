import React, { useEffect } from "react";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { Routes, Route } from "react-router-dom";
import { setEmployees } from "./redux/slices/employeeSlice";
import Employee from "./pages/Employee";
import Index from "./pages/Index";
import data from "./JSON/employees.json";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setEmployees(data));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/employee/:employeeId" element={<Employee />}>
          <Route path=":employeeId" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
