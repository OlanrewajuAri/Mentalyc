import styled from "styled-components";
import { colors } from "../../util/colors";

const media = {
  tablet: `@media only screen and (min-width: 768px)`,
  desktop: `@media only screen and (min-width: 1024px)`,
};

export const NavbarMain = styled.nav``;

export const Navbarparent = styled.div`
  display: flex;
  background: ${colors.WHITE};
  @media (max-width: 768px) {
    justify-content: center;

    img{
      height: 30px;
    }
  }
`;
export const NavbarBottom = styled.div`
  border-bottom: 2px solid ${colors.WINE};
  padding-top: 1.5rem;

  @media (max-width: 768px) {
    padding-top: 1rem;
  }
`;
