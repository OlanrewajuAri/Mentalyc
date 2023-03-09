import styled from "styled-components";
import { colors } from "../../util/colors";

export const UploadComponentH3 = styled.h3`
  font-family: ${colors.FONTFAMILY_POPPINS};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${colors.BLACK};

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const ButtonUpload = styled.button`
  background: ${colors.GRADIENT};
  border-radius: 8px;

  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

export const ButtonP = styled.p`
  font-family: ${colors.FONTFAMILY_MONTSERRAT};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.WHITE};
  margin: 0px;
  padding: 0.5rem;
  width: 100%;
`;

export const StyledModalDialog = styled.div`
  .modal-dialog {
    margin-top: 5rem;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  outline: 0;
`;
export const ModalHeader = styled.div`
  text-align: right;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border: none;

  button {
  }
`;

export const ModalH5 = styled.h5`
  font-family: ${colors.FONTFAMILY_POPPINS};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${colors.BLACK};
`;

export const Modalp = styled.p`
  font-family: ${colors.FONTFAMILY_MONTSERRAT};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: ${colors.GRAY};
`;
export const ModalBody = styled.div`
  border: none;

  form {
    text-align: center;
    width: 100%;
  }

  select {
    width: 90%;
    padding: 0.5rem;
    background: ${colors.LIGHT_GRAY};
    border-radius: 8px;
    font-family: ${colors.FONTFAMILY_MONTSERRAT};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.BLACK};
  }

  input[type="text"] {
    margin-top: 4rem;
    background: ${colors.LIGHT_GRAY};
    border-radius: 8px;
    width: 90%;
    font-family: ${colors.FONTFAMILY_MONTSERRAT};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${colors.BLACK};
  }
`;

export const ModalFooter = styled.div`
  border: none;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 1rem;

  button {
    border-radius: 8px;
    background: ${colors.GRADIENT};
  }
`;

export const UploadTask = styled.div`
  display: flex;
  margin-top: 5rem;
  background: ${colors.WHITE};
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  align-items: center;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  @media (max-width: 768px) {
    margin-top: 10rem;
    border-radius: 8px;
  }
`;
export const UploadLength = styled.div`
  background: ${colors.PINK};
  font-family: ${colors.FONTFAMILY_MONTSERRAT};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${colors.WHITE};
  border-radius: 50%;
  padding: 0px 8px;
  min-width: 8px;
  margin-right: 10px;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-right: 20px;
  }

  align-items: center; 
  display: flex;

`;
export const UploadLengthP = styled.p`
  font-family: ${colors.FONTFAMILY_MONTSERRAT};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: ${colors.BLACK};


  margin: 0; 
  align-items: center; 
  display: flex; 

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
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

  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 16px;
  }
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
  padding-left: 30px;
  padding-right: 30px;
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

  @media (max-width: 768px) {
    height: 15px;
  }
`;
export const ProgressBar = styled.div`
  height: 100%;
  background-color: ${colors.GREEN};
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 8px;
`;

