import styled from "styled-components";

const ButtonStyle = styled.button`
  background: transparent;
  border-radius: 4px;
  border: 2px solid darkgoldenrod;
  color: darkred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  
  ${props => props.newColor}
  `

