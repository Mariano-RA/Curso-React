import React from "react";
import { useState } from "react";
import { AddCategory, GifGrid } from "./componets";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Random"]);

  const onAddCategory = (newCategory) => {
    const arregloMayus = categories.map((category) => {
      return category.toUpperCase();
    });

    if (arregloMayus.includes(newCategory.toUpperCase())) {
      return;
    }

    setCategories([newCategory, ...categories]);
    // setCategories( cat => [...cat, category])
  };

  return (
    <>
      <h1 className="titulo">BUSCADOR DE GIFs</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
