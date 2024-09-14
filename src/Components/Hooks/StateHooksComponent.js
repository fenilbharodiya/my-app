import { useState } from "react";

export default function StatehooksComponent () {
    let [count, setcount] = useState(0);
    let increase = () => setcount(count + 1)


    return(
        <>
            Count: {count}
            <button onClick={increase}>increase</button>
        </>
    )
}