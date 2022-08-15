import "./TicketCounter.scss";
import { useState } from 'react';

const TicketCounter = () => {

    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const handleDecrement = () => {
        if(counter === 0) {
            return;
        } else {
            setCounter(counter - 1);
        }
            
    }

    return (
        <div className="counter">
            <p className="text">Counter</p>
            <div className="text count">{counter}</div>
            <div className="buttonPosition">
            <button className="buttons" onClick={handleDecrement}>-</button>
            <button className="buttons" onClick={handleIncrement}>+</button>
            </div>
        </div>

    )

}

export default TicketCounter;