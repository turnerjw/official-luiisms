import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import RandomLuiism from "./RandomLuiism";
import SubmitLuiism from "./SubmitLuiism";
import Sidebar from "./Sidebar";

const Header = styled.div`
    font-size: 60px;
    padding: 20px;
    font-weight: bold;
    position: absolute;
    user-select: none;
`;

const User = styled.div`
    position: absolute;
    right: 25px;
    top: 25px;
`;

const ContentArea = styled.div`
    grid-column: 3 / 11;
    align-self: center;
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: 100vh;
`;

function App() {
    return (
        <Router>
            <Layout>
                <Header>Luiisms</Header>
                <User>
                    <FontAwesomeIcon icon={faUserCircle} size="2x" />
                </User>
                <Sidebar />
                <ContentArea>
                    <Route exact path="/" component={RandomLuiism} />
                    <Route exact path="/submit" component={SubmitLuiism} />
                </ContentArea>
            </Layout>
        </Router>
    );
}

export default App;
