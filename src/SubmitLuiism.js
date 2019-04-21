import React, { useState } from "react";
import styled from "styled-components";

function SubmitLuiism() {
    const [luiism, setLuiism] = useState("");
    return (
        <input
            type="text"
            value={luiism}
            onChange={event => setLuiism(event.target.value)}
        />
    );
}

export default SubmitLuiism;
