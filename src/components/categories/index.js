import { Card } from "@mui/material";
import React from "react";
import { categories } from "./data";
import "./categories.css";

const Categories = () => {
  return (
    <section className="categories_wrapper container">
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          p: 2,
          borderRadius: 0,
        }}
      >
        {categories.map((item, index) => (
          <div key={index} className="category">
            <img src={item.image} alt={item.label} className="category_img" />
            <p className="category_label">{item.label}</p>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default Categories;
