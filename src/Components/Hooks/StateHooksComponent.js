import { useState } from "react";

export default function StatehooksComponent () {
    let [count, setcount] = useState(0);
    let components = {
        ram: 512,
        cpu: 'i5 4th Gen',
    }
    let [getPCParts, setPCParts] = useState(components);

    let increase = () => setcount(count + 1)


    return(
        <>
            Count: {count}
            <button onClick={increase}>increase</button>
        </>
    )
}