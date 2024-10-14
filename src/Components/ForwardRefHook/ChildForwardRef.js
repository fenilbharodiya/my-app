import { forwardRef } from "react";


const ChildForwrdRef = forwardRef((props, ref) => {
    return <input ref={ref} />
});

export default ChildForwrdRef;