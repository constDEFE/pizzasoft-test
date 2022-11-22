import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import styles from "./ArrowBack.module.scss";
import React from "react";

const ArrowBack = () => {
  const navigate = useNavigate();
  const handleClick = (): void => navigate("/");

  return (
    <div className={styles.container}>
      <TiArrowBackOutline
        onClick={handleClick}
        size={48}
        className={styles.arrow}
      />
    </div>
  );
};

export default ArrowBack;
