import React from "react";
import styled from "styled-components";
import Beatriz from "./Image/beatriz.jpg";

export const Body = styled.main`
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 0.8rem;
  }

  figure {
    margin-top: 8%;
    margin-bottom: 3%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 500px;
    border-radius: 10px;
  }
`;

export default function Main(props) {
  return (
    <Body>
      <figure>
        <img src={Beatriz} alt="" />
      </figure>
      <div>
        <h3>
          {props.nome} {props.idade} {props.estudando}
        </h3>
      </div>
    </Body>
  );
}
