import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { createWords, loadWordsFB } from "./redux/modules/words";
import { useDispatch } from "react-redux";
import './App.css'
import {db} from "./firebase";



const Main = (props) => {

    const words = useSelector ((state) => state.words.list);
    
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(loadWordsFB());

    }, []);

    return (
        
    <>
    <H1>나만의 단어장</H1>
    <Link to="/Detail"><Button>추가하기</Button></Link>
    {words.map((i, index)=> {
        return ( 
            <Rap>
            <div key={index}>
                <Card>
                <p>단어: {i.word}</p>
                <p>뜻: {i.mean}</p>
                <Text><p>예문: {i.example}</p></Text>
                </Card>
            </div>
            </Rap>
        )
    })}
    
    </>
    )

}

const Card = styled.div`
border-style: groove;
border-radius: 10px;
padding: 10px;
width: 300px;
margin: 10px;
`

const H1 = styled.h1`
font-family: "Yfont";
text-align: center;
`
const Rap = styled.div`
display: flex;
justify-content: center;
font-family: "Yfont";
font-weight: 1000;
`
const Button = styled.a`
font-family: "Yfont";
display: flex;
justify-content: center;
margin-bottom: 10px;
font-weight: 1000;
`
const Text = styled.p`
color: #0000ff
`


export default Main;