import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import LuiismDisplay from "./LuiismDisplay";

const LUIISM = gql`
    query Luiism($id: ID!) {
        luiism(id: $id) {
            id
            ism
            usage
            submittedBy {
                name
            }
        }
    }
`;

function LuiismById({ match }) {
    return (
        <Query query={LUIISM} variables={{ id: match.params.id }}>
            {({ data, loading, error }) => {
                if (loading) {
                    return <LuiismDisplay luiism="Loading..." />;
                } else if (error) {
                    return "Error";
                } else {
                    return (
                        <LuiismDisplay
                            luiism={data.luiism.ism}
                            usage={data.luiism.usage}
                            likes="15"
                            submittedBy={data.luiism.submittedBy}
                        />
                    );
                }
            }}
        </Query>
    );
}

export default LuiismById;
