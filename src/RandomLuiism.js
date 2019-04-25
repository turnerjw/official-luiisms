import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import LuiismDisplay from "./LuiismDisplay";

const RANDOM_LUIISM = gql`
    {
        randomLuiism {
            id
            ism
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
                    return <LuiismDisplay luiism="Loading..." />;
                } else if (error) {
                    return "Error";
                } else {
                    return (
                        <LuiismDisplay
                            luiism={data.randomLuiism.ism}
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
