import React from "react";
import ItemListContainer from "./ItemListContainer";
 import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detail/:id" element={<ItemDetailContainer />} />
       
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        {/* <Route path="/detail/:id" element={<ItemDetailContainer />} /> */}
      </Routes>
    </>
  );
};

export default Main;