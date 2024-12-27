import { useState } from "react";
function ButtonState() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Button State</h2>
            <p>Count : {count}</p>
            <button onClick = {() => setCount(count + 1)}> Increment</button>
            <button onClick = {() => setCount(count - 1)}> Decrement</button>
            <button onClick = {() => setCount(0)}> Reset</button>
        </div>
    )
}

export default ButtonState