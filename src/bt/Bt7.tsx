import React, { useState } from 'react';

export default function Bt7() {
    const [numbers, setNumbers] = useState<number[]>([]);

    const addNumber = () => {
      const randomNumber : number = Math.floor(Math.random() * 100) + 1;
      setNumbers([...numbers, randomNumber]);
    };
  
    return (
      <div>
        <button onClick={addNumber}>Thêm số nguyên dương</button>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
      </div>
    );
}
