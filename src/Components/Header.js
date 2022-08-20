import React from "react";
import styled from "styled-components";

export const Nav = styled.main`
  margin: 0 auto;
  background-color: #fffaf0;
  align-content: center;
  text-align: center;
  padding: 1%;
}

  .title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #DF8453;
  --color-2: #3D8DAE;
  --color-3: #E4A9A8;
}

.title-word-2 {
  --color-1: #DBAD4A;
  --color-2: #ACCFCB;
  --color-3: #17494D;
}

.title-word-3 {
  --color-1: #ACCFCB;
  --color-2: #E4A9A8;
  --color-3: #ACCFCB;
}

.title-word-4 {
  --color-1: #3D8DAE;
  --color-2: #DF8453;
  --color-3: #E4A9A8;
}

@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-1)}
  33%   {color: var(--color-2)}
  65%   {color: var(--color-2)}
  66%   {color: var(--color-3)}
  99%   {color: var(--color-3)}
  100%  {color: var(--color-1)}
}

.container {
  display: grid;
  place-items: center;  
  text-align: center;
  height: 3vw;
}

.title {
  font-family: "Abril fatface", cursive;
  font-weight: 800;
  font-size: 2.5rem;
  text-transform: uppercase;
}

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 6%;
  }

  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
    transition: 0.3s;
  }

  a:hover {
    color: #484848;
    text-shadow: 0px 2px 6px whitesmoke;
  }
`;

export default function Header() {
  return (
    <Nav>
      <div class="container">
        <h1 class="title">
          <span class="title-word title-word-1">Desa</span>
          <span class="title-word title-word-2">fio</span>
          <span class="title-word title-word-3">Pro</span>
          <span class="title-word title-word-4">ps</span>
        </h1>
      </div>
      <div>
        <h2>
          <a href="/">Sobre</a>
        </h2>
        <h2>
          <a
            href="https://www.behance.net/beatrizcardeal"
            alt="Link do portfólio"
          >
            {" "}
            Portfólio{" "}
          </a>
        </h2>
        <h2>
          <a href="https://github.com/" alt="Link do Github">
            {" "}
            Github{" "}
          </a>
        </h2>
      </div>
    </Nav>
  );
}
