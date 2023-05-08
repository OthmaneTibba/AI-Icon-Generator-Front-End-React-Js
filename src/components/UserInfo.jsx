import styled from "styled-components";



const UserInfo  = (props) => {
  return (
      <SUserInfo>
          <h6 className="credits">Credits : {props.credits}</h6>
        <img src={props.picture} alt="profile image"/>
      </SUserInfo>
  )
}

const SUserInfo = styled.div`

  width: 200px;
  height: 100px;
  margin-right: 80px;

  display: flex;
  align-items: center;
  

  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 10px;
  }
  
  p2{
    color: white;
  }
  
  
  @media screen and (max-width: 900px){
    img{
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }
  }
  
  
  @media screen and (max-width: 300px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h6{
    margin: 10px 0;
    text-align: center;
    color: white;
    font-size: 0.8rem;
  }

`


export default UserInfo;