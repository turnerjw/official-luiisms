import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Luiism from "./Luiism";

const RANDOM_LUIISM = gql`
    {
        randomLuiism {
            id
            value
            usage
            submittedBy {
                name
            }
        }
    }
`;

function RandomLuiism() {
    return (
        <Query query={RANDOM_LUIISM}>
            {({ data, loading, error }) => {
                if (loading) {
                    return <Luiism luiism="Loading..." />;
                } else if (error) {
                    return "Error";
                } else {
                    return (
                        <Luiism
                            luiism={data.randomLuiism.value}
                            usage={data.randomLuiism.usage}
                            likes="15"
                            submittedBy={data.randomLuiism.submittedBy}
                        />
                    );
                }
            }}
        </Query>
    );
}

export default RandomLuiism;
