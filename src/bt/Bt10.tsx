import React, { useState } from 'react';

export default function Bt10() {
    const genders = ['Nam', 'Nữ', 'Khác'];

    const [currentGender, setCurrentGender] = useState<string>('Nam');
  
    const handleButtonClick = () => {
      const randomIndex = Math.floor(Math.random() * genders.length);
      const randomGender = genders[randomIndex];
      setCurrentGender(randomGender);
    };
  
    return (
      <div>
        <p>Giới tính hiện tại: {currentGender}</p>
        <button onClick={handleButtonClick}>Random gender</button>
      </div>
    );
}
