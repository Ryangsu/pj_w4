import React from "react";
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { createWords, loadWordsFB, addWordsFB} from "./redux/modules/words";
import styled from "styled-components";
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"



const Detail = (props) => {

    const word = React.useRef(null);
    const mean = React.useRef(null);
    const example = React.useRef(null);
    const dispatch = useDispatch();


    const navigate = useNavigate();


    const addWords = () => {
        const words = word.current.value
        const means = mean.current.value
        const examples = example.current.value
        const new_words = {example:examples, mean:means, word:words }
        console.log(new_words)

        dispatch(addWordsFB(new_words))
        // dispatch(createWords(new_words))
        // dispatch(createWords(word.current.value))
        // dispatch(createWords(mean.current.value))
        // dispatch(createWords(example.current.value))
        navigate("/");
    }
return (
    <Rap>
    <AddBox>
    <H1>단어추가</H1>
    <p>단어</p>
    <input ref={word}></input>
    <p>뜻</p>
    <input ref={mean}></input>
    <p>예제</p>
    <input ref={example}></input>
    <Button onClick={() =>addWords()}>저장하기!</Button>
    </AddBox>
    </Rap>
)

};


const AddBox = styled.div`
border-style: groove;
border-radius: 10px;
padding: 10px;
width: 200px;
margin: 10px;
font-weight: 1000;
font-family: "Yfont";

`

const Rap = styled.div`
display: flex;
justify-content: center;
`

const H1 = styled.h1`
text-align: center;
`

const Button =styled.p`
display: flex;
justify-content: center;
font-family: "Yfont";
font-weight: 1000;


`

export default Detail;