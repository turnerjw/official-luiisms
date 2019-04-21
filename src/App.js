import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import netlifyIdentity from "netlify-identity-widget";

import RandomLuiism from "./RandomLuiism";
import SubmitLuiism from "./SubmitLuiism";
import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";

const Header = styled.div`
    font-size: 60px;
    padding: 20px;
    font-weight: bold;
    position: absolute;
    user-select: none;
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
    const [userName, setUserName] = useState(null);

    netlifyIdentity.on("login", () => {
        const user = netlifyIdentity.currentUser();
        setUserName(user.user_metadata.full_name);
    });
    netlifyIdentity.on("logout", () => setUserName(null));

    return (
        <Router>
            <Layout>
                <Header>Luiisms</Header>
                <UserMenu user={userName} />
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
