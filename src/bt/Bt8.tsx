import React, { useState } from 'react';

export default function Bt8() {
    const [count, setCount] = useState<number>(0); 

    const incrementCount = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <button onClick={incrementCount}>Tăng count lên 1 đơn vị</button>
        <p>Giá trị của count: {count}</p>
      </div>
    );
}
