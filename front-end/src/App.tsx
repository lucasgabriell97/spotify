import React from "react";

import { Header } from "./layouts/Header/Header";
import { AppRoutes } from "./routes";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};
