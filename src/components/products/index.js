import { Card, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RowLoader } from "../../common/loader";
import ProductList from "../productList";
import ProductCard from "../../common/productCard";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const clothings = products ? products.filter((i) => !i.isAccessory) : [];
  const accessories = products ? products.filter((i) => i.isAccessory) : [];

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
      );
      const data = await res.json();

      setProducts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section className="products">
      <Card sx={{ padding: 4, marginTop: 4, borderRadius: 0 }}>
        <Typography variant="h5">Best of Clothings</Typography>
        {isLoading && <RowLoader />}
        {!isLoading && products && (
          <ProductList>
            {clothings.map((item, index) => (
              <ProductCard productDetails={item} />
            ))}
          </ProductList>
        )}
      </Card>

      <Card sx={{ padding: 4, marginTop: 4, borderRadius: 0, marginBottom: 2 }}>
        <Typography variant="h5">Best of accessories</Typography>
        {isLoading && <RowLoader />}
        {!isLoading && products && (
          <ProductList>
            {accessories.map((item, index) => (
              <ProductCard productDetails={item} />
            ))}
          </ProductList>
        )}
      </Card>
    </section>
  );
};

export default Products;
