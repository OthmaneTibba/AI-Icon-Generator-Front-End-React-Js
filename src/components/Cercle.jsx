import styled from "styled-components";

const Cercle = () => {
  return <SCercle></SCercle>;
};

export default Cercle;

const SCercle = styled.div`
  width: 400px;
  height: 400px;

  position: absolute;
  bottom: -150px;
  right: -100px;
  border-radius: 50%;
  background-color: #4077ab;

  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-height: 900px) {
    display: none;
  }
`;
