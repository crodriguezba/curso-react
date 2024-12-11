import  { React, useState } from "react";

const Counter = () => {
   
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <div>
                <button 
                    onClick={() => setCount(count - 1)} >
                    Decrementar
                </button>
                <button 
                    onClick={() => setCount(count + 1)} >
                        Aumentar
                </button>
            </div>
        </div>
    )
}
export default Counter;