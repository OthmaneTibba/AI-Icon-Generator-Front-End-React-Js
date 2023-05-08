import styled from "styled-components";
import Header from "../components/Header.jsx";
import {useState , useEffect} from "react";
import {motion} from "framer-motion";

const Community = () => {

const [images , setImages] = useState([]);


const loadAllSharedImages = async () => {
 await fetch("http://localhost:5000/api/images" , {
    method : "GET",
    headers : {
      "Content-Type": "application/json",
    }
  }).then((response) => {
    const data = response.json();
    data.then((images) => {
      console.log(images);
       setImages(images);
    })
 })
}


useEffect(()  => {
  console.log("called");
  loadAllSharedImages()
}, [])


  return <SCommunity>
    <Header />
    <div>
      {
        images.map((image , index) => {
          return <motion.img className="c-img" animate={{opacity : 1}} initial={{opacity : 0}}  transition={{duration : index * 0.1}} src={image.image_url} key={index}/>
        })
      }
    </div>
  </SCommunity>;
};


const SCommunity = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  page-break-after: always;

  div{
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .c-img{
      width: 100px;
      margin: 10px;
      border-radius: 10px;
    }
  }
  
 
  
`

export default            Community;
