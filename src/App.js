import React from 'react';
import { Route, Routes } from "react-router-dom"
import Main from './Main';
import Detail from './Detail';
import { loadWordsFB } from "./redux/modules/words";
import { useDispatch } from "react-redux";




const App = (props) => {

    
    return (
    <div>
    <Routes>
        <Route path="/" element ={<Main/>}/>
        <Route path="/Detail/" element ={<Detail/>}/>
    </Routes>
    </div>
    )

}

export default App;