import styled from "styled-components";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/Metallic.png";
import img8 from "../assets/Textured.png";
import AI_Image from "./AI-Image";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Content = () => {
  const imagesList = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <SContent>
      <div className="left">
        <h1>
          Experience the magic of AI-generated icons And generate icons with one
          click
        </h1>
        <p>
          Saving time, delivering smarter icons with AI-generated efficiency for
          your businesses website, applications, or brand
        </p>
        <div className="get-started">
          <button>Get started</button>

          <p>Free 🥰</p>
        </div>
        <h2>What you benifit of using owr tool ?</h2>
        <div className="features">
          <div className="feature">
            <SAiOutlineCheckCircle />
            <h4>fast delivery in less than 1 minute </h4>
          </div>
          <div className="feature">
            <SAiOutlineCheckCircle />
            <h4>customized color, shape, and style</h4>
          </div>
          <div className="feature">
            <SAiOutlineCheckCircle />
            <h4>Money and time saving </h4>
          </div>
          <div className="feature last">
            <SAiOutlineCheckCircle />
            <h4>icons can improve design efficiency by repetitive tasks</h4>
          </div>
        </div>
      </div>
      <div className="right">
        {imagesList.map((img) => (
          <AI_Image imageUrl={img} key={img} />
        ))}
      </div>
    </SContent>
  );
};

const SAiOutlineCheckCircle = styled(AiOutlineCheckCircle)`
  color: green;
  font-size: 25px;
`;

const SContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px 150px;
  h1 {
    margin-top: 45px;
    color: white;

    font-weight: 900;

    opacity: 0.8;
    font-size: 2.5rem;
    text-align: start;

    width: 80%;
  }

  p {
    margin-top: 10px;
    color: gray;
    font-weight: 300;
    font-size: 1.2rem;
  }
  h2 {
    color: white;
    margin-top: 30px;
  }

  .features {
    margin-top: 20px;
  }

  .feature {
    margin-top: 20px;
    display: flex;

    h4 {
      color: white;
      margin-left: 10px;
    }
  }

  .get-started {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    button {
      margin-top: 20px;
      width: 150px;
      height: 40px;
      border-radius: 7px;
      border: none;
      outline: none;
      background-image: linear-gradient(to right, #6697fa 0%, #ee7ae2 51%);
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
      transition: 0.6s ease-in-out;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
    p {
      margin-top: 20px;
      margin-left: 15px;
    }
  }

  @media screen and (max-width: 1200px) {
    margin: 5px 50px;
    h1 {
      font-size: 2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 90px;

    .right {
      margin-top: 15px;
    }

    h1 {
      margin-top: 45px;

      color: white;
      font-weight: 900;
      opacity: 0.8;
      font-size: 1.2rem;
      text-align: start;
      width: 100%;
    }
    .feature {
      margin-top: 20px;
      display: flex;

      h4 {
        color: white;
        font-size: 0.8rem;
        margin-left: 10px;
      }
    }
  }
`;

export default Content;
