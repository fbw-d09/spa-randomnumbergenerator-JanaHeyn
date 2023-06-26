import React, { useState } from "react";

const RandomList = () => {
    const [numbers, setNumbers ] = useState([]);

    const handleNumbers = () => {
        const newNumber = Math.floor(Math.random() * 10);
        setNumbers([...numbers, newNumber])
        // console.log(newNumber);
    }
    
    return(
        <div className="RandomList">
            <button onClick={handleNumbers}>Hier klicken</button>
            <ul>
                {
                    numbers.map((number, i) => (
                        <li key={i}>{number}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default RandomList;