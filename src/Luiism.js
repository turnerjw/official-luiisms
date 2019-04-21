import React from "react";
import styled from "styled-components";

const Center = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const Ism = styled.div`
    font-size: 8vw;
    font-style: italic;
    font-weight: bold;
`;

const Quote = styled.div`
    font-size: 4vw;
    color: grey;
    text-align: right;
`;

const Usage = styled.div`
    font-size: 2.5vw;
    color: grey;
`;

const ActionArea = styled.div`
    margin-top: 15px;
    align-self: flex-end;
    border-top: 5px solid grey;
    display: flex;
    flex-direction: column;
    width: 34%;
    justify-content: flex-end;
    text-align: right;

    button,
    p {
        margin: 0;
        margin-top: 10px;
    }
`;

function Luiism({ luiism, usage, submittedBy, likes }) {
    return (
        <Center>
            <Ism>"{luiism}"</Ism>
            <Usage>{usage}</Usage>
            <Quote>- Lui</Quote>
            <ActionArea>
                <p>Submitted By: {submittedBy}</p>
                <label htmlFor="">
                    {likes}
                    <button>+1</button>
                </label>
                <button>Favourite</button>
            </ActionArea>
        </Center>
    );
}

export default Luiism;
