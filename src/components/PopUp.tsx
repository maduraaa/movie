import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
const PopUp: React.FC<{
    movie?: any;
    onClose?: () => void;
    index?: any
}> = ({
    movie,
    onClose,
    index
}) => {
        return (
            <PopUpWrapper>
                <PopUpContent>
                    <CloseBtn onClick={onClose}><GrClose /></CloseBtn>
                </PopUpContent>
            </PopUpWrapper>
        )
    }

const PopUpWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const PopUpContent = styled.div`
  height: 60vh;
  width: 60vw;
  border-radius: 10px;
  background-color: #fff;
  z-index: 10;
  padding: 20px;
`;
const CloseBtn = styled.button`
    background-color: transparent;
    border: 0px;
    outline: none;
    margin-left: auto;
    display: block;
    font-weight: bold;
    font-size: 16px;
    color: gray;
        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
`;

export default PopUp;
