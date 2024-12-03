import React from "react";
import styled from "styled-components";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => {
  return (
    <Wrapper {...delegated}>
      <Text>{children}</Text>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  /*
    Text slide-up effect
  */
  overflow: hidden;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(0);
  transition: transform 500ms;
  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 250ms;
      transform: translateY(-100%);
    }
  }
`;

const HoverText = styled(Text)`
  position: absolute;
  /* top: 100%; */
  left: 0;
  width: 100%;
  height: 100%;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;
