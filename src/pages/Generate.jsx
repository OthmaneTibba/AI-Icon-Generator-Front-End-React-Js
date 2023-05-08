import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext.jsx";
import Header from "../components/Header.jsx";
import styled from "styled-components";
import CircleItemColor from "../components/CircleItemColor.jsx";
import StyleCard from "../components/StyleCard.jsx";
import clay from "../assets/clay.png";
import metallic from "../assets/Metallic.png";
import textured from "../assets/Textured.png";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import image from "../assets/image.png";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [disable, setDisable] = useState(false);
  const MAX_CHARACTERS = 32;

  const [isLoading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");

  const [charCount, setCharCount] = useState(0);

  const [stylesImages, setstylesImages] = useState([
    {
      style: "clay",
      img: clay,
      selected: false,
    },
    {
      style: "metalic",
      img: metallic,
      selected: false,
    },
    {
      style: "textured",
      img: textured,
      selected: true,
    },
  ]);

  const [colors, setColors] = useState([
    {
      color: "red",
      selected: true,
    },
    {
      color: "green",
      selected: false,
    },
    {
      color: "blue",
      selected: false,
    },
    {
      color: "purple",
      selected: false,
    },
    {
      color: "orange",
      selected: false,
    },
  ]);

  const { setUser } = useContext(UserContext);

  const onTextChanged = (text) => {
    if (text.length <= MAX_CHARACTERS) {
      setCharCount(text.length);

      setPrompt(text);
    } else {
    }

    setDisable(text.length === MAX_CHARACTERS);
  };

  const onStyleClicked = (index) => {
    const updatedStylesImages = stylesImages.map((image, i) => {
      if (i === index) {
        return { ...image, selected: true };
      } else {
        return { ...image, selected: false };
      }
    });
    setstylesImages(updatedStylesImages);
  };

  const onColorCircleClicked = (index) => {
    const updatedColorList = colors.map((color, i) => {
      if (i === index) {
        return { ...color, selected: true };
      } else {
        return { ...color, selected: false };
      }
    });

    setColors(updatedColorList);
  };

  const onGenerateClicked = async (e) => {
    e.preventDefault();
    setGeneratedImage("");
    const style = stylesImages.find((image) => image.selected)?.style;
    const color = colors.find((c) => c.selected)?.color;

    if (prompt === "") {
      toast("🦄 You have to write prompt", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      return;
    }

    setLoading(true);
    const body = JSON.stringify({
      prompt: prompt,
      color: color,
      style: style,
    });
    await fetch("https://ai-icon-generetor-react-app.vercel.app/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.status === 200) {
          const data = res.json();
          console.log(res.data);
          setLoading(false);
          data.then((res) => {
            console.log(res);
            setGeneratedImage(res.results.image);
          });
        }
        if (res.status === 400) {
          setLoading(false);
          const data = res.json();
          data.then((er) => {
            toast.error(`${er.message}`, {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "dark",
              onClick: () => {
                console.log("sds");
              },
            });
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  };

  const downloadImage = () => {
    fetch(generatedImage)
      .then((res) => {
        res.blob().then((bl) => {
          saveAs(bl, "image.png");
        });
      })
      .catch((error) => {});
  };

  return (
    <SGenerate>
      <Header />
      <ToastContainer />

      <div className="container">
        <div className="left">
          <h1>Let's generate your icon.</h1>
          <h2>What objects would you like to see in your icons?</h2>
          <input
            onChange={(e) => onTextChanged(e.target.value)}
            disabled={disable}
            type="text"
            placeholder="A cute bird"
          />
          <p className="text-chars">
            {charCount}/{MAX_CHARACTERS}
          </p>
          <p>Select the color you want</p>
          <div className="colors-row">
            {colors.map((color, index) => {
              return (
                <div onClick={(e) => onColorCircleClicked(index)} key={index}>
                  <CircleItemColor
                    color={color.color}
                    selected={color.selected}
                    key={index}
                  />
                </div>
              );
            })}
          </div>
          <p>What style do you want ?</p>
          <div className="icons-styles">
            {stylesImages.map((item, index) => {
              return (
                <div onClick={(event) => onStyleClicked(index)} key={index}>
                  <StyleCard
                    img={item.img}
                    name={item.style}
                    selected={item.selected}
                    key={item.style}
                  />
                </div>
              );
            })}
          </div>

          <div className="generate-btn" onClick={onGenerateClicked}>
            <button disabled={isLoading}>Generate</button>
          </div>
        </div>

        <div className="right">
          {generatedImage !== "" ? (
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0 }}
              className="generated-image"
            >
              <AiOutlineDownload
                size={30}
                color={"white"}
                className="download"
                onClick={downloadImage}
              />
              <img src={generatedImage} />
              <h4>Optional you can share your icon with the community</h4>
              <button>Share</button>
            </motion.div>
          ) : (
            <div className="image-conatiner">
              <img className="empty-image" src={image} alt="loading" />
              {isLoading && <LoadingSpinner className={"spinner-container"} />}
            </div>
          )}
        </div>
      </div>
    </SGenerate>
  );
};

const SGenerate = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  page-break-after: always;

  .container {
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .right {
    .generated-image {
      display: flex;
      flex-direction: column;
      align-items: start;
      position: relative;

      .download {
        position: absolute;
        cursor: pointer;
        right: 55%;
        top: 10px;
      }

      h4 {
        color: white;
        margin-top: 20px;
      }

      button {
        background-color: green;
        color: white;
        border: none;
        outline: none;
        height: 40px;
        width: 300px;
        margin-top: 20px;
        font-weight: 900;
        font-size: 1.5rem;
        border-radius: 10px;
        cursor: pointer;
      }
    }

    img {
      width: 200px;
      border-radius: 30px;

      margin-right: 50px;
    }

    .image-conatiner {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 250px;
      height: 250px;
      background-color: rgba(255, 255, 255, 30%);
      border-radius: 15px;

      .empty-image {
        width: 150px;
        border-radius: 0;
        margin: 0;
      }
    }
  }

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 900;
  }

  h2 {
    color: white;
    font-weight: 900;

    margin-top: 20px;
  }

  .text-chars {
    color: white;
    margin-top: 10px;
  }

  p {
    margin-top: 20px;
    color: white;
    font-weight: 900;

    font-size: 1.2rem;
  }

  input {
    width: 65%;
    height: 50px;

    outline: solid 2px #8a8ad2;
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 10px;
    margin-top: 30px;
    color: black;
    padding: 0 10px;

    &::placeholder {
      color: black;
    }
  }

  .colors-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .icons-styles {
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .generate-btn {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 10px;

    button {
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      font-weight: 600;
      font-size: 1rem;
      margin-left: 20px;
    }

    margin-top: 30px;
    width: 400px;
    height: 70px;
    background-color: #4077ab;
    outline: none;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.8s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 1000px) {
    overflow-y: scroll;
    .container {
      flex-direction: column;
      justify-content: center;
      align-items: start;
      margin-left: 50px;
    }

    .right {
      margin-top: 30px;
    }
  }
  @media screen and (max-height: 900px) {
    overflow-y: scroll;

    .colors-row {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    .generate-btn {
      width: 120px;
      height: 40px;
    }

    h1 {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 0.7rem;
    }

    p {
      font-size: 0.9rem;
    }

    input {
      height: 30px;
    }
  }

  @media screen and (max-width: 300px) {
    .generate-btn {
      width: 120px;
      height: 40px;
    }

    h1 {
      font-size: 0.8rem;
    }

    h2 {
      font-size: 0.6rem;
    }

    .right {
      .image-conatiner {
        width: 120px;
        height: 120px;

        .empty-image {
          width: 50px;
        }
      }

      .generated-image {
        display: flex;
        flex-direction: column;
        align-items: start;
        position: relative;

        .download {
          position: absolute;
          cursor: pointer;
          right: 50px;
          top: 10px;
        }

        h4 {
          color: white;
          margin-top: 20px;
        }

        button {
          background-color: green;
          color: white;
          border: none;
          outline: none;
          height: 40px;
          width: 100px;
          margin-top: 20px;
          font-weight: 900;
          font-size: 1.5rem;
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default Generate;
