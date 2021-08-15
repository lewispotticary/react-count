import React, {useState} from 'react';

function Counter (){

    const [count, setCount] = useState(0);

    function decrease (){
        setCount(count - 1);
    }

    function increase (){
        setCount(count + 1);
    }

    return(
        <div className="counterDiv">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default Counter;