import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import netlifyIdentity from "netlify-identity-widget";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Normalize } from "styled-normalize";

import LuiismById from "./LuiismById";
import RandomLuiism from "./RandomLuiism";
import SubmitLuiism from "./SubmitLuiism";
import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";

const client = new ApolloClient({
    uri: "/.netlify/functions/apollo",
    request: async operation => {
        if (netlifyIdentity.currentUser()) {
            const token = await netlifyIdentity.currentUser().jwt();
            operation.setContext({
                headers: {
                    authorization: token ? `Bearer ${token}` : ""
                }
            });
        }
    }
});

const Header = styled.div`
    font-size: 60px;
    padding: 20px;
    font-weight: bold;
    position: absolute;
    user-select: none;
`;

const ContentArea = styled.div`
    grid-column: 2/12;
    align-self: center;
    @media screen and (min-width: 480px) {
        grid-column: 3 / 11;
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    height: 100vh;
`;

function App() {
    // Get user on load
    const [userName, setUserName] = useState(
        netlifyIdentity.currentUser()
            ? netlifyIdentity.currentUser().user_metadata.full_name
            : null
    );

    netlifyIdentity.on("login", () => {
        setUserName(
            netlifyIdentity.currentUser()
                ? netlifyIdentity.currentUser().user_metadata.full_name
                : null
        );
    });
    netlifyIdentity.on("logout", () => setUserName(null));

    return (
        <ApolloProvider client={client}>
            <Normalize />
            <Router>
                <Layout>
                    <Header>Luiisms</Header>
                    <UserMenu user={userName} />
                    <Sidebar />
                    <ContentArea>
                        <Route exact path="/" component={RandomLuiism} />
                        <Route
                            path="/submit"
                            render={props => (
                                <SubmitLuiism {...props} userName={userName} />
                            )}
                        />
                        <Route path="/luiism/:id" component={LuiismById} />
                    </ContentArea>
                </Layout>
            </Router>
        </ApolloProvider>
    );
}

export default App;
