import styled from "styled-components";



const AI_Image = (props) => {
  return <SImage src={props.imageUrl} />;
};

const SImage = styled.img`
  width: 200px;
  height: 200px;
  transition: 0.6s ease-in-out;

  @media screen and (max-width: 1200px) {
    width: 120px;
    height: 120px;
    
  
  
  }

  @media screen and (max-width: 900px) {
    width: 80px;
    height: 80px;
  }
`;

export default AI_Image;
