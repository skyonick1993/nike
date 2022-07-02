import React from "react";
import { Footer } from "./partials/Footer";
import { Header } from "./partials/Header";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
