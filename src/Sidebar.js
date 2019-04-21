import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    position: absolute;
    bottom: 0;
    ul {
        list-style: none;
        width: 200px;
        padding: 0;
        margin: 20px;

        a {
            text-decoration: none;
            div {
                background: white;
                border-radius: 60px;
                font-size: 25px;
                font-weight: bold;
                margin-top: 20px;
                text-align: center;
                box-shadow: 0px 5px 15px -10px rgba(0, 0, 0, 0.75);
                transform: scale(1);
                transition: all 0.1s cubic-bezier(0.17, 0.84, 0.44, 1);
                line-height: 60px;
                color: #00a269;

                &:hover {
                    transform: scale(0.95);
                }
            }
        }
    }
`;

const ListItem = styled.li``;

function Sidebar() {
    return (
        <Nav>
            <ul>
                <li>
                    <Link to="/">
                        <div>Random</div>
                    </Link>
                </li>
                <li>
                    <Link to="/submit">
                        <div>Submit</div>
                    </Link>
                </li>
            </ul>
        </Nav>
    );
}

export default Sidebar;
