import React, { Component } from "react";
import styled from "styled-components";

export const Rodape = styled.main`
  div {
    margin: 0 auto;
    margin-top: 6%;
    background-color: #fffaf0;
    display: flex;
    justify-content: flex-end;
    padding: 4%;
  }

  h4 {
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <Rodape>
        <div>
          <h4> Desafio Props, módulo 2 do curso Vai na Web © BCS 2022</h4>
        </div>
      </Rodape>
    );
  }
}
