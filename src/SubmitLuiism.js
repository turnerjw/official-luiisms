import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";

const Center = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const Ism = styled.input`
    font-size: 8vw;
    font-style: italic;
    font-weight: bold;
    width: 100%;
    text-align: center;
    border: none;
`;

const Usage = styled.input`
    font-size: 2.5vw;
    color: grey;
    width: 100%;
    border: none;
    text-align: center;
    margin-top: 5px;
`;

const Quote = styled.div`
    font-size: 4vw;
    color: grey;
    text-align: right;
`;

const ActionArea = styled.div`
    color: grey;
    margin-top: 15px;
    align-self: flex-end;
    border-top: 5px solid grey;
    display: flex;
    flex-direction: column;
    width: 40%;
    min-width: 150px;
`;

const Button = styled.button`
    font-size: inherit;
    color: black;
    width: min-content;
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 20px;
    display: flex;
    background: white;
    border-radius: 25px;
    border: none;
    height: 50px;
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
    align-items: center;
    box-sizing: border-box;
    transition: all 0.1s cubic-bezier(0.17, 0.84, 0.44, 1);
    cursor: pointer;
    p {
        user-select: none;
        margin-right: 10px;
    }

    div {
        color: #00a269;
    }

    &:hover {
        transform: scale(0.95);
    }
`;

const CREATE_LUIISM = gql`
    mutation CreateLuiism($ism: String!, $usage: String!) {
        createLuiism(ism: $ism, usage: $usage) {
            id
            ism
            usage
            submittedBy {
                name
            }
        }
    }
`;

function SubmitLuiism({ userName, history }) {
    const [ism, setIsm] = useState(null);
    const [usage, setUsage] = useState(null);
    return (
        <Mutation
            mutation={CREATE_LUIISM}
            onCompleted={({ createLuiism }) => {
                history.push(`/luiism/${createLuiism.id}`);
            }}
        >
            {(createLuiism, { data }) => {
                return (
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            createLuiism({ variables: { ism, usage } });
                            setIsm(null);
                            setUsage(null);
                        }}
                    >
                        <Center>
                            <Ism
                                placeholder="Luiism"
                                autoFocus={true}
                                value={ism || ""}
                                onChange={e => setIsm(e.target.value)}
                            />
                            <Usage
                                placeholder="Usage"
                                value={usage || ""}
                                onChange={e => setUsage(e.target.value)}
                            />
                            <Quote>- Lui</Quote>
                            <ActionArea>
                                <Button type="submit">
                                    <p>Submit</p>
                                    <div>
                                        <FontAwesomeIcon
                                            icon={faHandPeace}
                                            size="2x"
                                        />
                                    </div>
                                </Button>
                                {!userName && (
                                    <p>
                                        Log in or Sign up to be credited for
                                        your discovery
                                    </p>
                                )}
                            </ActionArea>
                        </Center>
                    </form>
                );
            }}
        </Mutation>
    );
}

export default SubmitLuiism;
