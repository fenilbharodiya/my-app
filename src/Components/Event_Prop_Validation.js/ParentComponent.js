import React from "react";
import ChildComponent from "./ChildComponent";


export default function ParentComponent() {
    return (
        <>
            <ChildComponent name='Test user' count={1} />
        </>
    )
}
