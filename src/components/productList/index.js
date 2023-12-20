import React from "react";
import styles from "./productList.module.css";

const ProductList = (props) => {
  const { children } = props;
  return <div className={styles.product_list_wrapper}>{children}</div>;
};

export default ProductList;
