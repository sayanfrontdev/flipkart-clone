import { Typography } from "@mui/material";
import React from "react";
import styles from "./productCard.module.css";

const ProductCard = (props) => {
  const { productDetails } = props;
  const { preview, name, price } = productDetails;
  return (
    <div className={styles.prodctWrapper}>
      <img src={preview} alt={name} className={styles.productImg} />
      <Typography variant="body1">{name}</Typography>
      <Typography variant="body1" fontWeight={600}>
        Price {price}
      </Typography>
    </div>
  );
};

export default ProductCard;
