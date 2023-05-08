import styled from "styled-components";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  function openDrawer(e) {
    e.preventDefault();
    if (drawer) {
      setDrawer(false);
    } else {
      setDrawer(true);
    }
  }

  return (
    <SHeader>
      <div className="logo">
        <img alt="logo" src={logo} />
        <h4 className="logo-name">Ai-Icon-Generator</h4>
      </div>
      <nav className={drawer ? "navigation active" : "navigation"}>
        <Link to={"/"}>Home</Link>
        <Link to={"/generate"}>Generate</Link>
      </nav>
      <div className="mobile" onClick={(e) => openDrawer(e)}>
        {drawer ? <CloseDrawerIcon /> : <HumberMenuIcon />}
      </div>
    </SHeader>
  );
};
export default Header;

const HumberMenuIcon = styled(AiOutlineMenu)`
  color: white;

  font-size: 30px;

  display: none;
  @media screen and (max-width: 900px) {
    display: flex;

    position: absolute;

    right: 10px;
  }
`;

const CloseDrawerIcon = styled(AiOutlineClose)`
  color: white;
  font-size: 30px;
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    position: absolute;

    right: 10px;
  }
`;

const SHeader = styled.header`
  margin: 30px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .mobile {
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;

    img {
      width: 80px;
    }

    .logo-name {
      color: white;
      margin-left: 10px;

      font-size: 1.3rem;
    }
  }

  .navigation {
    margin-left: 50px;

    a {
      text-decoration: none;
      color: white;
      margin: 0 10px;
      font-weight: 300;
      transition: 0.6s ease;

      &:hover {
        color: #4077ab;
      }
    }
  }

  .registration {
    margin-right: 50px;

    .google-login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 150px;
      cursor: pointer;
      border-radius: 15px;
      padding: 10px;
      background-color: white;

      h6 {
        font-weight: 300;
        font-size: 1rem;
        margin-left: 5px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .logo {
      img {
        width: 30px;
      }

      h1 {
        font-size: 0.8rem;
      }
    }

    .navigation {
      display: flex;
      flex-direction: column;
      position: absolute;
      align-items: flex-end;
      transition: 0.5s ease-in-out;
      right: -100%;
      top: 100px;

      a {
        margin-top: 10px;
      }

      z-index: 10;
    }

    .navigation.active {
      right: 10px;
    }

    .registration {
      display: flex;
      flex-direction: row;
      justify-content: start;
      width: 100vh;
      align-items: center;
      margin: 10px 0;

      .google-login-btn {
        background-color: transparent;

        p {
          color: white;
          font-size: 15px;
        }
      }
    }
  }
`;
