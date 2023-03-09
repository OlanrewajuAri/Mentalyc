import styled from "styled-components";
import { colors } from "../../util/colors";

export const UploadTask = styled.div`
  display: flex;
  margin-top: 5rem;
  background: ${colors.WHITE};
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  align-items: center;
`;


export const UploadLength = styled.div`
  background: ${colors.PINK};
  font-family: ${colors.FONTFAMILY_MONTSERRAT};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${colors.WHITE};
  border-radius: 50%;
  padding: 6px 10px;
  min-width: 16px; /* set the same value as the padding */
  margin-right: 10px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UploadLengthP = styled.p`
  font-family: ${colors.FONTFAMILY_MONTSERRAT};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${colors.BLACK};
  margin-top: 0.7rem;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${colors.WHITE};
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-family: ${colors.FONTFAMILY_MONTSERRAT};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.BLACK};
`;

export const StyledListHeader = styled(StyledListItem)`
  background-color: none;
  font-weight: 700;
  box-shadow: none;
  border-radius: 0px;

  // padding-right: 30px;
`;

export const StyledListRow = styled(StyledListItem)`
  background-color: ${(props) =>
    props.index % 2 === 0 ? colors.WHITE : colors.WHITE};
  //   padding-left: 30px;
  //   padding-right: 30px;
`;

export const StyledListCell = styled.div`
  width: ${(props) => props.width || "auto"};
  text-align: ${(props) => props.align || "left"};
  border-radius: 8px;
`;
export const StyledListCell1 = styled.div`
  width: ${(props) => props.width || "auto"};
  text-align: ${(props) => props.align || "left"};
`;

export const StyledDeleteButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
export const Progress = styled.div`
  height: 20px;
  background-color: #b2b2b2;
  position: relative;
  margin-top: 5px;
  border-radius: 8px;
  overflow: hidden;
`;
export const ProgressBar = styled.div`
  height: 100%;
  background-color: ${colors.GREEN};
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8px;
`;
