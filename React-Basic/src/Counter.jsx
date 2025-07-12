import React from 'react'
import { useEffect,useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0);
    return ( 
        <>
            <h5>Count: {count}</h5>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Reduce</button>
        </>
    )
}

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setSeconds(s => s+1),1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
        <p>Timer : {seconds} Seconds</p>
        </>
    )
}
