import styled from "styled-components";


const CircleItemColor = (props) => {
    if (props.selected) {
        return <SCircleItemColorSelected>
            <div className="circle" style={{backgroundColor: `${props.color.toString()}`}}></div>

        </SCircleItemColorSelected>
    } else {
        return <SCircleItemColor>
            <div className="circle" style={{backgroundColor: `${props.color.toString()}`}}></div>

        </SCircleItemColor>
    }
}


const SCircleItemColorSelected = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 25px;
  margin-right: 20px;

  cursor: pointer;
  transition: 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }

  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: solid 5px black;

  }
  @media screen and (max-width: 900px){
    width: 50px;
    height: 50px;
  }

`

const SCircleItemColor = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 25px;
  margin-right: 20px;

  cursor: pointer;
  transition: 0.6s ease;

  &:hover {
    transform: scale(1.1);
  }

  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;


  }
  
  @media screen and (max-width: 900px){
    width: 50px;
    height: 50px;
  }


`

export default CircleItemColor;