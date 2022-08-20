import React, { Component } from "react";
import Header from "./Components/Header.js";
import Main from "./Components/Main.js";
import Footer from "./Components/Footer.js";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Main
          nome="O meu nome é Beatriz,"
          idade={23}
          estudando="e estou estudando desenvolvimento front-end"
        />
        <Footer />
      </>
    );
  }
}
