import styled from "styled-components";
import { colors } from "../../util/colors";

export const HomeFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const HomeFlexP = styled.p`
  font-family: ${colors.FONTFAMILY_MONTSERRAT};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${colors.BLACK};

  @media (max-width: 768px) {
    font-size: 16px;
  }

`; 

























