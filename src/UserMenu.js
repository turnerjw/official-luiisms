import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const User = styled.div`
    position: absolute;
    right: 25px;
    top: 25px;
    padding: 10px;
    display: flex;
    background: white;
    border-radius: 25px;
    height: 50px;
    box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
    align-items: center;
    box-sizing: border-box;
    transition: all 0.1s cubic-bezier(0.17, 0.84, 0.44, 1);
    cursor: pointer;
    p {
        user-select: none;
        margin: 0 10px;
    }

    &:hover {
        transform: scale(0.95);
    }
`;

function UserMenu() {
    return (
        <User>
            <p>Juggy</p>
            <div>
                <FontAwesomeIcon icon={faUserCircle} size="2x" />
            </div>
        </User>
    );
}

export default UserMenu;
