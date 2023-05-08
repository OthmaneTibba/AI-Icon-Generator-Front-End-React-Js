import styled from "styled-components";


const StyleCard = (props) => {

 if(props.selected){
     return <SelectedStyled >
         <img src={props.img} alt={"style image"}/>
         <p className="style-name">{props.name}</p>
     </SelectedStyled>
 }else{
     return <StyledStyleCard >
         <img src={props.img} alt={"style image"}/>
         <p className="style-name">{props.name}</p>
     </StyledStyleCard>
 }
}



const SelectedStyled = styled.div`
  margin-right: 20px;
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 20%);
  border-radius: 15px;
  box-shadow: 2px -3px 5px rgba(255, 255, 255, 0.5);
  border: solid 2px #8a8ad2;
  cursor: pointer;
  transition: 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .inactive{

  }
  .style-name{
    font-size: 0.8rem;
    margin: 0;
  }

  img{
    width: 50%;
  }


  @media screen and (max-width: 900px){
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
`

const StyledStyleCard = styled.div`
  margin-right: 20px;
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 20%);
  border-radius: 15px;

  cursor: pointer;
  transition: 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .inactive{
    
  }
  .style-name{
    font-size: 0.8rem;
    margin: 0;
  }
  
  img{
    width: 50%; 
  }
  
  
  @media screen and (max-width: 900px){
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
  
  
`

export default StyleCard