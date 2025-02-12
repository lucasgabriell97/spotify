import React from "react";

import { Header } from "./layouts/Header/Header";
import { Main } from "./layouts/Main/Main";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
