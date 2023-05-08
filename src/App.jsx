import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import Generate from "./pages/Generate.jsx";
import Community from "./pages/Community.jsx";


const App = () => {
    const [user, setUser] = useState({isLogged: false, email: "", picture: "", credits: "" , token : ""})
    return (
        <UserContext.Provider value={{user, setUser}}>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/generate' element={<Generate/>}/>
                <Route path={'/community'} element={<Community />} />
            </Routes>
        </UserContext.Provider>
    );

}


export default App;