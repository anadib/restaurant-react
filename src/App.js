import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./themes";

import AplicationContext from "./contexts/aplicationContext";

import Routing from "./Routing";
import store from "./store";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cartList, setcartList] = useState([]);
  const [sellectedItem, setSellectedItem] = useState({});

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme.default}>
        <AplicationContext.Provider
          value={{
            isLoading,
            setIsLoading,
            cartList,
            setcartList,
            sellectedItem,
            setSellectedItem,
          }}
        >
          <GlobalStyle />
          <Routing />
        </AplicationContext.Provider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
