import React from "react"
import { Wrapper } from "./style"
import styled from "styled-components"
import { transparentize } from "polished"

export const Footer = styled(({ ...styleProps }) => {
  return (
    <footer {...styleProps}>
      <Wrapper>
      <br/>
      +52 552256 0093 || biodesarrollos.mx@protonmail.com
      <br/>
      © {new Date().getFullYear()} - BIODESARROLLOS
      </Wrapper>
    </footer>
  )
})`
  font-size: 0.8rem;
  line-height: 3rem;
  text-align: right;
  height: 3rem;
  background-color: ${props =>
    transparentize(0.97, props.theme.color.foreground)};
  box-shadow: inset 0 1px 0
    ${props => transparentize(0.95, props.theme.color.foreground)};
`
