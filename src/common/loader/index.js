import { Skeleton } from "@mui/material";
import React from "react";
import style from "./loader.module.css";

console.log(style);
const Loader = () => {
  return <Skeleton height={300} width={200} />;
};

const RowLoader = () => {
  return (
    <div className={style.loaderContainer}>
      {new Array(6).fill(0).map((i, ind) => (
        <Loader key={ind} />
      ))}
    </div>
  );
};

export { RowLoader };

export default Loader;
